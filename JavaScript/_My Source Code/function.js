// Warna Random
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Angka Random
function getAngkaRandom(){
	var angka = Math.floor(Math.random()*100);
	return angka;
}