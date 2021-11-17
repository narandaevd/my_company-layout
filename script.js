'use strict'

/// Плавная прокрутка страницы к блоку меню

const menu = document.querySelector('.header').querySelector('ul'),
      listItems = menu.querySelectorAll('a'),
      listItemsArr = [];

for (let listItem of listItems) {
    listItem.addEventListener('click', (e) => {
        e.preventDefault();
        for (let listItem2 of listItems) {
            listItem2.classList.remove('selected');
        }
        e.target.classList.add('selected')

        if (listItem.innerHTML == 'HOME') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (listItem.innerHTML == 'ABOUT')  {
            window.scrollTo({ top: 811, behavior: 'smooth' });
        } else if (listItem.innerHTML == 'SERVICES')  {
            window.scrollTo({ top: 2240, behavior: 'smooth' });
        } else if (listItem.innerHTML == 'PORTFOLIO')  {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (listItem.innerHTML == 'TESTIMONIALS')  {
            window.scrollTo({ top: 4981, behavior: 'smooth' });
        } else if (listItem.innerHTML == 'CONTACT')  {
            window.scrollTo({ top: 5511, behavior: 'smooth' });
        }
    })
}
