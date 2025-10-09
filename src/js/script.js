$(document).ready(function() {
    window.addEventListener('DOMContentLoaded', () => {
        const list = document.querySelector('.list'),
        listItem = document.querySelectorAll('.list_item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          list.classList.toggle('list_active');
        });
    
        listItem.forEach(item => {
          item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            list.classList.toggle('list_active');
          })
        })
      });

    $('ul.menu_tabs').on('click', 'li:not(.menu_tab_active)', function() {
        $(this)
          .addClass('menu_tab_active').siblings().removeClass('menu_tab_active')
    });

    new WOW().init();
});