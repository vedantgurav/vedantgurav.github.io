// #0B8A6F, #054F3F

var tlintro = new TimelineMax();
// tlintro.staggerFrom("#nameCont path", 0.5 ,{opacity: 0, scale: 0.9}, 0.05, "+0.6");
// tlintro.staggerTo("#nameCont path", 1 ,{strokeDashoffset: "0px"}, 0.05, "+0.6");
tlintro.from("#hintCont", 1, {scale: 0.7});

const name = document.querySelectorAll("#nameCont path");
for(let i=0; i<name.length; i++) {
  console.log(name[i].getTotalLength());
}

var ctrl = new ScrollMagic.Controller();

// Create scenes in jQuery each() loop
// $("section").each(function(i) {
//   var inner = $(this).find(".inner");
//   var outer = $(this).find(".outer");
//   var tl = new TimelineMax();

//   tl.from(outer, 0.25, { scaleX: 0 });
//   tl.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });

//   new ScrollMagic.Scene({
//     triggerElement: this,
//     triggerHook: 0.5
//   })
//   .setTween(tl)
//   .addIndicators({
//     colorTrigger: "white",
//     colorStart: "white",
//     colorEnd: "white",
//     indent: 40
//   })
//   .addTo(ctrl);
// });

var controller = new ScrollMagic.Controller();
var tl2 = new TimelineMax();
tl2
.to("#hintCont",8,{opacity: 0, y: "-5vh"},"+=0")
.staggerTo("#nameCont path", 8 ,{strokeDashoffset: "0px"}, 1, "-=2")
// .staggerTo("#nameCont path", 8 ,{stroke: "red"}, 1, "-=78")
// .staggerTo("#nameCont path", 8 ,{stroke: "blue"}, 1, "-=156")
.to("#nameCont",8,{ opacity: 0, y:"-10vh"},"+=0")
.staggerFrom(  "#descCont p",  8,  {opacity: 0, y:"5vh"}, 4 ,"+=0")
.staggerTo(  "#descCont p",  8,  {opacity: 0, y:"-5vh"}, 4,"+=8")
// .from(  ".naver",  1,  {opacity: 0, top: "10%", left: "5vh", width: "16%" , height: "80%"},  "-=0.5")
// .staggerFrom(  ".naver p",  1,  { scale:1.2, opacity:0},  0.2,  "-=1")
.from(  "#project1 .ptitle",  8,  {opacity: 0, y: "5vh"}, "-=0")
.staggerFrom(  "#project1 .pbody p", 8,  {opacity: 0, y: "5vh"}, 4, "-=4")
.fromTo(  "#pinContainer",  8,  {background: "linear-gradient(to right bottom,#000000,#000001)"},  {background: "linear-gradient(to right bottom, #002035, #001015)"},  "-=20")
// .fromTo(  ".naver",  1,  {background: "linear-gradient(to right bottom,#333,#222)"},  {background: "linear-gradient(to right bottom, #004060, #002035)"},  "-=4")
// .to(  "#pt1",  1,  {scale: 1.2, textShadow: "1px 1px 20px #FFFFFF66"},  "-=1")
.to(  "#project1 .pinit",  8,  {opacity: 0, scale: 0.7},  "+=8")
.staggerFrom(  "#project1 .imginit div",  8,  { scale: 0.9, opacity:0},  2,  "-=4")
.to(  "#project1 .imginit",  8,  {opacity: 0, scale: 0.7}, "+=8")

.from(  "#project2 .ptitle",  8,  {opacity: 0, y: "5vh"},  "+=4")
.staggerFrom(  "#project2 .pbody p",  8,  {opacity: 0, y: "5vh"}, 4, "-=4")
.to(  "#pinContainer",  8,  {background: "linear-gradient(to right bottom, #000, #210101)"},  "-=20")
// .to(  ".naver",  1,  {background: "linear-gradient(to right bottom, #00CD7A, #006066)"},  "-=2")
// .to(  ".naver",  1,  {scale: 0.97},  "-=2")
// .to(  ".naver",  1,  {scale: 1},  "-=1")
// .to(  "#pt1",  1,  {scale: 1, textShadow: ""},  "-=2")
// .to(  "#pt2",  1,  {scale: 1.2, textShadow: "1px 1px 20px #FFFFFF66"},  "-=1")
.to(  "#project2 .pinit",  8,  {opacity: 0, scale: 0.7},  "+=8")
.staggerFrom(  "#project2 .imginit div",  8,  { scale:0.9, opacity:0},  2,  "-=4")
.to(  "#project2 .imginit",  8,  {opacity: 0, scale: 0.7},  "+=8")


.from(  "#project3 .ptitle",  8,  {opacity: 0, y: "5vh"},  "+=4")
.staggerFrom(  "#project3 .pbody p",  8,  {opacity: 0, y: "5vh"}, 4, "-=4")
.to(  "#pinContainer",  8,  {background: "linear-gradient(to right bottom, #393939, #171717)"},  "-=20")
.to(  "#project3 .pinit",  8,  {opacity: 0, scale: 0.7},  "+=8")
.staggerFrom(  "#project3 .imginit div",  8,  { scale:0.9, opacity:0},  2,  "-=4")
.to(  "#project3 .imginit",  8,  {opacity: 0, scale: 0.7},  "+=8");

new ScrollMagic.Scene({
  triggerElement: "#pinMaster",
  triggerHook: "onLeave",
  duration: "600%"
})
.setPin("#pinMaster")
.setTween(tl2)
// .addIndicators({
//   colorTrigger: "white",
//   colorStart: "white",
//   colorEnd: "white",
//   indent: 40
// })
.addTo(controller);






function allCenter($x)  {
    $x.find(".vcent").each( function () {
      var ph  = parseFloat($(this).parent().height());
      var h  = parseFloat($(this).height());
      var y = (ph-h)/2/h*100;
      $(this).css('transform','translateY('+parseInt(y)+'%)');
    });
    $x.find(".hcent").each( function () {
      var pw  = parseFloat($(this).parent().width());
      var w  = parseFloat($(this).width());
      var x = (pw-w)/2/w*100;
      var ts = parseInt(x)+'%';
      var mat = $(this).css("transform").match(/(-?[0-9\.]+)/g);
      if(mat)
        var ty = parseInt(mat[5])+'px';
      else var ty = '0';
      $(this).css("transform","translate("+ts+','+ty+")");
    });
    $x.find(".imginit").each( function() {
      var thish = parseInt($(this).height());
      var windh = parseInt($("#pinContainer").height())*0.95;
      if( thish > windh) {
        if( thish/windh > 1.3 || true)
          $(this).css("flex-direction", "row");
        else;
          // $(this).css("transform","scale("+windh+")");
      }
    });
  }



  $(document).ready(function(){
    allCenter($(document));

    $(window).resize(function() {
      allCenter($(document));
      document.body.height = window.innerHeight;
    });
  });
