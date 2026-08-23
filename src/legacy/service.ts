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
				<p class="ps-lead">A privacy-focused communications environment where messages are encrypted on the device before transmission and designed to be read by verified intended recipients. Message content is not retained on our messaging infrastructure, subject to our terms and applicable law.</p>
				<a class="ps-cta" href="/packages">View packages</a>
				<a class="ps-cta ghost" href="/buy">Order a device</a>
			</div>
		</div>

		<div class="ps-grid">
			<div class="ps-card">
				<h3>Device level encryption</h3>
				<p>Messages are encrypted on the handset before transmission so the network relays encrypted data rather than readable message content.</p>
			</div>
			<div class="ps-card">
				<h3>No stored content</h3>
				<p>Our messaging infrastructure is designed not to retain message content. Limited account or order information may be handled as described in our terms and as required by law.</p>
			</div>
			<div class="ps-card">
				<h3>Closed network</h3>
				<p>Communication is limited to an invitation-based network of verified devices and approved contacts.</p>
			</div>
			<div class="ps-card">
				<h3>Lost-device protection</h3>
				<p>An authorized account holder may request a remote device reset for a lost or stolen handset, subject to identity verification and applicable law.</p>
			</div>
			<div class="ps-card">
				<h3>Hardened handsets</h3>
				<p>Selected hardware features and app installation are restricted to reduce unnecessary security exposure.</p>
			</div>
			<div class="ps-card">
				<h3>24/7 support</h3>
				<p>A dedicated support team is reachable around the clock for authorized provisioning, lost-device requests, and account changes.</p>
			</div>
		</div>
	</div>
</div>

<div class="ps-section alt">
	<div class="ps-wrap">
		<h2 class="ps-h2">How a message travels</h2>
		<p class="ps-lead">The service encrypts on the sending device, relays encrypted data, and decrypts on the verified recipient's handset.</p>
		<img class="ps-media" src="/ps/service_1.png" alt="Diagram of the encrypted message flow between two devices" loading="lazy" decoding="async">
	</div>
</div>

${footer}`;
