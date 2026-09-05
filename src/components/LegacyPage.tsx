import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

function showElement(element: HTMLElement, display = "block") {
  element.style.removeProperty("display");
  if (getComputedStyle(element).display === "none") element.style.display = display;
}

function hideElement(element: HTMLElement) {
  element.style.display = "none";
}

/**
 * Renders an archived phantomsecure.com page (2017 markup) and reimplements
 * the original jQuery behaviour without animation: tile auto-height, image
 * hover swap and the mobile burger menu.
 */
/**
 * Defers offscreen artwork so the first screen paints sooner. The first few
 * images (header icons + hero) stay eager so nothing above the fold pops in.
 * Runs identically on server and client, so hydration still matches.
 */
function optimizeImages(html: string) {
  let index = 0;
  return html.replace(/<img\b(?![^>]*\bloading=)/gi, () => {
    index += 1;
    return index <= 8 ? '<img decoding="async"' : '<img loading="lazy" decoding="async"';
  });
}

/**
 * Canonicalises the archived markup so the string React serialises for SSR
 * matches the browser's innerHTML representation, avoiding hydration errors
 * caused by unquoted or single-quoted attributes.
 */
function normalizeHtml(html: string) {
  return html.replace(/<[^>]+>/g, (tag) => {
    // Lowercase tag names.
    tag = tag.replace(
      /^<(\/?)([a-zA-Z0-9-]+)/,
      (_, slash, name) => `<${slash}${name.toLowerCase()}`,
    );
    // Normalise every attribute to double-quoted and lowercase its name.
    return tag.replace(
      /(\s+)([a-zA-Z][a-zA-Z0-9-]*)(?:='([^']*)'|="([^"]*)"|=([^\s>"']+))?/g,
      (_, space, name, single, double, unquoted) => {
        const lowerName = name.toLowerCase();
        const escapeQuotes = (value: string) => value.replace(/"/g, "&quot;");
        if (single !== undefined) return `${space}${lowerName}="${escapeQuotes(single)}"`;
        if (double !== undefined) return `${space}${lowerName}="${escapeQuotes(double)}"`;
        if (unquoted !== undefined) return `${space}${lowerName}="${escapeQuotes(unquoted)}"`;
        return `${space}${lowerName}`;
      },
    );
  });
}

