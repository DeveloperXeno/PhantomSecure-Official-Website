export const html = `<div class=mmenu style='display: none; position: absolute; width: 100vw; top: 10vw; z-index:100;'>
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
    <a href="javascript:;" style="font-size:6vw;" onClick='$(".mmenu").toggle();'>☰</a>
  </li>
</div>
<div class="left topicon mhidden">
<a href="/"><img src="/ps/top_1.png" border=0 class=topicon></a><a href="/encrypted-messaging"><img src="/ps/top_2.png" border=0 class="topicon mhidden"></a><a href="/encrypted-chat"><img src="/ps/top_3.png" border=0 class="topicon mhidden"></a><a href="/packages"><img src="/ps/top_4.png" border=0 class="topicon"></a>
</div>
<div class="right topicon mhidden">
<a href="/buy"><img src="/ps/top_5.png" border=0 class=topicon></a></div>
</div>




<div class="main tile" data-nomargin=1 style="">
	<img src="/ps/main_bg.png" width=100% class=tileimg >
	<div id=obtn style='width: 100%; position: absolute; bottom: -0%; font-size: 1.5vw; color: white;'>
	<a onClick='$("#divVideo").slideToggle( "slow" );videojs("video").play();'><center>
	<img src="/ps/btn_videoHome.png" style='width: 50%'></center></a></div>

	<div class=center style='width:100%; top:55%'><center>
	<h1 class="titleb2" style="margin:0; font-weight:inherit; text-align-last: justify;text-align:justify; color: white; width:60%;letter-spacing: 0.09vw; text-transform: uppercase;  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.6);
">THE WORLDS MOST TRUSTED<br>
COMMUNICATION SERVICE<span style='color:#6dcff6'>.</span></h1>
	</center>
	</div>
</div>
<div style="display:none; background-color: #000000; position: relative; width: 100%" id=divVideo>
	<div id=player align=center style='padding: 2%'>
		<a href="javascript:;" class="close" onClick='$("#divVideo").slideToggle( "slow" );videojs("video").pause();'></a>
	 	<video id="video" class="video-js vjs-default-skin" controls preload="auto" style='width:80vw; height: 40vw' src="/ps/zip/PSV50.mp4" data-setup="{}"></video>
    </div>
</div>
<div class="tile skrollr-body" id=tile1 data-height-factor="1.1">
	<div class="skrollable" style="width: 25%;  left: 15%; position: absolute;" data-0="transform: translate(0%, 5%);" data-1000="transform: translate(0%, 10%);">
		<img id=main2 src="/ps/main_2.png" style='width: 100%'>
	</div>
	<div class="skrollable" style="position: absolute; top: 50%; width: 55%; right: 4%;" data-0="transform: translate(0%, -50%);" data-1000="transform: translate(0%, -50%);">
	<a href="/privacy-matters">
	<img src="/ps/main_4.png" style='width: 80%'></a>
	</div>
</div>
<div class="tile" data-sb="fadeInUp" data-sb-hide="fadeOutUp">
	<div class=left style='width: 49.5%; '><a href="/encrypted-messaging"><img src="/ps/main_5.png" style='width: 100%;'></a></div>
	<div class=right  style='width: 49.5%; '><a href="/encrypted-chat"><img src="/ps/main_6.png" style='width: 100%;'></a></div>
</div>

<div class="tile" data-sb="fadeInUp" data-sb-hide="fadeOutUp">
	<img src="/ps/main_7.png" class=tileimg>	
	<div style="position: absolute; top: 75%; width: 100%;" align=center>
		<a href="/buy"><img src="/ps/main_8.png" width=8% align=center></a>
	</div>
<div class=center>
	<div class="title" align=center>Secure Your Privacy Today</div>
	<div class="text" align=center>Lawful-use packages for businesses of all sizes are available with onboarding and technical support.</div>
</div>
</div>

<div class="tile" data-sb="fadeInUp" data-sb-hide="fadeOutUp">
	<img src="/ps/main_10.png" class=tileimg>
	<div class=center>
	<div class="titleb" align=center>Why Privacy?</div>
	<div class="textb" align=center>With all the great benefits and advancements that mobile technology has brought to the world,<br>
it has become clear that these technologies are vulnerable to data breaches and unauthorized access.</div>
	<a href="/privacy-articles"><div class=btn>Learn more</div></a>
	</div>
</div>

<div class="tile" data-sb="fadeInUp" data-sb-hide="fadeOutUp">
	<img src="/ps/main_11.png" class=tileimg>
<div class=center style='top: 45%'>
	<div class="title" align=center><span style='color:#6dcff6'>Whether Personal or Business<br>
All communication should be private. 
</span></div>
	<div class="text" align=center>People and businesses share sensitive information every day. <br>
Appropriate security controls help protect confidential information and support responsible data handling.</div>
	<a href="/privacy-matters"><div class=btn>Learn more</div></a>
</div>
</div>


<div class="tile" data-sb="fadeInUp" data-sb-hide="fadeOutUp">
	<img src="/ps/main_12.png" class=tileimg>
<div class=center>
	<div class="title2" align=center><span style='color:#534741;'>Having secure communications in business is vital.<br>
We make it easy and simple while highly secure.
</span></div>
	<a href="/start-today"><div class=btn><span style='color:#ed145b'>Learn more</span></div></a>
</div>
</div>





<div class=footer1>

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
<span style='font-size: 0.9vw; letter-spacing: 2px; opacity: 0.85;'>BUILT BY THE PHANTOMTEAM</span>
<!--<img src="/ps/bottom_2.png">-->
</div>
</div>`;
