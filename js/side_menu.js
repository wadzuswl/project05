/**
 * 햄버거 메뉴 - 웹접근성 적용
 * - button 요소 사용
 * - aria-expanded, aria-controls, aria-label
 * - 키보드 포커스 및 ESC 키로 닫기
 */
(function () {
  'use strict';

  const SIDEMENU_ID = 'sideMenu';
  const BURGER_BTN_ID = 'burgerMenuBtn';
  const CLOSE_BTN_ID = 'sideMenuCloseBtn';

  function init() {
    const burgerBtn = document.getElementById(BURGER_BTN_ID);
    const closeBtn = document.getElementById(CLOSE_BTN_ID);
    const sideMenu = document.getElementById(SIDEMENU_ID);
    const sideMenuBg = document.querySelector('.side-menu-bg');

    if (!burgerBtn || !sideMenu) return;

    function openMenu() {
      sideMenu.classList.add('active');
      sideMenu.setAttribute('aria-hidden', 'false');
      if (sideMenuBg) sideMenuBg.style.display = 'block';
      if (burgerBtn) {
        burgerBtn.setAttribute('aria-expanded', 'true');
        burgerBtn.setAttribute('aria-label', '메뉴 닫기');
      }
      if (closeBtn) closeBtn.focus();
      document.body.style.overflow = 'hidden';
      trapFocus(sideMenu);
    }

    function closeMenu() {
      sideMenu.classList.remove('active');
      sideMenu.setAttribute('aria-hidden', 'true');
      if (sideMenuBg) sideMenuBg.style.display = 'none';
      if (burgerBtn) {
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.setAttribute('aria-label', '메뉴 열기');
        burgerBtn.focus();
      }
      document.body.style.overflow = '';
      releaseFocusTrap();
    }

    function toggleMenu() {
      const isOpen = sideMenu.classList.contains('active');
      if (isOpen) closeMenu();
      else openMenu();
    }

    // 포커스 트랩 (모달 접근성)
    let focusableElements;
    let firstFocusable;
    let lastFocusable;

    function trapFocus(element) {
      focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable = focusableElements[0];
      lastFocusable = focusableElements[focusableElements.length - 1];
    }

    function releaseFocusTrap() {
      focusableElements = null;
    }

    sideMenu.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !focusableElements) return;
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    });

    // 햄버거 버튼 클릭
    burgerBtn.addEventListener('click', toggleMenu);

    // 닫기 버튼 클릭
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    // 배경 클릭 시 닫기
    if (sideMenuBg) {
      sideMenuBg.addEventListener('click', closeMenu);
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
