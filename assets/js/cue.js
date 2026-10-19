// "Call one yourself" on the home page: STANDBY arms GO; GO crosses off the
// running item, starts the next one and runs its countdown.
(function () {
  var root = document.querySelector('[data-cue-demo]');
  if (!root) return;
  function q(s) { return root.querySelector(s); }
  var lis = [].slice.call(root.querySelectorAll('[data-list] li')), i = 0, t, timer = null;
  var scr = q('[data-scr]'), st = q('[data-st]'), it = q('[data-it]'), ct = q('[data-ct]'), nx = q('[data-nx]'), hint = q('[data-hint]');
  var bsb = q('[data-sb]'), bgo = q('[data-go]'), bcl = q('[data-cl]');
  function fmt(s) { return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }
  function show() { it.textContent = lis[i].textContent; nx.textContent = lis[(i + 1) % lis.length].textContent; ct.textContent = fmt(t); }
  function set(s, label) { scr.dataset.s = s; st.textContent = label; }
  t = +lis[0].dataset.len; show();
  bsb.addEventListener('click', function () { set('standby', 'STANDBY'); bgo.disabled = false; hint.textContent = 'now… go'; });
  bgo.addEventListener('click', function () {
    set('go', 'GO'); bgo.disabled = true; hint.textContent = 'crossed off. standby the next one';
    clearInterval(timer);
    lis[i].classList.remove('now'); lis[i].classList.add('done');
    i = (i + 1) % lis.length;
    if (i === 0) lis.forEach(function (l) { l.classList.remove('done'); });
    lis[i].classList.add('now'); t = +lis[i].dataset.len; show();
    timer = setInterval(function () { if (t > 0) { t--; ct.textContent = fmt(t); } }, 1000);
  });
  bcl.addEventListener('click', function () { set('off', 'CLEAR'); bgo.disabled = true; hint.textContent = 'start with standby'; });
})();
