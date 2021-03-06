// ----------------------------------------------------------------SECTION-01(home) AREA START
$(function(){
    $('.ham-btn').click(function(){
        $('.menu-mobile').toggleClass("menu-view");
        $(this).find(".bar").toggleClass("bar-X");
    });
});
// ----------------------------------------------------------------SECTION-01(home) AREA END 
// ----------------------------------------------------------------SECTION-02(STORY) AREA START
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()<520){
            function numberCounter(target_frame, target_number) {
                this.count = 0; this.diff = 0;
                this.target_count = parseInt(target_number);
                this.target_frame = document.getElementById(target_frame);
                this.timer = null;
                this.counter();
                };
                numberCounter.prototype.counter = function() {
                var self = this;
                this.diff = this.target_count - this.count;
            
                if(this.diff > 0) {
                    self.count += Math.ceil(this.diff / 10);
                }
                this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            
                if(this.count < this.target_count) {
                    this.timer = setTimeout(function() { self.counter(); }, 20);
                } else {
                    clearTimeout(this.timer);
                }
                };
                new numberCounter("counter1", 2896887);
                new numberCounter("counter2", 8400000);
                new numberCounter("counter3", 700);
        }
    });
});
    
// ----------------------------------------------------------------SECTION-02(STORY) AREA END 

// ----------------------------------------------------------------SECTION-03(DULLE) AREA START
function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
        }
    document.getElementById("defaultOpen").click(dullecourse01);
// ----------------------------------------------------------------SECTION-03(DULLE) AREA END

// ----------------------------------------------------------------SECTION-04(AROUND) AREA START
    $(function(){
        $(".around-image-01").on('mouseover click', function (){
            $(".around-background").css({"background-image":"url(images/around-image-01.png","transition":"all 1.5s"});
        });
        $(".around-image-02").on('mouseover click', function (){
            $(".around-background").css({"background-image":"url(images/around-image-02.png","transition":"all 1.5s"});
        });
        $(".around-image-03").on('mouseover click', function (){
            $(".around-background").css({"background-image":"url(images/around-image-03.png","transition":"all 1.5s"});
        });
    });
        
// ----------------------------------------------------------------SECTION-04(AROUND) AREA END
// ----------------------------------------------------------------SECTION-05(GALLERY) AREA START
$(function(){
    $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  }); 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });
  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
// ----------------------------------------------------------------SECTION-05(GALLERY) AREA END

// ----------------------------------------------------------------SECTION-06(WAY) AREA START
    var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.5509338054194, 126.99088301863718),
        level: 5
    };        
    var map = new kakao.maps.Map(mapContainer, mapOption);        
    var imageSrc = 'images/way-pin.png',
    imageSize = new kakao.maps.Size(50, 50),
    imageOption = {offset: new kakao.maps.Point(27, 69)};
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.5509338054194, 126.99088301863718); 
    var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
    });
    marker.setMap(map);
    var content = '<div class="customoverlay">' +
    '  <a href="http://kko.to/2Wa2TfdDo" target="_blank">' +
    '    <span class="title">남산</span>' +
    '  </a>' +
    '</div>';
    var position = new kakao.maps.LatLng(37.5509338054194, 126.99088301863718);
    var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1 
    });
// ----------------------------------------------------------------SECTION-06(WAY) AREA END 