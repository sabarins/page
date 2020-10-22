var i = 0;
var txt = "Reception : On 03 Nov 2020 at 7pm - 8:30pm  Marriage : On 04 Nov 2020 at 5:00am - 6:45am Venue : VDP Chatram,North forth street,VIRUDHACHALAM." ;
var speed = 70;
function typeWriter() {
    
    if (i < txt.length) {
        document.getElementById("type").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


    var a = 0;
var t ="We Welcome all of us to join this lovable couples marriage and congrat both to live more happy in their life.And Enjoy Your Special day!.And i wishing a Very HAPPY ANNIVERSARY!!. Thank you..";
var speed = 80;
function typewriter() {
    if (a < t.length) {
        document.getElementById("demo1").innerHTML += t.charAt(a);
        a++;
        setTimeout(typewriter, speed);
    }
}