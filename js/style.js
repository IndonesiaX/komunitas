// MainNav
$(window).resize(function() {
  var more = document.getElementById("js-navigation-more");
  var windowWidth = $(window).width();
  var moreLeftSideToPageLeftSide = $(more).offset().left;
  var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

  if (moreLeftSideToPageRightSide < 330) {
    $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
    $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
  }

  if (moreLeftSideToPageRightSide > 330) {
    $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
    $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
  }
});

$(document).ready(function() {
  //Menu Mobile
  var menuToggle = $("#js-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");
  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });

  //jQuery Grid Rotator big
  $( '#ri-grid' ).gridrotator( {
            rows : 4,
            columns : 12,
            maxStep : 2,
            interval : 2000,
            w1024 : {
              rows : 4,
              columns : 9
            },
            w768 : {
              rows : 5,
              columns : 7
            },
            w480 : {
              rows : 6,
              columns : 5
            }
          } );

  //jQuery Grid Rotator small
  $( '#header-grid' ).gridrotator( {
            rows : 3,
            columns : 16,
            maxStep : 2,
            interval : 2000,
            w1024 : {
              rows : 4,
              columns : 9
            },
            w768 : {
              rows : 5,
              columns : 7
            },
            w480 : {
              rows : 4,
              columns : 5
            }
          } );

}); 





