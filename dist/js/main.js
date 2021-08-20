const selectHandler = () => {
    const sel = document.querySelectorAll('.select__wrapper');
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.select__wrapper')) {
            const selectWrapper = e.target.closest('.select__wrapper');
            const select = selectWrapper.querySelector('.select__element');
            const selectCurrent = selectWrapper.querySelector('.select__current-text');
            selectWrapper.classList.toggle('active');

            if (e.target.closest('.select__item')) {
                const selectItem = e.target.closest('.select__item');
                select.value = selectItem.innerHTML;
                selectCurrent.innerHTML = selectItem.innerHTML;
            }
        }
        else {
            sel.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

}

const burgerHandler = () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const city = document.querySelector('.header__city');
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
            city.classList.toggle('active');
            if (burger.classList.contains('active')) {
                scrollShowHide('hide');
            }
            else {
                scrollShowHide('show');
            }


        });
    }
    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('.header__burger') && !e.target.closest('.header__nav') && !e.target.closest('.header__city')) {
            burger.classList.remove('active');
            nav.classList.remove('active');
            city.classList.remove('active');
            scrollShowHide('show');
        }
    });
}
const dropdownMobile = () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.header__dropdown-open-mobile')) {
            const mobileDropBtn = e.target.closest('.header__dropdown-open-mobile');
            const navItem = e.target.closest('.header__nav-item_with-child');

            navItem.classList.toggle('active');

        };
    });
}

const menuFix = () => {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    if (main) {
        main.style.marginTop = header.offsetHeight + 'px';
        let flag = 0;
        document.addEventListener('scroll', () => {
            if (window.innerWidth <= 960) {
                if (flag < pageYOffset && pageYOffset >= header.offsetHeight) {
                    flag = pageYOffset;
                    header.classList.remove('fixed');
                    return 'bottom';
                }
                else {
                    flag = pageYOffset;
                    header.classList.add('fixed');
                    return 'top';
                }
            }
        });

        window.addEventListener('resize', () => {
            main.style.marginTop = header.offsetHeight + 'px';
        });
    }
}

const scrollShowHide = (param) => {
    const body = document.body;
    const header = document.querySelector('.header');
    if (param == 'hide') {
        body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
        header.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
        body.classList.add('hidescroll');
    }
    else if (param == 'show') {
        body.style.paddingRight = 0 + 'px';
        header.style.paddingRight = 0 + 'px';
        body.classList.remove('hidescroll');
    }

}

const stickyMain = () => {
    const sticky = document.querySelector('.main-cat__caption');


    if (sticky) {
        if (window.innerWidth > 768) {
            const header = document.querySelector('.header');
            sticky.style.top = header.offsetHeight + 'px';



            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    sticky.style.top = header.offsetHeight + 'px';
                }
                else {
                    sticky.style.top = '0px';
                }
            });
        }
    }
}



document.addEventListener('DOMContentLoaded', () => {
    selectHandler();
    burgerHandler();
    dropdownMobile();
    menuFix();
    scrollShowHide();
    stickyMain();
});