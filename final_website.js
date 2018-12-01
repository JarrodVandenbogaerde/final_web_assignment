function home(){
  location.href = "final_website_homepage.html";
}

function news(){
  location.href = "final_website_news.html";
}

function howToPlay(){
  location.href = "final_website_howToPlay.html";
}

var slideIndex = 1; //source:https://www.w3schools.com/howto/howto_js_slideshow.asp
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

//Calculate KDA

function kdaSubmit(){
  var kills = document.getElementById("kills").value;
  var getKills = Number(kills);

  var assists = document.getElementById("assists").value;
  var getAssists = Number(assists);

  var deaths = document.getElementById("deaths").value;
  var getDeaths = Number(deaths);

  var kda = getKills + (getAssists/3) / getDeaths;
  document.getElementById("output").innerHTML="Your KDA is:" + " " + kda + "."
}

//Clock https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
