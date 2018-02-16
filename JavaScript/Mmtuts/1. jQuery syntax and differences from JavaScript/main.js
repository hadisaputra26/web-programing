// Menggnakan javascript
// var klik = document.getElementById('test');
// klik.onclick = function(){
// 	alert("Hello World");
// }

// Menggunakan Jquery
// $("#test").click(function(){
// 	alert("Hello World");
// });

// Menggunakan javascript biasa
// var kotak = document.getElementById("kotak");
// kotak.onclick = function(){
// 	kotak.style.backgroundColor = 'red';
// }

// Menggunakan jquery
// $("#kotak").click(function(){
// 	kotak.style.backgroundColor = 'red';
// });

$(document).ready(function(){

	$("div.kotak1").click(function(){
		this.style.backgroundColor = 'red';
	});

	$("div.kotak2").click(function(){
		this.style.backgroundColor = 'blue';
	});

	$("div.kotak3").click(function(){
		alert("Kotaknya akan menghilang");
		$(this).hide();
	});

});


