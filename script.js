// #0B8A6F, #054F3F

var tlintro = new TimelineMax();
tlintro
.fromTo(".mainpage p#name",
  1.2,
  {opacity: 0, y: "100%"},
  {opacity: 1, y: "0%"},
).fromTo(".mainpage p#subhead",
1.1,
{opacity: 0, y: "100%"},
{opacity: 1, y: "0%"},
"-=0.9"
);

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
tl2.
to("#nameCont",16,{ opacity: 0, y:"-5vh"},"+=0")
.from(  "#descCont",  16,  {opacity: 0, y:"5vh"},  "+=0")
.to(  "#descCont",  16,  {opacity: 0, y:"-5vh"}, "+=16")
// .from(  ".naver",  1,  {opacity: 0, top: "10%", left: "5vh", width: "16%" , height: "80%"},  "-=0.5")
// .staggerFrom(  ".naver p",  1,  { scale:1.2, opacity:0},  0.2,  "-=1")
.from(  "#project1 .ptitle",  16,  {opacity: 0, y: "5vh"}, "-=0")
.staggerFrom(  "#project1 .pbody p", 16,  {opacity: 0, y: "5vh"}, 8, "-=8")
.fromTo(  "#pinContainer",  16,  {background: "linear-gradient(to right bottom,#000000,#000001)"},  {background: "linear-gradient(to right bottom, #002035, #001015)"},  "-=24")
// .fromTo(  ".naver",  1,  {background: "linear-gradient(to right bottom,#333,#222)"},  {background: "linear-gradient(to right bottom, #004060, #002035)"},  "-=4")
// .to(  "#pt1",  1,  {scale: 1.2, textShadow: "1px 1px 20px #FFFFFF66"},  "-=1")
.to(  "#project1 .pinit",  16,  {opacity: 0, scale: 0.7},  "+=16")
.staggerFrom(  "#project1 .imginit div",  16,  { scale: 0.9, opacity:0},  4,  "-=8")
.to(  "#project1 .imginit",  16,  {opacity: 0, scale: 0.7}, "+=16")

.from(  "#project2 .ptitle",  16,  {opacity: 0, y: "5vh"},  "+=8")
.staggerFrom(  "#project2 .pbody p",  16,  {opacity: 0, y: "5vh"}, 8, "-=8")
.to(  "#pinContainer",  16,  {background: "linear-gradient(to right bottom, #000, #210101)"},  "-=24")
// .to(  ".naver",  1,  {background: "linear-gradient(to right bottom, #00CD7A, #006066)"},  "-=2")
// .to(  ".naver",  1,  {scale: 0.97},  "-=2")
// .to(  ".naver",  1,  {scale: 1},  "-=1")
// .to(  "#pt1",  1,  {scale: 1, textShadow: ""},  "-=2")
// .to(  "#pt2",  1,  {scale: 1.2, textShadow: "1px 1px 20px #FFFFFF66"},  "-=1")
.to(  "#project2 .pinit",  16,  {opacity: 0, scale: 0.7},  "+=16")
.staggerFrom(  "#project2 .imginit div",  16,  { scale:0.9, opacity:0},  4,  "-=8")
.to(  "#project2 .imginit",  16,  {opacity: 0, scale: 0.7},  "+=16")


.from(  "#project3 .ptitle",  16,  {opacity: 0, y: "5vh"},  "+=8")
.staggerFrom(  "#project3 .pbody p",  16,  {opacity: 0, y: "5vh"}, 8, "-=8")
.to(  "#pinContainer",  16,  {background: "linear-gradient(to right bottom, #393939, #171717)"},  "-=24")
.to(  "#project3 .pinit",  16,  {opacity: 0, scale: 0.7},  "+=16")
.staggerFrom(  "#project3 .imginit div",  16,  { scale:0.9, opacity:0},  4,  "-=8")
.to(  "#project3 .imginit",  16,  {opacity: 0, scale: 0.7},  "+=16");

new ScrollMagic.Scene({
  triggerElement: "#pinMaster",
  triggerHook: "onLeave",
  duration: "100%"
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
      if( parseInt($(this).height()) > parseInt($("#pinContainer").height())*0.95)
        $(this).css("flex-direction", "row");
    });
  }



  $(document).ready(function(){
    allCenter($(document));

    $(window).resize(function() {
      allCenter($(document));
    });
  });