export function LegacyPage({ html: rawHtml }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();
  const html = useMemo(() => optimizeImages(normalizeHtml(rawHtml)), [rawHtml]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const root = ref.current;
    if (!root) return;

    const resize = () => {
      root.querySelectorAll<HTMLElement>("div.tile").forEach((tile) => {
        // Tiles whose only backdrop is an invisible spacer image should hug
        // their content instead of the (approximate) artwork aspect ratio.
        const backdrop = tile.querySelector<HTMLImageElement>("img.tileimg");
        if (backdrop && getComputedStyle(backdrop).opacity === "0") {
          const content = Array.from(tile.children).filter((c) => c !== backdrop) as HTMLElement[];
          const bottom = content.reduce(
            (max, el) => Math.max(max, el.offsetTop + el.offsetHeight),
            0,
          );
          if (bottom) tile.style.height = `${bottom * 1.04}px`;
          return;
        }
        const heights = Array.from(tile.querySelectorAll("img")).map((i) => i.clientHeight);
        const max = heights.length ? Math.max(...heights) : 0;
        if (!max) return;
        const factor = tile.getAttribute("data-height-factor");
        if (factor) tile.style.height = `${max * Number(factor)}px`;
        else if (tile.getAttribute("data-nomargin") === "1") tile.style.height = `${max}px`;
        else tile.style.height = `${max * 1.05}px`;
      });
      root.querySelectorAll<HTMLElement>(".hresize").forEach((el) => {
        const f = el.getAttribute("data-resizefactor");
        if (f) el.style.height = `${el.clientWidth / Number(f)}px`;
      });
    };

    const cleanups: Array<() => void> = [];

    // hover image swap
    root.querySelectorAll<HTMLImageElement>("img[hoversrc]").forEach((img) => {
      const org = img.getAttribute("src") ?? "";
      const hover = img.getAttribute("hoversrc") ?? "";
      const enter = () => (img.src = hover);
      const leave = () => (img.src = org);
      img.addEventListener("mouseenter", enter);
      img.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        img.removeEventListener("mouseenter", enter);
        img.removeEventListener("mouseleave", leave);
      });
    });

    // burger menu
    const menu = root.querySelector<HTMLElement>(".mmenu");
    const burger = root.querySelector<HTMLElement>(".mobile a");
    const toggleMenu = (e: Event) => {
      e.preventDefault();
      if (menu) menu.style.display = menu.style.display === "block" ? "none" : "block";
    };
    burger?.addEventListener("click", toggleMenu);
    if (burger) cleanups.push(() => burger.removeEventListener("click", toggleMenu));

    // Dedicated, reliable video toggle (replaces the archived jQuery/video.js call).
    root.querySelectorAll<HTMLElement>("[data-video-toggle]").forEach((trigger) => {
      const selector = trigger.getAttribute("data-video-toggle") ?? "";
      const onToggle = (event: Event) => {
        event.preventDefault();
        const panel = root.querySelector<HTMLElement>(selector);
        if (!panel) return;
        const video = panel.querySelector("video");
        const isHidden = getComputedStyle(panel).display === "none";
        if (isHidden) {
          panel.style.display = "block";
          panel.scrollIntoView({ behavior: "smooth", block: "center" });
          void video?.play().catch(() => undefined);
        } else {
          video?.pause();
          panel.style.display = "none";
        }
      };
      trigger.addEventListener("click", onToggle);
      cleanups.push(() => trigger.removeEventListener("click", onToggle));
    });

    // Reimplement the small, known subset of jQuery actions used by the archive.
    // Order page: "add to order" writes the chosen quantity into the summary.
    root.querySelectorAll<HTMLElement>("[data-add-to-order]").forEach((button) => {
      const addToOrder = () => {
        const model = root.querySelector<HTMLSelectElement>("#model")?.value ?? "1";
        const unit = root.querySelector<HTMLSelectElement>("#unit")?.value ?? "1";
        const cell = root.querySelector<HTMLElement>(`#od${model}`);
        const hidden = root.querySelector<HTMLInputElement>(`#quantity${model}`);
        if (cell) cell.textContent = unit;
        if (hidden) hidden.value = unit;
      };
      button.addEventListener("click", addToOrder);
      cleanups.push(() => button.removeEventListener("click", addToOrder));
    });

    root.querySelectorAll<HTMLElement>("[onclick]").forEach((element) => {
      // The burger already has a dedicated handler above; running both would
      // toggle the menu twice and leave it closed.
      if (element.closest(".mobile")) {
        element.removeAttribute("onclick");
        return;
      }
      const action = element.getAttribute("onclick") ?? "";

      element.removeAttribute("onclick");
      const activate = (event: Event) => {
        event.preventDefault();

        const selectors = Array.from(
          action.matchAll(/\$\(["']([^"']+)["']\)/g),
          (match) => match[1],
        );
        if (action.includes(".ans")) {
          root.querySelectorAll<HTMLElement>(".ans").forEach(hideElement);
        }

        selectors.forEach((selector) => {
          if (selector === ".ans") return;
          root.querySelectorAll<HTMLElement>(selector).forEach((target) => {
            if (action.includes("slideToggle") || action.includes(".toggle()")) {
              if (target === element) hideElement(target);
              else if (getComputedStyle(target).display === "none") showElement(target);
              else hideElement(target);
            } else if (action.includes("fadeIn")) {
              showElement(target);
            } else if (action.includes("fadeOut")) {
              hideElement(target);
            }
          });
        });

        const video = (element.closest("#player")?.querySelector("video") ??
          root.querySelector<HTMLVideoElement>(
            "#divVideo video, #player2 video, video#video",
          )) as HTMLVideoElement | null;
        if (action.includes("videojs") && video) {
          if (action.includes("pause")) video.pause();
          else {
            video.load();
            void video.play().catch(() => undefined);
          }
        }
      };
      element.addEventListener("click", activate);
      cleanups.push(() => element.removeEventListener("click", activate));
    });

    // Native equivalents for archived onchange handlers.
    root.querySelectorAll<HTMLSelectElement>("select[onchange]").forEach((select) => {
      const action = select.getAttribute("onchange") ?? "";
      select.removeAttribute("onchange");
      if (!action.includes("#modelimg") || !action.includes("img_pd_")) return;
      const changeModel = () => {
        const model = root.querySelector<HTMLImageElement>("#modelimg");
        if (model) model.src = `/ps/img_pd_${select.value}.png`;
      };
      select.addEventListener("change", changeModel);
      cleanups.push(() => select.removeEventListener("change", changeModel));
    });

    // Animations are disabled: scroll reveals and the skrollr parallax are gone.
    // Elements keep their authored start transform so the layout stays correct.
    const parseTransform = (value: string | null) => {
      const match = value?.match(/translate\((-?[\d.]+)%,\s*(-?[\d.]+)%\)/);
      return match ? [Number(match[1]), Number(match[2])] : [0, 0];
    };
    root.querySelectorAll<HTMLElement>(".skrollable").forEach((element) => {
      const [x, y] = parseTransform(element.getAttribute("data-0"));
      element.style.transform = `translate(${x}%, ${y}%)`;
    });

    // client-side navigation for internal links
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.("a");
      const href = a?.getAttribute("href");
      if (!a || !href || !href.startsWith("/") || a.getAttribute("target")) return;
      e.preventDefault();
      if (menu) menu.style.display = "none";
      navigate({ to: href });
    };
    root.addEventListener("click", onClick);

    // Coalesce layout work into a single animation frame instead of polling on
    // a timer, which caused constant reflow (and the scroll jank).
    let frame = 0;
    const scheduleResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        resize();
      });
    };

    resize();
    const imgs = Array.from(root.querySelectorAll("img"));
    imgs.forEach((i) => i.addEventListener("load", scheduleResize));
    window.addEventListener("resize", scheduleResize);

    // The preview/embedded frame does not have focus until it is clicked, which
    // made wheel and keyboard scrolling ignore the first interaction.
    window.focus();

    return () => {
      window.removeEventListener("resize", scheduleResize);
      root.removeEventListener("click", onClick);
      imgs.forEach((i) => i.removeEventListener("load", scheduleResize));
      cleanups.forEach((cleanup) => cleanup());
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [html, isMounted, navigate]);

  return (
    // The markup is rendered on the server too so crawlers see the real page
    // content; suppressHydrationWarning keeps the archived (imperfect) markup
    // from tripping hydration on the client.
    <div
      id="ps-legacy"
      ref={ref}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
