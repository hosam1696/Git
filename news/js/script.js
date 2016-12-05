/*global console, alert,$*/
$(document).ready(function () {
    
    "use strict";
    
    $(document).scroll(function () {
        var winHeight = $(window).height(),
            topScroll = $(window).scrollTop(),
            siteNews = $("#site-news").offset().top,
            exactScroll = winHeight + topScroll,
            divOff = $(".wrapper .wrapper-content .subject-content");
        
        /* need revising
        
        if ((exactScroll) >= divOff.offset().top) {
            
            divOff.first().slideDown();
        }
        */
        if (topScroll >= siteNews) {
            $("#scroll").fadeIn(600);
        } else {
            $("#scroll").fadeOut(600);
        }
        
        
        // sport section 
        
        
        // footer
        
        if (exactScroll >= $('footer').offset().top) {
            $("footer .container .contact").removeClass("left-footer");
            $("footer .container .site-services").removeClass("right-footer");
        }
        
    });
    
    // auto slider 
    
	function autoSlider(status) {
        if(!status) {status = "play";}
        $(".slider-parent").on("mouseover", function() {status = "pause";});
        if(status == "pause") {
            console.warn("ho");
            return false;
        }
        else {
            var slideTime = 0,
            sliderDuration = 4000;
        
        // find()
        
		$("#news-slider .slider-active").each(function () {
            
			if (!$(this).is(":last-child")) {
        
                // highlight the titles on the right
                
                $("." + $(this).data("title")).addClass("slide-active").siblings().removeClass("slide-active");
                
                // animate overlay
                
                $(this).children(".overlay").removeClass("translate_overlay");
                
                // slide to the next image
                
                $(this).delay(sliderDuration).fadeOut(slideTime, function () {
                    
                    $(this).children(".overlay").addClass("translate_overlay");
                    
                    $(this).removeClass("slider-active").next().fadeIn(slideTime, function () {
                        
                        $(this).addClass("slider-active");
                        
                        autoSlider("play");
                    });
                });
               
            } else {
                
                $("." + $(this).data("title")).addClass("slide-active").siblings().removeClass("slide-active");
                
                $(this).children(".overlay").removeClass("translate_overlay");
                
                $(this).delay(sliderDuration).fadeOut(slideTime, function () {
                    
                    $(this).children(".overlay").addClass("translate_overlay");
                    
                    $(this).removeClass("slider-active");
                    
                    $("#news-slider .slider").first().addClass("slider-active");
                    
                    autoSlider("play");
                });
                
            }
		
        });
        }
        
	};
    // invoke the function(auto slider)
    autoSlider();
    //pause the slider 
    
    $(".slider-parent").mouseover(function() {
        autoSlider("pause");
    });
    $(".slider-parent").mouseleave(function() {
        autoSlider("pause");
        console.log("you moved out the slider");
    });
    var firstPara = parseInt($("#latest-news .news-list .para-holder .first").css("width")),
        secondPara = parseInt($("#latest-news .news-list .para-holder .second").css("width")),
        thirdPara = parseInt($("#latest-news .news-list .para-holder .third").css("width")),
        totalWidth = firstPara + secondPara + thirdPara + 10;
    $("#latest-news .news-list .para-holder").css("width", totalWidth + "px");
    
    // click on sports news
    
    var subHead = $(".wrapper .wrapper-content .subject");
    
    subHead.click(function () {
        $(this).next().slideDown().siblings(".subject-content").slideUp();
    });
    // scroll to homepage
    
    $("#scroll").click(function () {             
        $("body, html").animate({
            scrollTop: 0,
            "margin": "60px 0 0 0"
        }, 800);
        setTimeout(function(){
            $("body, html").animate({
                "margin": "0"
            }, 200);
        });
        
    });
    
    // navigate slider [need modification]
    
    $(".news .title").click(function() {
        var newsInfo = $(this).text();
        $(this).addClass("slide-active").siblings().removeClass("slide-active");
         //alert(newsInfo);
        $("." + $(this).data("class")).addClass("slider-active").siblings().removeClass("slider-active");
       autoSlider("play");
    })
    
    // جزء أخبار الموقع
    
    var img = $("#site-news .wrapper .wrapper-content .con-photo img");
    
    var overText = $("#site-news .wrapper .wrapper-content .con-photo .overlay");
    
    $("#site-activity").click(function(){
        
        img.attr("src", "images/images/s2.jpg");
        
        overText.text("هذا قسم نشاطات الموقع يقوم بعرض جميع مستجدات الموقع ترقبوا المزيد");
    });
    $("#site-party").click(function(){
        
        img.attr("src", "images/images/s3.jpg");
        
         overText.text("هذا قسم حفلات الموقع يقوم بعرض جميع مستجدات الموقع ترقبوا المزيد");
    });
    $("#site-n").click(function () {
        
        img.attr("src", "images/images/s.png");
        
    });
    
    // right | left buttons
    var i = 5;
    $("#r-right").click(function (e) {
        var content = $("#reports .content .report-slide .slide-content");
        var conleft = parseInt(content.css("left"));
        
        content.animate({
            left : (conleft + 180) + "px"
            }, 10);
        
        if (conleft >= 400) {
            content.animate({
                left : "400px"
                }, 10);
        }
        
    });
    $("#r-left").click(function () {
        var content = $("#reports .content .report-slide .slide-content");
            var conleft = parseInt(content.css("left"));
            
            content.animate({
            left : (conleft - 180) +"px"
            }, 10);
        
        if (conleft <= -400) {
            content.animate({
            left : "-460px"
            }, 10);
        }
    });
});

/*
var slides = document.querySelectorAll(".slider");
var i;
function slider(){
    for (i=0;i< slides.length; i++) {
        if(slides[i].classList.contains("slider-active")) {
            console.log(slides[i]);
            setTimeout(function(){
                slides[i].classList.remove("slider-active");
            }, 2000);

            setTimeout(function(){
                slides[i+1].classList.add("slider-active");
            }, 2000);

        };  
    };
};
slider();
*/