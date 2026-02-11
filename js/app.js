/**
 * 사이트 콘텐츠 동적 렌더링
 * data.js의 siteData 객체를 기반으로 DOM 생성
 * 웹접근성: 시맨틱 마크업, ARIA 속성, alt 텍스트 적용
 */
(function () {
  'use strict';

  if (typeof siteData === 'undefined') return;

  const d = siteData;

  /**
   * DOM 요소 생성 헬퍼
   */
  function createElement(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => {
      if (key === 'className') el.className = value;
      else if (key === 'innerHTML') el.innerHTML = value;
      else if (key === 'textContent') el.textContent = value;
      else if (key.startsWith('on')) el.addEventListener(key.slice(2).toLowerCase(), value);
      else if (key === 'ariaLabel') el.setAttribute('aria-label', value);
      else if (value != null && value !== false) el.setAttribute(key, value);
    });
    children.forEach(child => {
      if (typeof child === 'string') el.appendChild(document.createTextNode(child));
      else if (child) el.appendChild(child);
    });
    return el;
  }

  /**
   * 상단 이벤트 배너 렌더링
   */
  function renderTopEvent(container) {
    const el = document.querySelector(container);
    if (!el) return;
    const { text, highlight, highlightSuffix, href } = d.topEvent;
    const span = document.createElement('span');
    span.style.color = 'var(--point-color)';
    span.textContent = highlight;
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(text + ' '));
    p.appendChild(span);
    p.appendChild(document.createTextNode(highlightSuffix));
    const icon = document.createElement('i');
    icon.className = 'xi-angle-right-min';
    icon.setAttribute('aria-hidden', 'true');
    p.appendChild(icon);
    const a = createElement('a', { href: href || 'pages/signup.html' });
    a.appendChild(p);
    el.querySelector('.topEvent').innerHTML = '';
    el.querySelector('.topEvent').appendChild(a);
  }

  /**
   * 네비게이션 메뉴 렌더링
   */
  function renderNav(container) {
    const el = document.querySelector(container);
    if (!el) return;
    const ul = el.querySelector('.menuHeader02-list');
    ul.innerHTML = '';
    d.navItems.forEach(item => {
      const li = createElement('li');
      const a = createElement('a', { href: item.href, textContent: item.text });
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /**
   * 메인 비주얼 슬라이드 렌더링
   */
  function renderMainVisual(container) {
    const el = document.querySelector(container);
    if (!el) return;
    const ul = el.querySelector('.mainVisual-slider');
    ul.innerHTML = '';
    d.mainVisual.forEach(slide => {
      const li = createElement('li', { className: 'swiper-slide' });
      const a = createElement('a', { href: slide.href });
      const img = createElement('img', { src: slide.img, alt: slide.alt });
      a.appendChild(img);
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /**
   * 퀵 카테고리 렌더링
   */
  function renderQuickCategories(container) {
    const el = document.querySelector(container);
    if (!el) return;
    const ul = el.querySelector('.cateList-list');
    ul.innerHTML = '';
    d.quickCategories.forEach(item => {
      const li = createElement('li');
      const a = createElement('a', { href: item.href });
      const span = createElement('span');
      const img = createElement('img', { src: item.img, alt: item.alt });
      span.appendChild(img);
      const p = createElement('p', { innerHTML: item.text });
      a.appendChild(span);
      a.appendChild(p);
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /**
   * 강력추천 상품 렌더링
   */
  function renderRecommendation(container) {
    const el = document.querySelector(container);
    if (!el) return;
    const { title, viewAll, subTitle, products } = d.recommendation;
    el.querySelector('.title p').textContent = title;
    const viewAllLink = el.querySelector('.title a');
    viewAllLink.href = d.recommendation.viewAllHref || 'pages/on-sale.html';
    viewAllLink.innerHTML = viewAll + '<i class="xi-angle-right-min" aria-hidden="true"></i>';
    el.querySelector('.subTitle p').textContent = subTitle;
    const ul = el.querySelector('.rec-best');
    ul.innerHTML = '';
    products.forEach((product, i) => {
      const detailHref = 'pages/product-detail.html?id=rec-' + i;
      const li = createElement('li', { className: 'swiper-slide' });
      const box = createElement('div', { className: 'box' });
      const thumb = createElement('div', { className: 'tumbnail' });
      const a1 = createElement('a', { href: detailHref });
      const img = createElement('img', { src: product.img, alt: product.alt });
      a1.appendChild(img);
      thumb.appendChild(a1);
      const desc = createElement('div', { className: 'description' });
      const nameDiv = createElement('div', { className: 'name' });
      const a2 = createElement('a', { href: detailHref, textContent: product.name });
      const price = createElement('p', { textContent: product.price + '원' });
      nameDiv.appendChild(a2);
      nameDiv.appendChild(price);
      desc.appendChild(nameDiv);
      box.appendChild(thumb);
      box.appendChild(desc);
      li.appendChild(box);
      ul.appendChild(li);
    });
  }

  /**
   * 오늘 이 메뉴 어때요? 렌더링
   */
  function renderTodayMenu(container) {
    const el = document.querySelector(container);
    if (!el) return;
    const ul = el.querySelector('.prod-ul');
    ul.innerHTML = '';
    d.todayMenu.forEach((menu, menuIdx) => {
      const mainDetailHref = menu.products && menu.products[0] ? 'pages/product-detail.html?id=today-' + menuIdx + '-0' : '#none';
      const li = createElement('li', { className: 'swiper-slide' });
      const mainProd = createElement('div', { className: 'main-prod' });
      const a1 = createElement('a', { href: mainDetailHref });
      const img = createElement('img', { src: menu.img, alt: menu.alt });
      a1.appendChild(img);
      const a2 = createElement('a', { href: mainDetailHref });
      const h4 = createElement('h4', { textContent: menu.subTitle });
      const h2 = createElement('h2', { textContent: menu.title });
      const p = createElement('p', { textContent: menu.description });
      a2.appendChild(h4);
      a2.appendChild(h2);
      a2.appendChild(p);
      mainProd.appendChild(a1);
      mainProd.appendChild(a2);

      const prodListWrap = createElement('div', { className: 'prod-list-wrap' });
      const prodList = createElement('ul', { className: 'prod-list' });
      menu.products.forEach((prod, prodIdx) => {
        const prodDetailHref = 'pages/product-detail.html?id=today-' + menuIdx + '-' + prodIdx;
        const prodLi = createElement('li');
        const prodA = createElement('a', { href: prodDetailHref });
        const line = createElement('div', { className: 'prod-list-line' });
        const thumImg = createElement('div', { className: 'thum-img' });
        const label = createElement('label', { className: 'check' });
        const checkbox = createElement('input', { type: 'checkbox', checked: 'checked' });
        const prodImg = createElement('img', { src: prod.img, alt: prod.alt });
        label.appendChild(checkbox);
        label.appendChild(prodImg);
        thumImg.appendChild(label);
        const prodInfo = createElement('div', { className: 'prod-info' });
        const prodName = createElement('p', { textContent: prod.name });
        const prodPrice = createElement('div', { className: 'prod-price' });
        const priceP = createElement('p');
        const span = createElement('span', { style: 'font-weight: 700', textContent: prod.price });
        priceP.appendChild(span);
        priceP.appendChild(document.createTextNode('원'));
        prodPrice.appendChild(priceP);
        prodInfo.appendChild(prodName);
        prodInfo.appendChild(prodPrice);
        line.appendChild(thumImg);
        line.appendChild(prodInfo);
        prodA.appendChild(line);
        prodLi.appendChild(prodA);
        prodList.appendChild(prodLi);
      });
      prodListWrap.appendChild(prodList);

      const btn = createElement('button');
      const btnA = createElement('a', { href: '#none' });
      const icon = createElement('i', { className: 'xi-cart-o', 'aria-hidden': 'true' });
      btnA.appendChild(icon);
      btnA.appendChild(document.createTextNode(' 재료 한번에 담기'));
      btn.appendChild(btnA);

      li.appendChild(mainProd);
      li.appendChild(prodListWrap);
      li.appendChild(btn);
      ul.appendChild(li);
    });
  }

  /**
   * 세일 상품 렌더링
   */
  function renderOnSale(container) {
    const el = document.querySelector(container);
    if (!el) return;
    const ul = el.querySelector('.fifth-swiper .swiper-wrapper');
    ul.innerHTML = '';
    d.onSale.forEach((product, i) => {
      const detailHref = 'pages/product-detail.html?id=onsale-' + i;
      const li = createElement('li', { className: 'swiper-slide' });
      const a = createElement('a', { href: detailHref });
      const img = createElement('img', { src: product.img, alt: product.alt });
      const txt = createElement('div', { className: 'on-sale-txt' });
      const h5 = createElement('h5', { textContent: product.name });
      const p = createElement('p');
      const span = createElement('span', { style: 'font-weight: 700', textContent: product.price });
      p.appendChild(span);
      p.appendChild(document.createTextNode('원'));
      txt.appendChild(h5);
      txt.appendChild(p);
      a.appendChild(img);
      a.appendChild(txt);
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /**
   * 사이드 메뉴 렌더링
   */
  function renderSideMenu(container) {
    const el = document.querySelector(container);
    if (!el) return;
    const sm = d.sideMenu;
    const loginLink = el.querySelector('.side-menu-heading-title a:first-child');
    loginLink.textContent = sm.login;
    loginLink.href = sm.loginHref || 'pages/login.html';
    const orderLink = el.querySelector('.side-menu-heading-sub h3 a');
    orderLink.innerHTML = sm.orderInquiry;
    orderLink.href = sm.orderInquiryHref || 'pages/order-inquiry.html';
    const signupLink = el.querySelector('.side-menu-heading-sub h3:last-child a');
    signupLink.innerHTML = sm.signupBenefit + ' <i class="xi-angle-right-min" aria-hidden="true"></i>';
    signupLink.href = sm.signupHref || 'pages/signup.html';
    el.querySelector('.side-menu-cate h3').innerHTML = '<i class="xi-apps" aria-hidden="true"></i>' + sm.categoryTitle;
    const sideCategory = el.querySelector('.side-category');
    sideCategory.innerHTML = '';
    const catHref = sm.categoryHref || 'pages/category.html';
    sm.categories.forEach(cat => {
      const div = createElement('div');
      const a1 = createElement('a', { href: catHref, textContent: cat });
      const a2 = createElement('a', { href: catHref });
      const icon = createElement('i', { className: 'xi-angle-right-min', 'aria-hidden': 'true' });
      a2.appendChild(icon);
      div.appendChild(a1);
      div.appendChild(a2);
      sideCategory.appendChild(div);
    });
    el.querySelector('.side-menu-service h3').innerHTML = '<i class="xi-spa" aria-hidden="true"></i>' + sm.serviceTitle;
    const serviceDiv = el.querySelector('.side-menu-service');
    const serviceItems = serviceDiv.querySelectorAll('div:not(:first-child)');
    serviceItems.forEach((item, i) => {
      if (sm.services[i]) {
        const href = sm.services[i].href || 'pages/customer-center.html';
        item.innerHTML = '<a href="' + href + '">' + sm.services[i].text + '</a><a href="' + href + '"><i class="xi-angle-right-min" aria-hidden="true"></i></a>';
      }
    });
    const chatbotLink = el.querySelector('.chatbot a');
    chatbotLink.innerHTML = '<i class="xi-message-o xi-2x" aria-hidden="true"></i> ' + sm.chatbot;
    chatbotLink.href = sm.chatbotHref || 'pages/customer-center.html';
    const centerLink = el.querySelector('.customer-center a');
    centerLink.innerHTML = '<i class="xi-call xi-2x" aria-hidden="true"></i> ' + sm.customerCenter;
    centerLink.href = sm.customerCenterHref || 'pages/customer-center.html';
  }

  /**
   * 푸터 렌더링
   */
  function renderFooter(container) {
    const el = document.querySelector(container);
    if (!el) return;
    const footer = el.querySelector('footer');
    const menuDiv = footer.querySelector('.footer-menu');
    menuDiv.innerHTML = '';
    d.footer.menu.forEach(item => {
      const a = createElement('a', { href: item.href, textContent: item.text });
      menuDiv.appendChild(a);
    });
    const bi = d.footer.businessInfo;
    footer.querySelector('.footer h3').textContent = d.siteInfo.name + ' 사업자 정보';
    footer.querySelector('.footer p').innerHTML = `
      ${bi.companyName} ${bi.ceo}<br>
      ${bi.address}<br>
      사업자등록번호 : ${bi.businessNumber}<br>
      통신판매업신고번호 : ${bi.mailOrderNumber}<br>
      개인정보보호책임자 : ${bi.privacyOfficer}<br>
      고객센터: ${bi.customerCenter}<br>
      창업문의 : ${bi.franchise}  E-mail : ${bi.email}<br>
      ${bi.copyright}
    `;
    const etcDiv = footer.querySelector('.footer-etc');
    etcDiv.innerHTML = '';
    d.footer.etc.forEach(item => {
      const a = createElement('a', { href: item.href, textContent: item.text });
      etcDiv.appendChild(a);
    });
  }

  /**
   * 하단 네비게이션 렌더링
   */
  function renderBottomNav(container) {
    const el = document.querySelector(container);
    if (!el) return;
    const ul = el.querySelector('.under-nav ul');
    ul.innerHTML = '';
    const classes = { home: 'home', category: 'category', search: 'search', 'in-my-cart': 'in-my-cart', my: 'my' };
    const keys = Object.keys(classes);
    d.bottomNav.forEach((item, i) => {
      const li = createElement('li', { className: keys[i] || '' });
      const a = createElement('a', { href: item.href, ariaLabel: item.label });
      const icon = createElement('i', { className: 'bi ' + item.icon + ' under-nav-icon', 'aria-hidden': 'true' });
      const label = createElement('span', { className: 'under-nav-label', textContent: item.shortLabel || item.label });
      a.appendChild(icon);
      a.appendChild(label);
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /**
   * 사이트 제목 업데이트
   */
  function updatePageTitle() {
    document.title = d.siteInfo.title;
    const lang = document.documentElement;
    if (lang) lang.setAttribute('lang', 'ko');
  }

  /**
   * 초기화
   */
  function init() {
    updatePageTitle();
    renderTopEvent('.top');
    renderNav('.menuHeader');
    renderMainVisual('.mainVisual');
    renderQuickCategories('.cateList');
    renderRecommendation('.recommendation');
    renderTodayMenu('.today-menu');
    renderOnSale('.on-sale');
    renderSideMenu('.side-menu');
    renderFooter('.contentBox');
    renderBottomNav('.contentBox');

    // Swiper 재초기화 (동적 콘텐츠 로드 후)
    if (typeof Swiper !== 'undefined') {
      setTimeout(() => {
        if (window.mainVisualSwiper) window.mainVisualSwiper.update();
        if (window.recommendationSwiper) window.recommendationSwiper.update();
        if (window.todayMenuSwiper) window.todayMenuSwiper.update();
        if (window.onSaleSwiper) window.onSaleSwiper.update();
      }, 100);
    }
  }

  // 스크립트가 body 끝에 있으므로 DOM은 이미 파싱됨 - 즉시 실행
  init();
})();
