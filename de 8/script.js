const form = document.getElementById('searchForm');
const input = document.getElementById('keyword');
const notice = document.getElementById('notice');
const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');

function message(text){
  notice.textContent = text;
  notice.classList.add('show');
  clearTimeout(message.timer);
  message.timer = setTimeout(()=>notice.classList.remove('show'),3500);
}
form.addEventListener('submit', event=>{
  event.preventDefault();
  const value = input.value.trim();
  if(!value){
    message('Vui lòng nhập từ khóa cần tìm.');
    input.focus();
    return;
  }
  const items = [...document.querySelectorAll('.news-copy h2, .news-copy p')];
  const found = items.some(item=>item.textContent.toLocaleLowerCase('vi').includes(value.toLocaleLowerCase('vi')));
  message(found ? `Đã tìm thấy tin liên quan đến “${value}”.` : `Không tìm thấy tin phù hợp với “${value}”.`);
});
toggle.addEventListener('click',()=>{
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded',String(open));
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
