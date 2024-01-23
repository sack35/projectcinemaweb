/* Slider Script */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* ==================================================================================================================== */

/* Booking Script */

function cektanggal() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var output = month + "/" + day + "/" + year;
    var tanggal = document.getElementById("tanggal").ariaValueMax;
  
    if (Date.parse(tanggal) < Date.parse(output)) {
      alert("Anda tidak bisa memilih tanggal kurang dari tanggal saat ini");
    }
  }
  
  function hitung() {
    var s = document.getElementsByName("seatclass");
    var harga = 0;
    for (i = 0; i < s.length; i++) {
      if (s[i].checked) {
        if (s[i].value == "Premiere") {
          harga = 125000;
        } else if (s[i].value == "Gold") {
          harga = 100000;
        } else if (s[i].value == "Regular") {
          harga = 75000;
        }
      }
    }
  
    document.getElementById("harga").value = harga;
    var jumlah = document.getElementById("jumlah").value;
    var total = harga * jumlah;
    document.getElementById("total").value = total;
  }
  
  function booking() {
    var cek = 0;
    var nama = document.getElementById("nama").value;
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var output = month + "/" + day + "/" + year;
    var tanggal = document.getElementById("tanggal").value;
  
    if (Date.parse(tanggal) < Date.parse(output)) {
      cek = 1;
    }
  
    var movie = document.getElementById("movie").value;
    var timing = document.getElementById("timing").value;
  
    var s = document.getElementsByName("seatclass");
    var harga = 0;
  
    for (i = 0; i < s.length; i++) {
      if (s[i].checked) {
        if (s[i].value == "Premiere") {
          harga = 150000;
        } else if (s[i].value == "Gold") {
          harga = 125000;
        } else if (s [i].value == "Regular") {
          harga = 75000;
        }
        seatclass = s[i].value;
      }
    }
  
    document.getElementById("harga").value = harga;
    var jumlah = document.getElementById("jumlah").value;
    var total = harga * jumlah;
  
    document.getElementById("total").value = total;
  
    var output =
      "Nama : " +
      nama +
      "<br/>" +
      "Tanggal Booking : " +
      tanggal +
      "<br/>" +
      "Movie : " +
      movie +
      "<br/>" +
      "Timing : " +
      timing +
      "<br/>" +
      "Seat Class : " +
      seatclass +
      "<br/>" +
      "Harga : " +
      harga +
      "<br/>" +
      "Jumlah Tiket : " +
      jumlah +
      "<br/>" +
      "Total : " +
      total;
  
    if (cek == 0) {
      document.getElementById("output").innerHTML = output;
    } else {
      alert("Anda tidak bisa memilih tanggal kurang dari tanggal saat ini");
    }
  
    return false;
  }
  