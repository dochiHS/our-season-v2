# 그 자리, 그 계절 — 화면 구조 안내 (디자인 담당용)

이 문서는 앱 화면의 HTML 구조와 class 이름입니다. 디자인은 **design.css 파일 하나**로 만들어 주세요.

- design.css는 다른 CSS보다 마지막에 불러옵니다. 여기에 쓴 값이 기존 모양을 덮어씁니다.
- HTML 구조와 class 이름은 바꾸지 않습니다. 새 class가 필요하면 따로 적어 주세요. 구성 담당이 HTML에 붙입니다.
- 계절별 색 테마는 쓰지 않습니다. 색은 `:root` 한 벌만 정해 주세요. (`html[data-theme]`는 남아 있지만 디자인에 쓰지 않아도 됩니다.)
- 아이콘을 쓸지 말지는 디자인 담당이 정합니다. 아이콘 자리는 `span.ui-icon-slot[data-icon="이름"]`로 비어 있습니다. 쓸 거면 `background-image`나 `mask`로 채우고, 안 쓸 거면 `display:none`으로 숨기면 됩니다. 이름: local, my-photos, guide, notice, about, filter
- 로고는 앱 아이콘 그림 `img.brand-logo`(logo-mark.png, 투명 배경)입니다. 크기만 정해 주세요.
- 사진이 없는 칸은 `.photo-placeholder`(옅은 회색 + 가운데 `svg.photo-placeholder-icon` 사진 아이콘)로 통일했습니다. 이 모양은 empty-state.css에서 정하고 design.css 뒤에 불러옵니다.
- 글꼴은 SUIT를 이미 불러옵니다(`font-family: 'SUIT'`).
- 그림 파일을 쓸 때는 파일 이름을 정해 주세요(예: `icon-home.png`). 파일은 앱 폴더 맨 위에 둡니다.

## 계절 색 변수 (지금 쓰는 이름, 값은 바꿔도 됨)

`--bg-primary` 화면 배경 · `--bg-surface` 카드 배경 · `--bg-subtle` 옅은 배경 · `--bg-border` 테두리
`--text-primary` 본문 글자 · `--text-secondary` 보조 글자 · `--text-muted` 흐린 글자
`--color-primary` 강조색 · `--color-primary-dark` 버튼색 · `--color-primary-soft` 옅은 강조 배경 · `--deco-color` 장식색
`--arch-top` `--arch-mid` 빈 사진 칸 하늘색 · `--hill-back` `--hill-front` 빈 사진 칸 언덕색

## 1. 공통 위 막대
```
header.app-topbar
  a.app-brand
    img.brand-logo (앱 로고 그림)
    span.app-brand-text > span.app-brand-name ("그 자리, 그 계절" 또는 "명소") + span.app-brand-sub ("KOREA · PHOTO ARCHIVE")
  div.app-topbar-actions > button.topbar-icon-button (검색, 메뉴 — 안에 svg 아이콘)
```
내 정보 화면은 `header.app-topbar.app-topbar-plain > h1.app-topbar-title`입니다.

## 2. 첫 화면 `section#home-screen.home-v2`
```
section#home-hero.home-hero  (data-season="spring|summer|autumn|winter" = 지금 보여 주는 사진의 계절)
  button.home-hero-media  > img  (사진이 없으면 .is-empty 가 붙고 안에 svg.home-hero-empty-art)
  div.home-hero-shade  (사진 위 어둡게 깔리는 막)
  div.home-hero-body
    p.home-hero-eyebrow ("이번 계절 추천 명소")
    h2.home-hero-name (명소 이름)
    p.home-hero-desc (한 줄 설명)
    p.home-hero-note (예: "가을 사진이 아직 없어 봄 사진을 보여 드려요", 없을 때는 숨김)
    div.home-hero-chips > button.season-chip.season-chip-{spring|summer|autumn|winter}
        [aria-pressed="true"] = 선택됨, .is-empty = 그 계절 사진 없음
        안에 span.season-chip-dot + span(봄/여름/가을/겨울)
  p.home-hero-credit (사진 출처)

section.home-browse
  div.home-section-head > h2.home-section-title ("명소 둘러보기" / "내 주변 명소") + a.home-section-more ("전체 보기 →")
  div.home-browse-strip (가로 스크롤)
    a.browse-card
      span.browse-card-thumb > img   (사진 없으면 .is-empty.photo-placeholder + svg.photo-placeholder-icon)
      span.browse-card-name
      span.browse-card-place (예: "부산 해운대구" 또는 "부산 · 2.1km")

```
첫 화면에서 '내 주변 명소 보기'와 '우리 동네 기록' 카드는 뺐습니다. 위치를 허용하면 둘러보기가 저절로 가까운 순이 되고, 우리 동네 기록은 메뉴에만 있습니다.

