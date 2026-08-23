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





<div data-nomargin=1 class="ps-order-wrap">

	<div class="ps-order-head">
		<div class="titlelb"><span style='color:#cbb559'>Contact Sales</span></div>
		<p class="ps-order-lead">Please complete the form below and your request will be directed to our sales team or local distributor. Order and verification information is handled in accordance with our privacy practices, retention requirements, and applicable law. A sales representative will contact you.</p>
	</div>

<form method=POST class="ps-order-form">
	<div class="ps-order-grid">

		<section class="ps-card">
			<h3 class="ps-card-title">Order Information</h3>
			<label class="ps-label" for="model">Model</label>
			<select class="ps-field" name=model id=model onChange='$("#modelimg").attr("src","img_pd_"+$(this).val()+".png");'>
				<option value=1>PS Classic</option>
			</select>

			<label class="ps-label" for="unit">Quantity</label>
			<div class="ps-inline">
				<select class="ps-field" name=unit id=unit>
					<option value=1>1 unit</option>
					<option value=2>2 units</option>
					<option value=3>3 units</option>
					<option value=4>4 units</option>
					<option value=5>5 units</option>
					<option value=6>6 units</option>
					<option value=7>7 units</option>
					<option value=8>8 units</option>
					<option value=9>9 units</option>
					<option value=10>10 units</option>
				</select>
				<img class="ps-add-btn" src="/ps/add_to_order.png" alt="Add to order" data-add-to-order=1>
			</div>

			<label class="ps-label" for="shipping">Shipping Address</label>
			<input class="ps-field" type=text id=shipping name=shipping>

			<label class="ps-label" for="countryId">Country</label>
			<select class="ps-field countries" id="countryId" name=country></select>

			<label class="ps-label" for="stateId">State</label>
			<select class="ps-field states" id="stateId" name=state></select>

			<label class="ps-label" for="cityId">City</label>
			<input class="ps-field cities" type=text id="cityId" name=city>

			<label class="ps-label" for="postal">ZIP</label>
			<input class="ps-field" type=text id=postal name=postal>
		</section>

		<section class="ps-card ps-card-summary">
			<h3 class="ps-card-title">Your Device</h3>
			<img class="ps-order-art" src="/ps/img_order1.png" alt="Phantom Secure order">
			<img class="ps-order-art" src="/ps/img_pd_1.png" id=modelimg alt="Selected model">
			<table class="ps-summary">
				<tr><th>Order Details</th><th class="ps-qty">Qty</th></tr>
				<tr><td>PS Classic</td><td class="ps-qty" id=od1>0</td></tr>
			</table>
			<ul class="ps-trust">
				<li><span class="ps-tick">&#10003;</span> Verified ID required</li>
				<li><span class="ps-tick">&#10003;</span> Encrypted end to end</li>
				<li><span class="ps-tick">&#10003;</span> No message content retained</li>
				<li><span class="ps-tick">&#10003;</span> No subscription required</li>
			</ul>
		</section>

		<section class="ps-card">
			<h3 class="ps-card-title">Contact Information</h3>
			<label class="ps-label" for="firstname">First Name</label>
			<input class="ps-field" type=text id=firstname name=firstname>

			<label class="ps-label" for="lastname">Last Name</label>
			<input class="ps-field" type=text id=lastname name=lastname>

			<label class="ps-label" for="email">Email</label>
			<input class="ps-field" type=email id=email name=email>

			<label class="ps-label" for="telephone">Phone</label>
			<input class="ps-field" type=tel id=telephone name=telephone>

			<label class="ps-label" for="notes">Notes</label>
			<textarea class="ps-field ps-textarea" id=notes name=notes></textarea>
		</section>

		<section class="ps-card ps-card-verify">
			<h3 class="ps-card-title">Identity Verification</h3>
			<p class="ps-verify-note">Devices are released only to verified buyers. Verification documents are reviewed by authorized personnel and retained or securely deleted in accordance with applicable legal and business requirements.</p>
			<label class="ps-label" for="idtype">ID Type</label>
			<select class="ps-field" id=idtype name=idtype>
				<option value=passport>Passport</option>
				<option value=license>Driver&#39;s License</option>
				<option value=national>National ID Card</option>
			</select>

			<label class="ps-label" for="idnumber">ID Number</label>
			<input class="ps-field" type=text id=idnumber name=idnumber>

			<label class="ps-label" for="idcountry">Country of Issue</label>
			<input class="ps-field" type=text id=idcountry name=idcountry>

			<label class="ps-label" for="iddoc">Upload ID Document</label>
			<input class="ps-field ps-file" type=file id=iddoc name=iddoc accept="image/*,.pdf">

			<label class="ps-check"><input type=checkbox name=idconsent value=1> I confirm the details above are accurate and consent to identity verification.</label>
			<div class="ps-badge"><span class="ps-tick">&#10003;</span> Verified ID &nbsp;&middot;&nbsp; Encrypted upload &nbsp;&middot;&nbsp; Destroyed after review</div>
		</section>
	</div>

	<div class="ps-order-footer">
		<p class="smalltext1">All devices are locked down for Maximum Security. Device to device encrypted communication where No information exists or is stored. No subscription required. <span style='color:#6dcff6'>All transactions are safe and secure. All information provided will only be used to complete the order, NO record will be stored once order is completed.</span></p>
		<input type=image class="ps-submit" id=ordbtn src="/ps/order.png" alt="Place order">
		<input type=hidden name=quantity1 id=quantity1>
	</div>

	<div class="ps-order-note">
		All information received is considered private and will not be shared with anyone outside our Sales Team reviewing your inquiry.<br>
		If no further consideration is made it will be destroyed.
	</div>
</form>
</div>
</div>
<br><br>
<!--
<form method=post action="buy.php"><input type=hidden name=type value=email>
<div data-nomargin=1 >

	<div class="titlelb" align=center>Contact Sales</div>
<center>
	<div class="textlb" style='width:80%; align:center; text-align: center;'>
	If you are looking to make a direct purchase please use the above online service.<Br>
If you want to be directed to a local distributor please use the form below for Sales Representative.
<p>
	</div>
	
	<table class=inputform width=65% align=center border=0>
	
	<tr>
		<td>First Name</td><td><input type=text length=80 name=firstname style='width:100%; font-size: 1.5vw'></td>
		<td>Last Name</td><td><input type=text length=80 name=lastname style='width:100%; font-size: 1.5vw'></td>
	</tr>

	<tr>
		<td>Email</td><td><input type=text length=80 name=email style='width:100%; font-size: 1.5vw'></td>
		<td>Phone</td><td><input type=text length=80 name=phone style='width:100%; font-size: 1.5vw'></td>
	</tr>
	
	<tr>
		<td>Message</td><td colspan=3><textarea style='width:100%' rows=3 name=message></textarea></td>
	</tr>
	
	</table>
	<br>
	<div class="textlb" style='width:60%; align:center; text-align: left; font-size: 1.5vw;%'>
	<input type=image src="/ps/send.png" align=right width=20%>
	<span style='color: #6dcff6;'>
	All information received is considered private and will not be shared with anyone outside our Business Development Team reviewing your inquiry. If no further consideration is made it will be destroyed.
	</span>
	<br><br><br><Br>
	</div>	
	
</div>
</form>
-->






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
<!--<img src="/ps/bottom_2.png">-->
</div>
</div>`;
