# 초록마을 사이트 리뉴얼 프로젝트

## 작업자 : 정현지

## 제작 기간: 3일 (2026.02.05 ~ 2023.02.07) / 리뉴얼: 2025.02

---

## 기능 요약

### 주요 페이지
| 페이지 | 기능 |
|--------|------|
| **메인** | 메인 비주얼, 강력추천 상품, 시즌 레시피, 세일 상품 슬라이드 |
| **On Sale** | 세일 상품 그리드 (data.js 연동) |
| **베스트셀러** | 인기 상품 그리드 |
| **배송안내** | 배송비·기간·방법·반품·픽업 안내 |
| **초록레시피** | 흑임자 콩국수·빙수·라떼 등 레시피 카드 |
| **매장안내** | 본점 주소·운영시간·OpenStreetMap 지도 |
| **상품 상세** | 메인 상품 클릭 시 상세 페이지 (쿼리 파라미터 연동) |

### 주요 기능
- **햄버거 메뉴** – 카테고리·서비스 링크, 로그인·회원가입 바로가기
- **하단 네비게이션** – 홈/카테고리/검색/장바구니/마이 (380px 고정, Bootstrap Icons + 라벨)
- **회원가입 폼** – 유효성 검사 (아이디·비밀번호 조건), 오류 시 빨간 박스 피드백
- **상품 링크** – 강력추천·시즌 레시피·세일 상품 클릭 시 상세 페이지로 이동
- **동적 렌더링** – `data.js` 콘텐츠 기반 `app.js` DOM 생성

### 기술 스택
- Swiper 슬라이드, jQuery, Bootstrap Icons

---

## 📚 기능 추가 및 학습 내용

리뉴얼 과정에서 추가한 기능과, 그 과정에서 공부·적용한 내용을 정리했습니다.

### 1. 데이터 객체화 (data.js + app.js)
- **학습**: 콘텐츠와 뷰 분리, DOM 조작 API (`createElement`, `appendChild`, `innerHTML`)
- **적용**: `siteData` 객체로 상품·메뉴·푸터 데이터 관리 → `app.js`에서 동적 렌더링

### 2. 상품 상세 페이지 (쿼리 파라미터)
- **학습**: `URLSearchParams`, `location.search`로 `?id=rec-0`, `?id=onsale-5` 파싱
- **적용**: 메인 상품 클릭 시 `product-detail.html?id=...`로 이동, data.js에서 해당 상품 조회

### 3. 회원가입 폼 유효성 검사
- **학습**: 정규식(정규표현식)으로 아이디·비밀번호 형식 검증, 폼 submit 이벤트 제어
- **적용**: 실시간 검증, 오류 시 `role="alert"` 피드백 표시

### 4. 하단 네비게이션
- **학습**: flexbox 레이아웃, 아이콘 폰트 사용
- **적용**: Bootstrap Icons로 아이콘+라벨 구성, 380px 고정 너비

### 5. 이용약관·개인정보처리방침·배송안내 콘텐츠 작성
- **학습**: 전자상거래법 상 필수 고지 사항, 개인정보처리방침 구성
- **적용**: 실제 쇼핑몰 수준의 안내 문구 및 섹션 구성

### 6. OpenStreetMap 임베드
- **학습**: `iframe`으로 외부 지도 서비스 삽입, `bbox`, `marker` 파라미터
- **적용**: 매장안내 페이지에 지도 표시

### 7. 시맨틱 마크업 및 ARIA
- **학습**: WCAG 2.1, `aria-expanded`, `aria-controls`, `:focus-visible`, 스킵 링크
- **적용**: 햄버거 메뉴·폼·동적 콘텐츠에 접근성 속성 적용

### 8. 반응형·모바일 UI 고려
- **학습**: `env(safe-area-inset-bottom)` 노치 대응, 최소 터치 영역(48px)
- **적용**: 하단 네비게이션 패딩·터치 영역 조정

## 💻 개발 환경

- 개발 환경 : <img src="https://img.shields.io/badge/windows10-0078D6?style=flat-square&logo=windows10&logoColor=white"/>
- 사용 프로그램 : <img src="https://img.shields.io/badge/Vs code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white"/> <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>
- 사용된 기술 :
  <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=Swiper&logoColor=white">

