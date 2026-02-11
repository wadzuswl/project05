/**
 * 사이트 콘텐츠 데이터 객체
 * 웹접근성: 모든 텍스트 콘텐츠를 중앙 관리하여 일관성 유지
 */
const siteData = {
  // 사이트 기본 정보
  siteInfo: {
    name: '초록마을',
    title: '초록마을 :: 나와 가장 가까운 유기농친환경 마켓',
    description: '건강하고 자연친화적인 식품을 만나는 특별한 공간'
  },

  // 상단 이벤트 배너
  topEvent: {
    text: '지금 회원가입시',
    highlight: '3,000원',
    highlightSuffix: ' 쿠폰 바로 증정!',
    href: 'pages/signup.html'
  },

  // 네비게이션 메뉴
  navItems: [
    { text: 'On Sale', href: 'pages/on-sale.html' },
    { text: '베스트셀러', href: 'pages/bestseller.html' },
    { text: '배송안내', href: 'pages/delivery.html' },
    { text: '초록레시피', href: 'pages/recipe.html' },
    { text: '매장안내', href: 'pages/store.html' }
  ],

  // 메인 비주얼 슬라이드
  mainVisual: [
    { img: 'images/mainVisual/01.jpg', alt: '초록마을 메인 비주얼 - 유기농 친환경 마켓', href: 'pages/on-sale.html' },
    { img: 'images/mainVisual/02.jpg', alt: '신규 회원 혜택', href: 'pages/bestseller.html' },
    { img: 'images/mainVisual/03.jpg', alt: '제철 상품 추천', href: 'pages/on-sale.html' },
    { img: 'images/mainVisual/04.jpg', alt: '초록마을 매장 안내', href: 'pages/store.html' }
  ],

  // 퀵 카테고리 (바로가기)
  quickCategories: [
    { img: 'images/quickIcons/신규회원혜택.png', alt: '신규회원 혜택', text: '신규회원<br>혜택', href: 'pages/signup.html' },
    { img: 'images/quickIcons/배송안내.png', alt: '배송 안내', text: '배송안내', href: 'pages/delivery.html' },
    { img: 'images/quickIcons/세일안내.png', alt: '세일 안내', text: 'On Sale', href: 'pages/on-sale.html' },
    { img: 'images/quickIcons/유아동전문관.png', alt: '유아동 전문관', text: '유아동<br>전문관', href: 'pages/category.html' },
    { img: 'images/quickIcons/신선채소관.png', alt: '신선 채소관', text: '신선<br>채소관', href: 'pages/category.html' },
    { img: 'images/quickIcons/프리미엄쌀가게.png', alt: '프리미엄 쌀가게', text: '프리미엄<br>쌀가게', href: 'pages/category.html' }
  ],

  // 강력추천 상품
  recommendation: {
    title: '장바구니로 바로 클릭! 강력추천 상품',
    viewAll: '전체보기',
    viewAllHref: 'pages/on-sale.html',
    subTitle: '취향 맞춤 추천 상품과 신선한 제철 상품을 함께 만나보세요.',
    products: [
      { img: 'images/recommendation/오미자.jpg', alt: '오미자차', name: '오미자차(660g)', price: '14,800' },
      { img: 'images/recommendation/왕만두.jpg', alt: '왕만두', name: '왕만두(420g)', price: '6,280' },
      { img: 'images/recommendation/오렌지당근.jpg', alt: '유기농 ACE주스', name: '유기농 ACE주스(750mL)', price: '14,800' },
      { img: 'images/recommendation/오렌지.jpg', alt: '통째로 짜낸 오렌지', name: '통째로 짜낸 오렌지(145mL X 10개입)', price: '13,800' }
    ]
  },

  // 오늘 이 메뉴 어때요? (시즌 레시피)
  todayMenu: [
    {
      img: 'images/todayMenu/01.jpg',
      alt: '더 구수하게 즐기는 여름 국수',
      subTitle: '더 구수하게 즐기는 여름 국수',
      title: '우리밀 흑임자 콩국수',
      description: '흑임자 생콩국물에 면만 추가해서 손쉽게 콩국수를 만들어보세요. 면발은 우리 밀이라 쫄기하고, 국물은 국내산 콩과 흑임자로 만들어 더 구수하죠.',
      products: [
        { img: 'images/todayMenu/01-1.jpg', alt: '국산콩으로 만든 흑임자생콩국물', name: '국산콩으로 만든 흑임자생콩국물(1,000mL)', price: '4,780' },
        { img: 'images/todayMenu/01-2.jpg', alt: '유기농 우리밀국수', name: '유기농 우리밀국수(400g)', price: '3,150' },
        { img: 'images/todayMenu/01-3.jpg', alt: '우리밀 메밀국수', name: '우리밀 메밀국수(400g)', price: '4,800' },
        { img: 'images/todayMenu/01-4.jpg', alt: '자유방목 동물복지 유정란', name: '자유방목 동물복지 유정란(10입)', price: '7,700' },
        { img: 'images/todayMenu/01-5.jpg', alt: '동물복지 제주유정란', name: '동물복지 제주유정란(10입)', price: '4,780' },
        { img: 'images/todayMenu/01-6.jpg', alt: '우리밀 국수', name: '우리밀 국수(400g)', price: '3,600' },
        { img: 'images/todayMenu/01-7.jpg', alt: '우리밀 칼국수', name: '우리밀 칼국수(400g)', price: '3,800' }
      ]
    },
    {
      img: 'images/todayMenu/02.jpg',
      alt: '고소한 콩국물의 디저트 변신',
      subTitle: '고소한 콩국물의 디저트 변신',
      title: '흑임자 콩국물 빙수',
      description: '우유 빙수보다 더 진하고 고소한 빙수를 찾는다면, 콩국물로 만든 빙수는 어떠세요? 살얼음으로 얼린 흑임자 생콩국물 위에 신선한 과일을 토핑으로 올려보세요.',
      products: [
        { img: 'images/todayMenu/01-1.jpg', alt: '국산콩으로 만든 흑임자생콩국물', name: '국산콩으로 만든 흑임자생콩국물(1,000mL)', price: '4,780' },
        { img: 'images/todayMenu/02-2.jpg', alt: '친환경 대추방울토마토', name: '친환경 대추방울토마토 두팩묶음(500gX2입)', price: '11,900' },
        { img: 'images/todayMenu/02-3.jpg', alt: '유기농 골드키위', name: '유기농 골드키위(4~5입/450g이상)', price: '6,900' },
        { img: 'images/todayMenu/02-4.jpg', alt: '유기농 점보골드키위', name: '유기농 점보골드키위(6입/800g이상)', price: '10,800' },
        { img: 'images/todayMenu/02-5.jpg', alt: '무농약이상 토마토', name: '무농약이상_토마토(1.5kg)', price: '11,900' },
        { img: 'images/todayMenu/01-3.jpg', alt: '국산콩으로 만든 흑임자생콩국물', name: '국산콩으로 만든 흑임자생콩국물(1,000mL)', price: '4,780' },
        { img: 'images/todayMenu/01-6.jpg', alt: '국산콩으로 만든 흑임자생콩국물', name: '국산콩으로 만든 흑임자생콩국물(1,000mL)', price: '4,780' }
      ]
    },
    {
      img: 'images/todayMenu/03.jpg',
      alt: '고소한 흑임자와 라떼의 만남',
      subTitle: '고소한 흑임자와 라떼의 만남',
      title: '흑임자 콩국물 라떼',
      description: '진한 커피 대신 라떼가 생각나는 날, 콩국물 하나만 있으면 카페에서 마시던 특별한 라떼를 만들 수 있어요. 흑임자 생콩국물에 커피만 부어주면 고소한 흑임자라떼가 완성됩니다.',
      products: [
        { img: 'images/todayMenu/01-1.jpg', alt: '국산콩으로 만든 흑임자생콩국물', name: '국산콩으로 만든 흑임자생콩국물(1,000mL)', price: '4,780' },
        { img: 'images/todayMenu/03-2.jpg', alt: '마일드 커피믹스', name: '마일드 커피믹스(12gX20개입)', price: '8,900' },
        { img: 'images/todayMenu/03-3.jpg', alt: '유기농 설탕', name: '유기농 설탕(480g)', price: '2,320' },
        { img: 'images/todayMenu/03-4.jpg', alt: '유기농 드립커피백', name: '유기농 드립커피백(7gX10개입)', price: '9,900' },
        { img: 'images/todayMenu/03-5.jpg', alt: '마일드 커피믹스 대용량', name: '마일드 커피믹스(12gX70개입)', price: '18,000' },
        { img: 'images/todayMenu/03-2.jpg', alt: '국산콩으로 만든 흑임자생콩국물', name: '국산콩으로 만든 흑임자생콩국물(1,000mL)', price: '4,780' },
        { img: 'images/todayMenu/03-3.jpg', alt: '국산콩으로 만든 흑임자생콩국물', name: '국산콩으로 만든 흑임자생콩국물(1,000mL)', price: '4,780' }
      ]
    }
  ],

  // 세일 상품
  onSale: [
    { img: 'images/onSale/1.jpg', alt: '무농약이상 애호박', name: '무농약이상 애호박(1개)', price: '2,100' },
    { img: 'images/onSale/2.jpg', alt: '무농약 도라지청', name: '무농약 도라지청(150g)', price: '22,300' },
    { img: 'images/onSale/3.jpg', alt: '무농약이상 청양고추', name: '무농약이상_청양고추(100g)', price: '2,000' },
    { img: 'images/onSale/4.jpg', alt: '유기농 야채수', name: '유기농 야채수(150mLx30개입)', price: '22,300' },
    { img: 'images/onSale/5.jpg', alt: '유기농 구운 아몬드', name: '유기농 구운 아몬드(450g)', price: '22,300' },
    { img: 'images/onSale/6.jpg', alt: '유기농 고시히카리', name: '유기농 고시히카리(4kg)', price: '22,300' },
    { img: 'images/onSale/7.jpg', alt: '유기농 체다 슬라이스 치즈', name: '유기농 체다 슬라이스 치즈(18gX20매)', price: '22,300' },
    { img: 'images/onSale/8.png', alt: '사과즙', name: '사과즙(100mLX40개입)', price: '22,300' },
    { img: 'images/onSale/9.jpg', alt: '통째로 짜낸 포도', name: '[40포]통째로 짜낸 포도(1box)', price: '22,300' },
    { img: 'images/onSale/10.jpg', alt: '유기농 호두', name: '[기획]유기농 호두(270g)', price: '16,060' },
    { img: 'images/onSale/11.jpg', alt: '통안심살 치킨텐더', name: '통안심살 치킨텐더(320g)', price: '6,560' },
    { img: 'images/onSale/12.jpg', alt: '구운 유정란', name: '구운 유정란(10개입)', price: '22,300' },
    { img: 'images/onSale/13.jpg', alt: '훈제오리 슬라이스', name: '훈제오리 슬라이스(350g)', price: '16,830' },
    { img: 'images/onSale/14.jpg', alt: '무항생제 한돈 뒷다리 다짐육', name: '무항생제 한돈 뒷다리 다짐육(300g)', price: '9,800' },
    { img: 'images/onSale/15.jpg', alt: '무항생제 한돈 등심', name: '무항생제 한돈 등심 짜장/카레용(500g)', price: '9,400' },
    { img: 'images/onSale/16.jpg', alt: '무항생제 한돈 갈비찜용', name: '무항생제 한돈 갈비찜용(800g)', price: '16,000' },
    { img: 'images/onSale/17.jpg', alt: '유기농 고시히카리', name: '유기농 고시히카리(4kg)', price: '22,300' },
    { img: 'images/onSale/18.jpg', alt: '유기농 가바흑미', name: '유기농 가바흑미(800g)', price: '7,800' },
    { img: 'images/onSale/19.jpg', alt: '상하목장 유기농 주스오렌지', name: '상하목장 유기농 주스오렌지(125mLX4입)', price: '22,300' },
    { img: 'images/onSale/20.jpg', alt: '유기농 고시히카리', name: '유기농 고시히카리(4kg)', price: '22,300' },
    { img: 'images/onSale/21.jpg', alt: '볶은우엉차', name: '볶은우엉차(120g)', price: '15,900' },
    { img: 'images/onSale/22.jpg', alt: '무농약이상 아스파라거스', name: '무농약이상_아스파라거스(250g)', price: '7,700' },
    { img: 'images/onSale/23.jpg', alt: '유기농 아빠견과', name: '유기농 아빠견과(420g)', price: '18,350' },
    { img: 'images/onSale/24.jpg', alt: '한우고기곰탕', name: '[10개입]한우고기곰탕(1box)', price: '69,600' }
  ],

  // 사이드 메뉴
  sideMenu: {
    login: '로그인해 주세요',
    loginHref: 'pages/login.html',
    orderInquiry: '주문조회',
    orderInquiryHref: 'pages/order-inquiry.html',
    signupBenefit: '회원가입시 다양한 혜택 증정!',
    signupHref: 'pages/signup.html',
    categoryTitle: '전체 카테고리',
    categoryHref: 'pages/category.html',
    serviceTitle: '초록마을 주요서비스',
    categories: [
      '쌀·잡곡', '과일·견과·건과', '정육·계란류', '차·음료·생수·유제품',
      '장류·양념·가루·오일', '화장품·주방/생활용품', '대용량', '채소',
      '수산·건어물', '건강식품', '과자·간식·빵·빙과', '면·간편국&찌개·반찬',
      '유아동식재료&용품', '선물모음'
    ],
    services: [
      { text: '품질관리센터', href: 'pages/customer-center.html' },
      { text: '매장안내', href: 'pages/store.html' },
      { text: '매장배송 / 픽업 안내', href: 'pages/delivery.html' },
      { text: '멤버십', href: 'pages/mypage.html' }
    ],
    chatbot: '챗봇상담',
    chatbotHref: 'pages/customer-center.html',
    customerCenter: '고객센터',
    customerCenterHref: 'pages/customer-center.html'
  },

  // 푸터
  footer: {
    menu: [
      { text: '로그인', href: 'pages/login.html' },
      { text: '매장소개', href: 'pages/store.html' },
      { text: '고객센터', href: 'pages/customer-center.html' }
    ],
    businessInfo: {
      companyName: '(주)초록마을',
      ceo: '대표이사 김재연',
      address: '서울특별시 강남구 언주로 726 8층, 11층(논현동, 두산빌딩)',
      businessNumber: '105-86-05788',
      mailOrderNumber: '2022-서울강남-05777',
      privacyOfficer: '박준태',
      customerCenter: '080-023-0023 / 070-7549-6262',
      franchise: '1544-6266',
      email: 'chorocweb@choroc.com',
      copyright: 'Copyright 2021. The Chorocmaeul Co., Ltd.'
    },
    etc: [
      { text: '이용약관', href: 'pages/terms.html' },
      { text: '개인정보처리방침', href: 'pages/privacy.html' },
      { text: '이메일주소무단수집금지', href: 'pages/privacy.html' },
      { text: '사업자정보확인', href: 'pages/store.html' }
    ]
  },

  // 하단 네비게이션 (Bootstrap Icons - Material Design 스타일)
  bottomNav: [
    { icon: 'bi-house-fill', label: '홈', shortLabel: '홈', href: 'index.html' },
    { icon: 'bi-grid-3x3-gap-fill', label: '카테고리', shortLabel: '카테고리', href: 'pages/category.html' },
    { icon: 'bi-search', label: '검색', shortLabel: '검색', href: 'pages/search.html' },
    { icon: 'bi-cart-fill', label: '장바구니', shortLabel: '장바구니', href: 'pages/cart.html' },
    { icon: 'bi-person-fill', label: '마이페이지', shortLabel: '마이', href: 'pages/mypage.html' }
  ]
};
