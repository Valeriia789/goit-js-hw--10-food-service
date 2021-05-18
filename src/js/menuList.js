import menu from '../menu.json';
import menuTemplate from '../templates/menu.hbs';

const menuList = document.querySelector('.js-menu');

const menuData = {
  menu: menu,
};

const menuHTML = menuTemplate(menuData);

menuList.innerHTML = menuHTML;
