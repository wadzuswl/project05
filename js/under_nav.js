// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5; // 동작의 구현이 시작되는 위치
var navbarHeight = $(".under-nav").outerHeight(); // 영향을 받을 요소를 선택

$(window).ready(function () {
  // 페이지 로드 시에는 네비 표시 (nav-up 제거) - 스크롤 다운 시에만 숨김
});

// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function (event) {
  didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

// 동작을 구현
function hasScrolled() {
  // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
  var st = $(this).scrollTop();

  // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  }

  // nav의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down - 아래로 스크롤 시 네비 숨김
    $(".under-nav").addClass("nav-up");
  } else {
    // Scroll Up - 위로 스크롤 시 네비 표시
    if (st + $(window).height() < $(document).height()) {
      $(".under-nav").removeClass("nav-up");
    }
  }

  // lastScrollTop 에 현재 스크롤위치를 지정한다.
  lastScrollTop = st;
}

// code reference: https://codepen.io/qwer273/pen/bGNOJBY
