// 새 화면 틀: 첫 화면 추천 명소, 명소 둘러보기 띠, 오른쪽 메뉴, 아래 탭 막대, + 사진 올리기 명소 고르기
(function (global) {
  'use strict';

  const SEASONS = ['spring', 'summer', 'autumn', 'winter'];
  const SEASON_KO = { spring: '봄', summer: '여름', autumn: '가을', winter: '겨울' };
  const hero = document.getElementById('home-hero');
  const strip = document.getElementById('home-browse-strip');
  const tabbar = document.getElementById('app-tabbar');
  const drawer = document.getElementById('app-drawer');
  const infoSheet = document.getElementById('info-sheet');
  const addSheet = document.getElementById('add-sheet');
  const heroState = { spotId: null, season: null };
  let loggedIn = false;

  const INFO = {
    guide: {
      title: '사용법',
      html: '<ol class="info-steps"><li><b>명소 고르기</b><span>명소 탭이나 첫 화면에서 가고 싶은 곳을 고릅니다. 동·면 이름으로도 찾을 수 있어요.</span></li><li><b>계절 사진 보기</b><span>같은 자리의 봄·여름·가을·겨울 사진을 비교하고, 시간대와 날씨로 골라 봅니다.</span></li><li><b>지도 핀 누르기</b><span>핀을 누르면 그 자리에서 찍은 사진과 길찾기가 아래에서 올라옵니다.</span></li><li><b>현장에서 나침반</b><span>촬영 지점 반경 안에 들어오면 나침반이 사진을 찍은 방향을 알려 줍니다.</span></li><li><b>사진 올리기</b><span>아래 + 버튼으로 명소를 고르고, 현장 위치를 확인한 뒤 올립니다. 관리자 확인 후 공개돼요.</span></li></ol>'
    },
    notice: {
      title: '공지사항',
      html: '<ul class="info-notices"><li><span class="info-date">2026.10</span><b>새 화면을 시험하고 있어요</b><span>첫 화면, 아래 탭, 메뉴가 바뀌었습니다. 기능과 사진 규칙은 그대로입니다.</span></li><li><span class="info-date">상시</span><b>사진 공개 기준</b><span>명소 반경 안에서 찍은 사진만 올릴 수 있고, 관리자 확인 후 공개됩니다. 알아볼 수 있는 다른 사람 얼굴이 나온 사진은 공개하지 않아요.</span></li></ul>'
    },
    about: {
      title: '앱 정보',
      html: '<p class="info-lead">그 자리, 그 계절은 전국 출사 명소에서 같은 자리의 사계절 사진을 모아 보는 앱입니다. 명소 정보는 한국관광공사 관광정보를 바탕으로 정리했습니다.</p><dl class="info-list"><div><dt>사진</dt><dd>이용자가 현장에서 올린 사진과 한국관광공사 사진(ⓒ한국관광콘텐츠랩, 공공누리 제1유형)</dd></div><div><dt>지도</dt><dd>© OpenStreetMap 기여자, 길찾기는 네이버 지도</dd></div><div><dt>글꼴</dt><dd>SUIT</dd></div></dl>'
    }
  };

  function app() { return global.App && global.App.state ? global.App.state : null; }
  function currentSeason() {
    if (global.SeasonTheme && typeof global.SeasonTheme.current === 'function') return global.SeasonTheme.current();
    return global.SpotData && global.SpotData.getCurrentSeason ? global.SpotData.getCurrentSeason() : 'spring';
  }
  function district(spot) { return String(spot.address || '').split(' ')[0] || ''; }

  // 명소·계절별 사진 한 장: 승인된 이용자 사진이 먼저, 없으면 관광공사 사진
  function photoFor(spotId, season) {
    const state = app();
    const own = (state && state.approvedPhotos || []).filter(photo => photo.spotId === spotId && photo.season === season)
      .sort((a, b) => String(b.uploadedAt || '').localeCompare(String(a.uploadedAt || '')))[0];
    if (own) return { src: own.dataUrl, credit: `${own.nickname || '익명'} 님의 사진`, reference: false };
    const refs = global.ReferencePhotos ? global.ReferencePhotos.getReferencePhotos(spotId, season) : [];
    if (refs.length) return { src: refs[0].image, thumb: refs[0].thumb, credit: global.ReferencePhotos.creditOf(refs[0]), reference: true };
    return null;
  }
  function anyPhotoFor(spotId, preferred) {
    const order = [preferred, ...SEASONS.filter(season => season !== preferred)];
    for (const season of order) { const photo = photoFor(spotId, season); if (photo) return { season, photo }; }
    return null;
  }

  function pickHeroSpot(spots, season) {
    const day = Math.floor(Date.now() / 86400000);
    const withSeason = spots.filter(spot => photoFor(spot.id, season));
    const pool = withSeason.length ? withSeason : spots.filter(spot => anyPhotoFor(spot.id, season));
    if (!pool.length) return spots[0] || null;
    return pool[day % pool.length];
  }

  function renderHero() {
    const state = app();
    if (!hero || !state || !state.spots || !state.spots.length) return;
    const nowSeason = currentSeason();
    let spot = state.spots.find(item => item.id === heroState.spotId);
    if (!spot) { spot = pickHeroSpot(state.spots, nowSeason); heroState.spotId = spot && spot.id; heroState.season = null; }
    if (!spot) return;
    if (!heroState.season) { const found = anyPhotoFor(spot.id, nowSeason); heroState.season = found ? found.season : nowSeason; }
    const season = heroState.season, photo = photoFor(spot.id, season);
    hero.replaceChildren();
    hero.dataset.season = season;

    const link = document.createElement('button');
    link.type = 'button'; link.className = 'home-hero-media';
    link.setAttribute('aria-label', `${spot.name} 명소 화면 보기`);
    link.addEventListener('click', () => global.Screens && global.Screens.navigateSpot(spot.id));
    if (photo) {
      const image = document.createElement('img');
      image.src = photo.src; image.alt = `${spot.name} ${SEASON_KO[season]} 사진`; image.decoding = 'async';
      link.appendChild(image);
    } else {
      link.classList.add('is-empty');
      link.innerHTML = '<svg class="home-hero-empty-art" viewBox="0 0 300 300" aria-hidden="true"><path class="hero-empty-hill-back" d="M0 196 Q60 168 122 188 T236 180 T300 188 V300 H0Z"></path><path class="hero-empty-hill-front" d="M0 226 Q80 196 160 220 T300 212 V300 H0Z"></path><circle class="hero-empty-sun" cx="150" cy="150" r="28"></circle></svg>';
    }
    hero.appendChild(link);

    const shade = document.createElement('div'); shade.className = 'home-hero-shade'; shade.setAttribute('aria-hidden', 'true'); hero.appendChild(shade);

    const body = document.createElement('div'); body.className = 'home-hero-body';
    const eyebrow = document.createElement('p'); eyebrow.className = 'home-hero-eyebrow'; eyebrow.textContent = '이번 계절 추천 명소';
    const name = document.createElement('h2'); name.className = 'home-hero-name'; name.textContent = spot.name;
    const desc = document.createElement('p'); desc.className = 'home-hero-desc'; desc.textContent = spot.description || '';
    const note = document.createElement('p'); note.className = 'home-hero-note';
    if (!photo) note.textContent = `${SEASON_KO[season]} 사진이 아직 없어요. 첫 사진을 올려 주세요.`;
    else if (season !== nowSeason && !photoFor(spot.id, nowSeason)) note.textContent = `${SEASON_KO[nowSeason]} 사진이 아직 없어 ${SEASON_KO[season]} 사진을 보여 드려요.`;
    note.hidden = !note.textContent;
    body.append(eyebrow, name, desc, note);

    const chips = document.createElement('div'); chips.className = 'home-hero-chips'; chips.setAttribute('role', 'group'); chips.setAttribute('aria-label', '계절 사진 고르기');
    SEASONS.forEach(key => {
      const chip = document.createElement('button');
      chip.type = 'button'; chip.className = `season-chip season-chip-${key}`; chip.dataset.season = key;
      chip.setAttribute('aria-pressed', key === season ? 'true' : 'false');
      const has = Boolean(photoFor(spot.id, key));
      chip.setAttribute('aria-label', `${SEASON_KO[key]} 사진${has ? '' : ' (아직 없음)'}`);
      chip.innerHTML = `<span class="season-chip-dot" aria-hidden="true"></span><span>${SEASON_KO[key]}</span>`;
      if (!has) chip.classList.add('is-empty');
      chip.addEventListener('click', () => { heroState.season = key; renderHero(); const next = hero.querySelector(`[data-season="${key}"]`); if (next) next.focus(); });
      chips.appendChild(chip);
    });
    body.appendChild(chips);
    hero.appendChild(body);

    if (photo) { const credit = document.createElement('p'); credit.className = 'home-hero-credit'; credit.textContent = photo.credit; hero.appendChild(credit); }
  }

  function renderStrip() {
    const state = app();
    if (!strip || !state || !state.spots) return;
    const nowSeason = currentSeason();
    strip.replaceChildren();
    const title = document.getElementById('home-browse-title');
    let spots = state.spots.slice();
    if (state.userCoords) { spots.sort((a, b) => (Number.isFinite(a.distanceMeters) ? a.distanceMeters : Infinity) - (Number.isFinite(b.distanceMeters) ? b.distanceMeters : Infinity)); spots = spots.slice(0, 12); }
    else { const local = spots.filter(spot => spot.sido === '충북'); spots = [...local, ...spots.filter(spot => spot.sido !== '충북')].slice(0, 12); }
    if (title) title.textContent = state.userCoords ? '내 주변 명소' : '명소 둘러보기';
    spots.forEach(spot => {
      const card = document.createElement('a');
      card.className = 'browse-card'; card.href = `#/spot/${encodeURIComponent(spot.id)}`;
      const thumb = document.createElement('span'); thumb.className = 'browse-card-thumb';
      const found = anyPhotoFor(spot.id, nowSeason);
      if (found) { const image = document.createElement('img'); image.src = found.photo.thumb || found.photo.src; image.alt = ''; image.loading = 'lazy'; thumb.appendChild(image); }
      else { thumb.classList.add('is-empty'); thumb.innerHTML = '<span>사진을 기다려요</span>'; }
      const name = document.createElement('span'); name.className = 'browse-card-name'; name.textContent = spot.name;
      const place = document.createElement('span'); place.className = 'browse-card-place'; place.textContent = state.userCoords && spot.distanceText ? `${spot.sido} · ${spot.distanceText}` : `${spot.sido} ${district(spot)}`;
      card.append(thumb, name, place);
      strip.appendChild(card);
    });
  }

  function renderHome() { renderHero(); renderStrip(); }

  // ---------- 아래에서 올라오는 창·메뉴 공통 ----------
  function setOpen(overlay, open) {
    if (!overlay) return;
    overlay.classList.toggle('open', open);
    if (open) overlay.removeAttribute('inert'); else overlay.setAttribute('inert', '');
    document.querySelectorAll('[data-open-drawer]').forEach(button => button.setAttribute('aria-expanded', drawer && drawer.classList.contains('open') ? 'true' : 'false'));
  }
  // 창을 닫은 뒤(뒤로가기 기록이 정리된 뒤) 다음 동작을 한다.
  function closeThen(overlay, action) {
    if (!overlay || !overlay.classList.contains('open')) { action(); return; }
    let done = false;
    const run = () => { if (done) return; done = true; global.removeEventListener('popstate', run); global.setTimeout(action, 0); };
    global.addEventListener('popstate', run);
    setOpen(overlay, false);
    global.setTimeout(run, 350);
  }
  function go(hash) { if (global.Screens) global.Screens.navigate(hash); else global.location.hash = hash; }

  function openDrawer(trigger) {
    setOpen(drawer, true);
    drawer.__trigger = trigger || null;
    const panel = drawer.querySelector('.app-drawer-panel'); if (panel) global.setTimeout(() => panel.focus(), 30);
  }
  function closeDrawer() { setOpen(drawer, false); if (drawer.__trigger) drawer.__trigger.focus(); }

  function openInfo(key) {
    const info = INFO[key]; if (!info || !infoSheet) return;
    infoSheet.querySelector('#info-sheet-title').textContent = info.title;
    infoSheet.querySelector('#info-sheet-body').innerHTML = info.html;
    setOpen(infoSheet, true);
  }

  // ---------- + 사진 올리기 ----------
  function renderAddList() {
    const state = app(); const list = document.getElementById('add-sheet-list'); if (!state || !list) return;
    const located = Boolean(state.userCoords);
    let spots = state.spots.slice();
    if (located) spots.sort((a, b) => (Number.isFinite(a.distanceMeters) ? a.distanceMeters : Infinity) - (Number.isFinite(b.distanceMeters) ? b.distanceMeters : Infinity));
    else spots.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
    list.replaceChildren();
    spots.forEach((spot, index) => {
      const item = document.createElement('button'); item.type = 'button'; item.className = 'add-sheet-item';
      const nearest = located && index === 0 && Number.isFinite(spot.distanceMeters);
      if (nearest) item.classList.add('is-nearest');
      item.innerHTML = '<span class="add-sheet-item-text"><span class="add-sheet-item-name"></span><span class="add-sheet-item-place"></span></span><span class="add-sheet-item-meta"></span>';
      item.querySelector('.add-sheet-item-name').textContent = spot.name;
      item.querySelector('.add-sheet-item-place').textContent = spot.address || '';
      item.querySelector('.add-sheet-item-meta').textContent = nearest ? `가장 가까워요 · ${spot.distanceText || ''}` : (located && spot.distanceText ? spot.distanceText : '');
      item.addEventListener('click', () => closeThen(addSheet, () => {
        if (global.Screens) global.Screens.navigateSpot(spot.id);
        global.setTimeout(() => { if (global.App && global.App.openUploadModal) global.App.openUploadModal(); }, 200);
      }));
      list.appendChild(item);
    });
    const locate = document.getElementById('add-sheet-locate'); if (locate) locate.hidden = located;
  }
  function openAdd() { renderAddList(); setOpen(addSheet, true); }

  // ---------- 탭 막대 ----------
  function syncTabbar() {
    if (!tabbar) return;
    const hash = global.location.hash || '#/';
    let tab = null;
    if (hash === '#/' || hash === '#') tab = 'home';
    else if (hash === '#/spots') tab = 'spots';
    else if (hash === '#/me' || hash === '#/my-photos') tab = 'me';
    else if (hash === '#/saved') tab = 'saved';
    const show = tab !== null;
    tabbar.hidden = !show;
    document.body.classList.toggle('has-tabbar', show);
    tabbar.querySelectorAll('[data-tab]').forEach(item => { if (item.dataset.tab === tab) item.setAttribute('aria-current', 'page'); else item.removeAttribute('aria-current'); });
  }

  function syncAuth(user) {
    loggedIn = Boolean(user);
    const label = document.querySelector('[data-drawer-login-label]'); if (label) label.textContent = loggedIn ? '로그아웃' : '로그인';
    const hint = document.querySelector('.home-auth-login-hint'); if (hint) hint.hidden = loggedIn;
  }

  // 위치: 처음에는 버튼으로 묻고, 한 번 허용했으면 다음 접속부터 자동으로 확인
  async function locationPermission() {
    try { if (navigator.permissions && navigator.permissions.query) return (await navigator.permissions.query({ name: 'geolocation' })).state; } catch (error) { /* 지원하지 않는 브라우저 */ }
    return 'unknown';
  }
  function syncNearbyCard(permission) {
    const card = document.getElementById('home-nearby'); if (!card) return;
    const state = app();
    card.hidden = Boolean(state && state.userCoords);
    const sub = document.getElementById('home-nearby-sub');
    if (sub) sub.textContent = permission === 'denied' ? '위치 권한이 꺼져 있어요. 휴대폰 설정에서 이 사이트의 위치를 허용해 주세요' : '위치를 한 번 허용하면 다음부터 가까운 순으로 보여 드려요';
  }
  async function locateAndSort(showError) {
    if (!global.App || !global.App.requestUserLocation) return false;
    const ok = await global.App.requestUserLocation(showError);
    if (ok && global.Screens && global.Screens.setSort) global.Screens.setSort('nearest');
    renderHome(); syncNearbyCard(await locationPermission());
    return ok;
  }
  async function initLocation() {
    const permission = await locationPermission();
    syncNearbyCard(permission);
    if (permission === 'granted') locateAndSort(false);
    const button = document.getElementById('btn-home-nearby');
    if (button) button.addEventListener('click', async () => {
      const sub = document.getElementById('home-nearby-sub'); if (sub) sub.textContent = '위치 확인 중…';
      const ok = await locateAndSort(false);
      if (!ok && sub) sub.textContent = (await locationPermission()) === 'denied' ? '위치 권한이 꺼져 있어요. 휴대폰 설정에서 이 사이트의 위치를 허용해 주세요' : '위치를 확인하지 못했어요. 다시 눌러 주세요';
    });
  }

  function init() {
    [drawer, infoSheet, addSheet].forEach(overlay => overlay && overlay.setAttribute('inert', ''));
    document.addEventListener('click', event => {
      const target = event.target;
      const openDrawerButton = target.closest('[data-open-drawer]'); if (openDrawerButton) { openDrawer(openDrawerButton); return; }
      if (target.closest('[data-close-drawer]') || target === drawer) { closeDrawer(); return; }
      if (target.closest('[data-close-info]') || target === infoSheet) { setOpen(infoSheet, false); return; }
      if (target.closest('[data-close-add]') || target === addSheet) { setOpen(addSheet, false); return; }
      if (target.closest('[data-open-add]')) { openAdd(); return; }
      const info = target.closest('[data-info]'); if (info) { event.preventDefault(); const key = info.dataset.info; if (drawer.contains(info)) closeThen(drawer, () => openInfo(key)); else openInfo(key); return; }
      const drawerLink = target.closest('.app-drawer a[href^="#/"]');
      if (drawerLink) {
        event.preventDefault();
        const hash = drawerLink.getAttribute('href');
        closeThen(drawer, async () => {
          if (drawerLink.hasAttribute('data-needs-login') && !loggedIn && global.OurAuth) { const user = await global.OurAuth.requireLogin(); if (!user) return; }
          go(hash);
        });
        return;
      }
      if (target.closest('[data-drawer-login]')) {
        closeThen(drawer, async () => { if (!global.OurAuth) return; if (loggedIn) { try { await global.OurAuth.signOut(); } catch (error) { console.error(error); } } else global.OurAuth.requireLogin(); });
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      if (drawer.classList.contains('open')) closeDrawer();
      else if (infoSheet.classList.contains('open')) setOpen(infoSheet, false);
      else if (addSheet.classList.contains('open')) setOpen(addSheet, false);
    });
    const locate = document.getElementById('add-sheet-locate');
    if (locate) locate.addEventListener('click', async () => {
      locate.disabled = true; locate.textContent = '위치 확인 중…';
      const ok = global.App && global.App.requestUserLocation ? await global.App.requestUserLocation(false) : false;
      locate.disabled = false; locate.textContent = ok ? '내 위치로 가까운 명소 찾기' : '위치를 확인하지 못했어요. 다시 누르기';
      renderAddList();
    });
    const local = document.getElementById('add-sheet-local');
    if (local) local.addEventListener('click', () => closeThen(addSheet, () => { go('#/local'); global.setTimeout(() => global.FreeUpload && global.FreeUpload.open && global.FreeUpload.open(), 200); }));

    global.addEventListener('spotstatechange', () => { renderHome(); if (addSheet.classList.contains('open')) renderAddList(); });
    global.addEventListener('hashchange', syncTabbar);
    global.addEventListener('popstate', syncTabbar);
    global.addEventListener('authchange', event => syncAuth(event.detail && event.detail.user));
    if (global.OurAuth) global.OurAuth.getUser().then(syncAuth).catch(() => {});
    syncTabbar(); renderHome(); initLocation();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})(globalThis);
