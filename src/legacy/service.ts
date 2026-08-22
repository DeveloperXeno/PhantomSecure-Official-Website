const nav = `<div class=mmenu style='display: none; position: absolute; width: 100vw; top: 10vw; z-index:100;'>
	<div>
		<ul style='  list-style-type: none; margin: 0; padding: 0; overflow: hidden;'>

<li class=mmh><b>PRODUCT</b><br>
<li><a href="/">HOME</a><br>
<li><a href="/encrypted-messaging">ENCRYPTED MESSAGING</a><br>
<li><a href="/encrypted-chat">ENCRYPTED CHAT</a><br>
<li><a href="/packages">PACKAGES</a>
<li class=mmh><b>CORPORATE</b><br>
<li><a href="/about">ABOUT</a><br>
<li><a href="/our-service">OUR SERVICE</a><br>
<li><a href="/privacy-matters">PRIVACY MATTERS</a><br>
<li><a href="/start-today">START TODAY</a>
<li class=mmh><b>POLICIES & TERMS</b><br>
<li><a href="/legal">LEGAL COMPLIANCE</a><br>
<li><li class=mmh><b>CONNECT</b><br>
<li><a href="/privacy-articles">PRIVACY ARTICLES</a><br>

		</ul>
	</div>
</div>
<div class=topbar>
<div class=mobile>
  <li class="icon">
    <a href="javascript:;" style="font-size:6vw;">☰</a>
  </li>
</div>
<div class="left topicon mhidden">
<a href="/"><img src="/ps/top_1.png" border=0 class=topicon></a><a href="/encrypted-messaging"><img src="/ps/top_2.png" border=0 class="topicon mhidden"></a><a href="/encrypted-chat"><img src="/ps/top_3.png" border=0 class="topicon mhidden"></a><a href="/packages"><img src="/ps/top_4.png" border=0 class="topicon"></a>
</div>
<div class="right topicon mhidden">
<a href="/buy"><img src="/ps/top_5.png" border=0 class=topicon></a></div>
</div>`;

const footer = `<div class=footer1>

<table width=100% cellpadding=10 cellspacing=10 style='padding-left: 5%; padding-right: 5%' class=mhidden>
<tr>
<td width=25% valign=top>
<b>PRODUCT</b><br>
<a href="/">HOME<br>
<a href="/encrypted-messaging">ENCRYPTED MESSAGING</a><br>
<a href="/encrypted-chat">ENCRYPTED CHAT</a><br>
<a href="/packages">PACKAGES</a>
</td>
<td width=25% valign=top>
<b>CORPORATE</b><br>
<a href="/about">ABOUT</a><br>
<a href="/our-service">OUR SERVICE</a><br>
<a href="/privacy-matters">PRIVACY MATTERS</a><br>
<a href="/start-today">START TODAY</a>
</td>

<td width=25% valign=top>
<b>POLICIES & TERMS</b><br>
<a href="/legal">LEGAL COMPLIANCE</a><br>
</td>

<td width=25% valign=top>
<b>CONNECT</b><br>
<a href="/privacy-articles">PRIVACY ARTICLES</a><br>
</td>
</tr>
</table>
</div>
<div class="tile footer2">
<div class=left>
<img src="/__l5e/assets-v1/f3150a7e-ddeb-44b7-b30f-7779e4189fe8/phantom-secure-logo.png">
</div>
<div class=right>
</div>
</div>`;

export const html = `${nav}

<div class="ps-section">
	<div class="ps-wrap">
		<div class="ps-hero">
			<img src="/ps/images/service-hero.jpg" alt="Two encrypted handsets exchanging an end-to-end encrypted message" width="1600" height="912" fetchpriority="high" decoding="async">
			<div class="ps-hero-body">
				<div class="ps-eyebrow">Our Service</div>
				<h1 class="ps-h1">End-to-end encrypted communication</h1>
				<p class="ps-lead">A fully private communications environment where every message is encrypted on the device before transmission and can only be read by the intended recipient. Client identity and content are never stored on our system &mdash; what passes through is indecipherable encrypted data.</p>
				<a class="ps-cta" href="/packages">View packages</a>
				<a class="ps-cta ghost" href="/buy">Order a device</a>
			</div>
		</div>

		<div class="ps-grid">
			<div class="ps-card">
				<h3>Device level encryption</h3>
				<p>Messages are encrypted before they ever leave the handset, so nothing readable is ever transmitted across a network.</p>
			</div>
			<div class="ps-card">
				<h3>No stored content</h3>
				<p>Our infrastructure holds no message content and no client identity &mdash; there is nothing to hand over and nothing to leak.</p>
			</div>
			<div class="ps-card">
				<h3>Closed network</h3>
				<p>Communication stays inside a vetted, invitation-only network of verified devices instead of the open internet.</p>
			</div>
			<div class="ps-card">
				<h3>Remote wipe</h3>
				<p>A lost or seized handset can be wiped remotely, removing keys and stored data within moments of the request.</p>
			</div>
			<div class="ps-card">
				<h3>Hardened handsets</h3>
				<p>Camera, microphone, GPS and app installation are stripped or locked down to shrink the attack surface to a minimum.</p>
			</div>
			<div class="ps-card">
				<h3>24/7 support</h3>
				<p>A dedicated support team is reachable around the clock for provisioning, wipes and account changes.</p>
			</div>
		</div>
	</div>
</div>

<div class="ps-section alt">
	<div class="ps-wrap">
		<h2 class="ps-h2">How a message travels</h2>
		<p class="ps-lead">Encrypt on device, relay as ciphertext, decrypt only on the recipient's handset. No intermediate step ever holds a readable copy.</p>
		<img class="ps-media" src="/ps/service_1.png" alt="Diagram of the encrypted message flow between two devices" loading="lazy" decoding="async">
	</div>
</div>

${footer}`;