## 🛠️ 페이지 특성

- Swiper 슬라이드

  웹/앱 일체형 레이아웃으로 디자인이 변경되면서 기존 웹사이트에 비해 컨텐츠를 배치할 수 있는 공간이 줄어드는 어려움을 해결하기 위하여 Swpiper를 사용, 효율적으로 공간을 활용할 수 있었습니다. <br>
  특히 슬라이드와 overflow-y:auto를 적절히 활용하여 한 섹션에서 카테고리별로 분류된 상품군을 담아냈습니다.

## ♿ 웹표준·웹접근성 – 중요하게 생각한 점

이 프로젝트에서는 **WCAG 2.1**과 **시맨틱 HTML5**를 기준으로, **키보드·스크린 리더·포커스 관리**를 우선 적용했습니다.

### 1. 시맨틱 HTML (구조와 의미)
- `lang="ko"`로 문서 언어 명시
- `<main>`, `<header>`, `<nav>`, `<section>`, `<footer>` 등 시맨틱 랜드마크 사용
- 제목 계층(h1~h6) 유지
- 클릭 가능한 UI는 `<button>` 사용 (햄버거 메뉴, 닫기 버튼)

**이유**: 스크린 리더 사용자가 구조를 파악하기 쉽고, 검색·자동화 도구가 콘텐츠를 더 정확히 이해할 수 있도록 하기 위함입니다.

### 2. 키보드 접근성
- **포커스 표시**: `:focus-visible`로 키보드 포커스 시에만 아웃라인 표시 (마우스 클릭 시에는 숨김)
- **ESC 키**: 사이드 메뉴 닫기
- **포커스 트랩**: 메뉴 열림 시 Tab으로 메뉴 내부만 순환

**이유**: 마우스를 쓰지 못하는 사용자도 동일한 기능을 이용할 수 있도록 하기 위함입니다.

### 3. 스킵 네비게이션
- “본문 바로가기” 링크로 반복 메뉴 건너뛰고 본문(`#mainContent`)으로 이동
- Tab 포커스 시에만 표시해 시각적 산만함 최소화

**이유**: 키보드 사용자가 매번 긴 메뉴를 탭으로 건너뛸 필요 없이 바로 콘텐츠에 도달하도록 하기 위함입니다.

### 4. ARIA 적용
- `aria-expanded`, `aria-controls`, `aria-label`: 메뉴 상태·연관 요소·설명 제공
- `aria-hidden="true"`: 장식용 아이콘에 적용해 스크린 리더 중복 낭독 방지
- `role="navigation"`, `role="main"`, `role="banner"`: 랜드마크 역할 보조

**이유**: 보조 기기 사용자에게 현재 상태와 역할을 명확히 전달하기 위함입니다.

### 5. 이미지 대체 텍스트
- 의미 있는 이미지는 `alt`에 설명 제공
- 장식용 이미지는 `alt=""` 또는 `aria-hidden="true"` 적용

**이유**: 시각 장애 사용자에게도 콘텐츠 의미를 전달하기 위함입니다.

### 6. 포커스 스타일 유지
- `outline: 0 !important` 제거 – 키보드 포커스 위치를 항상 인식할 수 있도록 유지
- `:focus-visible`로 접근성과 디자인 균형 유지

**이유**: 포커스 표시가 없으면 키보드 사용자가 현재 위치를 알기 어렵기 때문입니다.

### 7. 폼 접근성 및 유효성
- **입력 조건 안내**: 아이디(4~20자, 영문·숫자), 비밀번호(8자 이상, 영문·숫자·특수문자)를 필드 근처에 표시
- **오류 피드백**: 필수·형식 오류 시 폼 아래에 빨간 박스로 “다음 항목이 잘못되었습니다:” + 구체적인 오류 목록 표시
- `role="alert"`, `aria-live="polite"`: 스크린 리더에 오류 메시지 전달
- `fieldset`, `legend`, `label`로 구조화

**이유**: 입력 실수와 접근성 문제를 함께 줄이기 위함입니다.

