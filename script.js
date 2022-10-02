function show(id) {
  document.getElementById(id).style.display = 'block';
}
function hide(id) {
  document.getElementById(id).style.display = 'none';
}

const searchBox = document.getElementById("search-input");
const btn = document.getElementById("search-toggle");
btn.addEventListener('click', function handleClick() {
  event.preventDefault();
  if (searchBox.style.display === 'none') {
    searchBox.style.display = 'block';
  } else {
    searchBox.style.display = 'none';
  }
});


const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav6 = document.getElementById('nav-6');

const navItems = [nav1, nav2, nav3, nav4, nav5, nav6];

function navAnimation(dir1, dir2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${dir1}-${i+1}`, `slide-${dir2}-${i+1}`)
  })
}

function toggleNav() {
  //Toggle - Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  //Toggle - Menu Active animation
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left','overlay-slide-right')
    navAnimation('out', 'in')
  } else {
    overlay.classList.replace('overlay-slide-right','overlay-slide-left')
    navAnimation('in', 'out')
  }
}

//Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
})