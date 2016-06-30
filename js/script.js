$(document).ready(function() {
// Sub-Menu
//-----------------------------------------------------------------------------------
  $('li.popular-link').hover(function() {
    $('.tablets-sub-menu').removeClass('active');
    $('.pc-sub-menu').addClass('active');
  });

  $('li.notebooks-link').hover(function() {
    $('.pc-sub-menu').removeClass('active');
    $('.pc-sub-menu').removeClass('active');
  });

  $('li.tablets-link').hover(function() {
    $('.pc-sub-menu').removeClass('active');
    $('.tablets-sub-menu').addClass('active');
  });

// Search
//----------------------------------------------------------------------------------- 
  $('.search').on('keyup paste', function() {
    $('.find').css( 'background-color', '#599ad4');
  });

// Tabs
//-----------------------------------------------------------------------------------
  $('.sale-control-link').on('click', function(e){
  e.preventDefault();

  var item = $(this).closest('.sale-controls-item'),
      contentItem = $('.products-tabs-item'),
      itemPosition = item.index();

  contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  var sliderTarget = $(this).attr('data-slider');

  $('.'+sliderTarget).slick('setPosition');
  });

  $('.articles-control-link').on('click', function(e){
  e.preventDefault();

  var item = $(this).closest('.articles-controls-item'),
      contentItem = $('.articles-tabs-item'),
      itemPosition = item.index();

  contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');
    
    var sliderTarget = $(this).attr('data-slider');

    $('.'+sliderTarget).slick('setPosition');
  });

  // $('.sale-control-link').on('click', function(e){
  // e.preventDefault();

  // var signs = $(this).closest('.sale-controls-item'),
  //     signsItem = $('.products-tabs-item'),
  //     signsPosition = signs.data('class');

  // signsItem.filter('.tabs-item-' + signsPosition)
  //   .add(signs)
  //   .addClass('active')
  //   .siblings()
  //   .removeClass('active');
  // });

// Slider Settings
//-----------------------------------------------------------------------------------
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,

    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows:false
      }
    }
    ]
  });

  $('.sale, .news, .viewed-products, .popular').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    adaptiveHeight: true,
    arrows: false,

    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:false
      }
    }, {
      breakpoint: 699,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false
      }
    }]
  });

  $('.reviews, .articles').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    arrows: false,
    
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:false
      }
    }, {
      breakpoint: 699,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false
      }
    }]
  });

// Slider Controls
//-----------------------------------------------------------------------------------
  $('.sale-next').on('click', function(e) {
    e.preventDefault();
    $('.sale, .news').slick('slickNext');
  });

  $('.sale-prev').on('click', function(e) {
    e.preventDefault();
    $('.sale, .news').slick('slickPrev');
  });

  $('.viewed-next').on('click', function(e) {
    e.preventDefault();
    $('.viewed-products').slick('slickNext');
  });

  $('.viewed-prev').on('click', function(e) {
    e.preventDefault();
    $('.viewed-products').slick('slickPrev');
  });
  
  $('.popular-next').on('click', function(e) {
    e.preventDefault();
    $('.popular').slick('slickNext');
  });

  $('.popular-prev').on('click', function(e) {
    e.preventDefault();
    $('.popular').slick('slickPrev');
  });


  $('.articles-next').on('click', function(e) {
    e.preventDefault();
    $('.reviews, .articles').slick('slickNext');
  });

  $('.articles-prev').on('click', function(e) {
    e.preventDefault();
    $('.reviews, .articles').slick('slickPrev');
  });

// Menu's show
//-----------------------------------------------------------------------------------
  $('.js-show-menu').on('click', function(e) {
    e.preventDefault();
    var menu = $('.main-menu');

    if ($('.js-show-menu').hasClass('active')) {
      menu.slideUp('fast');
      $(this).removeClass('active');
    } else {
      menu.slideDown('fast');
      $(this).addClass('active');
    }
  });

  $('.js-show-search').on('click', function(e) {
    e.preventDefault();
    var search = $('.header-search');

    if ($('.js-show-search').hasClass('active')) {
      search.slideUp('fast');
      $(this).removeClass('active');
    } else {
      search.slideDown('fast');
      $(this).addClass('active');
    }
  });

  $('.js-header-top').on('click', function(e) {
    e.preventDefault();
    var header = $('.header-top');

    if ($('.js-header-top').hasClass('active')) {
      header.animate({width:'toggle'},350);
      $(this).removeClass('active');
    } else {
      $('.header-top-overlay').addClass("active");
      header.animate({width:'toggle'},350);
      $(this).addClass('active');
    }
  });

// Overlay
//-----------------------------------------------------------------------------------
  $('.header-top-overlay').click(function(e){
    e.preventDefault();
    $('.header-top').css('display', 'none');
    $(this).removeClass('active');
  });

}); //end

