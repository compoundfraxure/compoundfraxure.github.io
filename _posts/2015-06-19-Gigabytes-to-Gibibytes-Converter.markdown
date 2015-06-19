---
layout: post
title:  "Gigabytes to Gibibytes Converter"
date:   2015-06-19 15:39:13
---
So, this is a tool that I made a little while ago which can convert from decimal units of data (gigabytes and megabytes) to binary (gibibytes and mebibytes) to assist myself in partitioning my hard drive (since those are the units GParted uses). <a href="https://en.wikipedia.org/wiki/Units_of_information#Systematic_multiples">For Those Super Confused</a>

				<div class="row">
					<div class="col-md-6">
						<h4>Gigabytes</h4>
						<p><div class="input-group">
							<input type="number" class="form-control" min="0" id="gigabytes">
							<span class="input-group-btn"><button class="btn btn-default" type="button" onClick="convert_gigabytes()">Convert</button></span>
						</div></p>
					</div>
					<div class="col-md-6">
						<h4>Gibibytes</h4>
						<p><div class="input-group">
							<input type="number" class="form-control" min="0" id="gibibytes">
							<span class="input-group-btn"><button class="btn btn-default" type="submit" onClick="convert_gibibytes()">Convert</button></span>
						</div></p>
					</div>
				</div>
			<div class="row">
				<p><div class="col-md-6">
					<h4>Megabytes</h4>
					<div class="input-group">
						<input type="number" class="form-control" min="0" id="megabytes">
						<span class="input-group-btn"><button class="btn btn-default" type="submit" onClick="convert_megabytes()">Convert</button></span>
					</div></p>
				</div>
				<p><div class="col-md-6">
					<h4>Mebibytes</h4>
					<div class="input-group">
						<input type="number" class="form-control" min="0" id="mebibytes">
						<span class="input-group-btn"><button class="btn btn-default" type="submit" onClick="convert_mebibytes()">Convert</button></span>
					</div></p>
				</div>
			</div>
<script type="text/javascript">
function convert_gigabytes() {
	var giga = document.getElementById('gigabytes').value;
	var gibi = giga * 0.931323;
	var mega = giga * 1000;
	var mebi = giga * 953.674;
	document.getElementById('gibibytes').value = gibi;
	document.getElementById('megabytes').value = mega;
	document.getElementById('mebibytes').value = mebi;
}

function convert_gibibytes() {
	var gibi = document.getElementById('gibibytes').value;
	var giga = gibi * 1.07374;
	var mega = gibi * 1073.74;
	var mebi = gibi * 1024;
	document.getElementById('gigabytes').value = giga;
	document.getElementById('megabytes').value = mega;
	document.getElementById('mebibytes').value = mebi;
}

function convert_megabytes() {
	var mega = document.getElementById('megabytes').value;
	var giga = mega * 0.001;
	var gibi = mega * 0.000931323;
	var mebi = mega * 0.953674;
	document.getElementById('gigabytes').value = giga;
	document.getElementById('gibibytes').value = gibi;
	document.getElementById('mebibytes').value = mebi;
}

function convert_mebibytes() {
	var mebi = document.getElementById('mebibytes').value;
	var giga = mebi * 0.00104858;
	var gibi = mebi * 0.000976563;
	var mega = mebi * 1.04858;
	document.getElementById('gigabytes').value = giga;
	document.getElementById('gibibytes').value = gibi;
	document.getElementById('megabytes').value = mega;
}
</script>
