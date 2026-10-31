// 닉네임은 계정에 한 번 저장하고, 사진 올리는 창에서는 자동으로 채웁니다.
// 닉네임이 없는 예전 계정만 올리는 창에 닉네임 칸이 보이고, 처음 올릴 때 계정에 저장됩니다.
(function (global) {
  'use strict';

  let currentUser = null;

  function auth() { return global.OurAuth || null; }
  function nicknameOf(user) { return auth() && user ? auth().getNickname(user) : ''; }

  function syncGroups() {
    const nickname = nicknameOf(currentUser);
    document.querySelectorAll('[data-nickname-group]').forEach(group => {
      const input = group.querySelector('input');
      if (nickname) {
        if (input) input.value = nickname;
        group.hidden = true;
      } else {
        group.hidden = false;
        if (input) input.placeholder = '처음 한 번만 입력하면 다음부터 자동으로 들어가요';
      }
    });
  }

  function syncProfileForm() {
    const form = document.getElementById('me-nickname-form');
    if (!form) return;
    form.hidden = !currentUser;
    const input = document.getElementById('me-nickname-input');
    if (input && document.activeElement !== input) input.value = nicknameOf(currentUser);
  }

  function sync() { syncGroups(); syncProfileForm(); }

  // 올리기 버튼을 누르는 순간: 저장된 닉네임을 채우고, 없으면 입력한 닉네임을 계정에 저장
  document.addEventListener('submit', event => {
    const form = event.target;
    const group = form && form.querySelector && form.querySelector('[data-nickname-group]');
    if (!group) return;
    const input = group.querySelector('input');
    const saved = nicknameOf(currentUser);
    if (saved) { if (input) input.value = saved; return; }
    const typed = input ? input.value.trim() : '';
    const length = Array.from(typed).length;
    if (currentUser && length >= 1 && length <= 20 && auth()) {
      auth().setNickname(typed).catch(error => console.error('닉네임을 저장하지 못했습니다.', error));
    }
  }, true);

  function setupProfileForm() {
    const form = document.getElementById('me-nickname-form');
    if (!form) return;
    const input = document.getElementById('me-nickname-input');
    const status = document.getElementById('me-nickname-status');
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!auth()) return;
      const button = form.querySelector('button[type="submit"]');
      if (button) button.disabled = true;
      if (status) status.textContent = '';
      try {
        await auth().setNickname(input ? input.value : '');
        if (status) status.textContent = '저장했어요.';
      } catch (error) {
        if (status) status.textContent = error && error.message && /닉네임/.test(error.message) ? error.message : '저장하지 못했어요. 잠시 후 다시 시도해 주세요.';
      } finally {
        if (button) button.disabled = false;
      }
    });
  }

  function init() {
    setupProfileForm();
    global.addEventListener('authchange', event => { currentUser = event.detail && event.detail.user || null; sync(); });
    if (auth()) auth().getUser().then(user => { currentUser = user || null; sync(); }).catch(() => {});
    // 우리 동네 기록 올리기 창은 처음 열 때 만들어지므로, 생기면 다시 맞춤
    if (global.MutationObserver) new MutationObserver(records => {
      if (records.some(record => Array.from(record.addedNodes).some(node => node.nodeType === 1 && (node.matches && node.matches('[data-nickname-group]') || node.querySelector && node.querySelector('[data-nickname-group]'))))) syncGroups();
    }).observe(document.body, { childList: true, subtree: true });
    sync();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})(globalThis);
