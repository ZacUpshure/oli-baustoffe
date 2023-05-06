const nav_toggle = document.querySelector('.nav_toggle') as HTMLElement;
const nav_toggle_icon = document.querySelector('.nav_toggle ion-icon') as HTMLElement;
const nav_menu = document.querySelector('.nav_menu') as HTMLElement;

nav_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_toggle_icon.setAttribute('name',
    nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
  );
});
