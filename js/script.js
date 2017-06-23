var link = document.querySelector(".writebackBtn");
var modal = document.querySelector(".modal");
var close = document.querySelector(".closeBtn");

link.addEventListener ("click", function() {
    modal.classList.toggle("show")
});
close.addEventListener ("click", function() {
    modal.classList.remove("show")
});

 function initMap() {
            var pos = {lat: 59.938636, lng: 30.323022};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 17,
                center: pos
            });
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: {
                    url: "img/map-marker.png",
               
                }
            });
        }
var btn1 = document.getElementsByClassName("btn1");
var btn2 = document.getElementsByClassName("btn2");
var btn3 = document.getElementsByClassName("btn3");
var slide1 = document.getElementsById("slide1");
var slide2 = document.getElementsById("slide2");
var slide3 = document.getElementsById("slide3");

btn1.addEventListener ("click", function() {
    slide1.classList.toggle("showSlide1")
});
btn2.addEventListener ("click", function() {
    slide2.classList.toggle("showSlide2")
});
btn3.addEventListener ("click", function() {
    slide3.classList.toggle("showSlide3")
});