### 8. 콘텐츠·마크업 일관성
- `data.js`에서 텍스트 콘텐츠를 중앙 관리
- `app.js`가 동적 렌더링 시 시맨틱 마크업·ARIA 속성 자동 적용

**이유**: 일관된 콘텐츠와 마크업으로 유지보수와 접근성 점검을 용이하게 하기 위함입니다.

## 👀 페이지 구성

### 전체 페이지

| 전체 : 데스크탑 풀 샷                                                                                                  |
| :--------------------------------------------------------------------------------------------------------------------- |
| ![chorocFullShot](https://github.com/Isabella-Kim/ChorocRenewal/assets/139948934/0e1ae937-6f0f-48ae-9934-dd529e2827c4) |

|| 전체적으로 Header, 메인비주얼, 강력추천상품, 시즌상품 추천, 세일상품, Footer, 버튼영역 의 섹션으로 구성되었습니다. 이 중 메인비주얼, 강력추천상품, 시즌상품 추천, 세일상품, 버튼영역에 대해 소개합니다. 콘텐츠는 `js/data.js`의 객체에서 관리되며, `js/app.js`가 동적 렌더링합니다.

<br>

| 섹션1 : 메인비주얼                                                                                                 |
| :----------------------------------------------------------------------------------------------------------------- |
| ![mainVisual](https://github.com/Isabella-Kim/ChorocRenewal/assets/139948934/f94735f9-d754-4c66-8ae1-1665c2d83885) |

| 제작 시점에서 할인이 많이 적용되거나, 시즌상품으로 채택된 상품군을 자동슬라이드로 무한반복하여 보여줍니다.<br> 슬라이드 아래편에는 사이트의 주요 기능을 담당하고 있는 페이지로 이동할 수 있는 버튼이 있습니다. 버튼에 마우스를 hover하면 transition, top 값의 변화로 부드럽게 올라가는 형태의 동작을 취함으로써 마우스 커서가 해당 영역에 접근했음을 보여줍니다.

<br>

| 섹션2 : 강력추천상품                                                                                              |
| :---------------------------------------------------------------------------------------------------------------- |
| ![strongRec](https://github.com/Isabella-Kim/ChorocRenewal/assets/139948934/9429887f-9254-4123-9d00-4641ce33bfcc) |

| 제작 시점에서 초록마을이 제철 과일, 제철 채소 등으로 만들어진 제품을 추천해 줍니다. 슬라이드로 구성되어있으며 자동 / 무한반복은 되지 않습니다.

<br>

| 섹션3 : 시즌상품 추천                                                                                             |
| :---------------------------------------------------------------------------------------------------------------- |
| ![todayMenu](https://github.com/Isabella-Kim/ChorocRenewal/assets/139948934/581f45fe-f029-478a-b732-5cae5995ddf8) |

| 여름을 계절 기준으로 잡고, 사이트에서 시즌에 맞으면서도 특색있는 식품인 흑임자 콩국물을 활용한 다양한 상품들을 소개합니다. Swiper 슬라이드로 상품을 활용한 대표 식품을 구분하고, 해당 식품 제조에 사용된 상세 제품들을 overflow-y:auto로 내부 스크롤을 만들어서 보여줍니다.

<br>

| 섹션4 : 세일상품                                                                                               |
| :------------------------------------------------------------------------------------------------------------- |
| ![onSale](https://github.com/Isabella-Kim/ChorocRenewal/assets/139948934/3a33822a-b7e7-4a6c-9ba7-d54c29e2e617) |

| 세일중인 모든 상품을 슬라이드에서 연속적으로 확인할 수 있습니다.

<br>

| 섹션5 : 버튼 영역                                                                                              |
| :------------------------------------------------------------------------------------------------------------- |
| ![button](https://github.com/Isabella-Kim/ChorocRenewal/assets/139948934/4d265934-a757-4aae-859d-e2b1bd7e0166) |

| 화면 하단에 보이는 버튼 영역입니다. 스크롤을 내릴 때에는 보이지 않다가 스크롤을 올릴 때에만 나타납니다.

<br>

## 🚀 링크

- 🔗 [리뉴얼 사이트 바로가기](https://wadzuswl.github.io/project05/)