## 3. 명소 목록 `section#spots-screen.spots-screen`
```
header.app-topbar (공통 위 막대, 이름 "명소", 부제 "KOREA · 108 SPOTS")
div.screen-topbar.spots-search-row
  label.screen-search-box > span.search-icon + input#spot-search-input + span.search-shortcut
  button#btn-open-filter.spot-filter-button (.is-active = 지역·정렬이 걸려 있음) > span.ui-icon-slot[data-icon="filter"] + span#spot-filter-label ("필터" 또는 "부산 · 가까운 순")
div.spot-season-row  (목록 위 칩은 이 한 줄뿐) > button.spot-season-chip(.season-chip-{계절}) [aria-pressed] > span.season-chip-dot + 글자
div#spot-list.spot-list (2열)
  button.spot-list-card
    span.spot-list-thumbnail > img (+ span.spot-list-reference-badge "참고")  /  사진 없으면 .is-empty.photo-placeholder + svg.photo-placeholder-icon
    span.spot-list-card-body > span.spot-list-card-name + span(주소) + span.spot-list-card-meta > span(거리) span(사진 N장)
  p.spot-list-empty (검색 결과 없음)
```

## 4. 오른쪽 메뉴 `div#app-drawer.modal-overlay.app-drawer` (열리면 .open)
```
aside.app-drawer-panel
  button.btn-close-modal.app-drawer-close
  div.app-drawer-brand > img.brand-logo.brand-logo-lg + p.app-drawer-name
  nav.app-drawer-menu > a.drawer-item / button.drawer-item  (안에 span.ui-icon-slot + 글자)
  div.app-drawer-account > button.drawer-item (svg.drawer-svg + "로그인"/"로그아웃")
  p.app-drawer-foot ("같은 자리, 다른 계절")
```

## 5. 아래 탭 막대 `nav#app-tabbar.app-tabbar`
```
a.tabbar-item [aria-current="page"] = 지금 화면 (안에 svg 선 아이콘 + span 글자)   — 홈, 명소, (+), 보관함, 내 정보 5칸
button.tabbar-add (+ 버튼, 가운데)
```

## 6. 내 정보 `section#me-screen.me-screen`
```
div.me-body
  div.me-card > img.brand-logo.brand-logo-lg + div.me-auth
      p.me-auth-hello > span#home-auth-name(로그인 시 이름) + span.home-auth-login-hint
      button.me-primary-button ("로그인") · button.me-text-button ("로그아웃")
  nav.me-menu > .me-menu-item (span.ui-icon-slot + span + span.me-menu-hint)
```

## 보관함 `section#saved-screen.me-screen.saved-screen` (준비 중)
```
header.app-topbar.app-topbar-plain + div.me-body > div.me-card > div.me-auth > p.me-auth-hello(+ span.home-auth-login-hint) + a.me-text-button
```

## 7. + 사진 올리기 창 `div#add-sheet.modal-overlay.add-sheet` (열리면 .open)
```
div.modal-sheet
  div.sheet-header > h3.sheet-title + p.add-sheet-sub · button.btn-close-modal
  button.add-sheet-locate ("내 위치로 가까운 명소 찾기")
  div.add-sheet-list > button.add-sheet-item (.is-nearest = 가장 가까운 곳)
      span.add-sheet-item-text > span.add-sheet-item-name + span.add-sheet-item-place · span.add-sheet-item-meta (거리)
  button.add-sheet-local > span + span.add-sheet-local-sub
```

## 안내 창 (사용법·공지·앱 정보) `div#info-sheet.modal-overlay.info-sheet`
`.info-sheet-body` 안에 `ol.info-steps`, `ul.info-notices`(span.info-date), `p.info-lead`, `dl.info-list`

## 필터 창 `div#filter-sheet.modal-overlay.filter-sheet` (열리면 .open)
```
div.modal-sheet
  div.sheet-header > h3.sheet-title("필터") + button.btn-close-modal
  p.filter-sheet-label("정렬") + div.spot-sort-row > button.spot-sort-button (.is-active = 선택됨)
  p.filter-sheet-label("지역") + div#spot-region-row.spot-region-row > button.spot-region-chip [aria-pressed] > span + span.spot-region-count
  button.me-primary-button.filter-sheet-done ("결과 보기")
```
