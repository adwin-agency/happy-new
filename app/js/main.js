const selectHandler = () => {
    const sel = document.querySelectorAll('.select__wrapper');
    if (sel.length > 0) {


        document.body.addEventListener('click', (e) => {
            if (e.target.closest('.select__wrapper')) {
                const selectWrapper = e.target.closest('.select__wrapper');
                const select = selectWrapper.querySelector('.select__element');
                const selectCurrent = selectWrapper.querySelector('.select__current-text');
                sel.forEach(item => {
                    if (item != e.target.closest('.select__wrapper')) {
                        item.classList.remove('active');
                    }

                });
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

        sel.forEach(item => {
            const selectCurrent = item.querySelector('.select__current-text');
            const selected = item.querySelector('.selected');

            if (selected) {
                selectCurrent.innerHTML = selected.innerHTML;
            }
        });


    }


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
/*change-city*/

const changeCityDesc = () => {
    let cityBtn = document.querySelector('.header__city-desc-current');
    let cityPopup = document.querySelector('.header__city-desc-popup');
    let popupBtn = document.querySelector('.header__city-desc-btn');

    if (cityBtn) {
        cityBtn.addEventListener('click', () => {
            cityPopup.classList.toggle('active');
        });
        popupBtn.addEventListener('click', () => {
            cityPopup.classList.remove('active');
        });
    }
}
/*sliders*/

const catalogSlider = () => {
    const swiperCatalog = new Swiper('.kitchen-small__slider_js', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const swiperCatalogBig = new Swiper('.kitchen-big__slider_js', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


/*popup handler*/

const popupOpen = () => {
    const popupOpen = document.querySelectorAll('.popup-open');
    const popupWrappers = document.querySelectorAll('.popup__wrapper');

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.popup-open')) {
            const popup = e.target.closest('.popup-open').getAttribute('data-target');

            popupWrappers.forEach(item => {
                if (item.getAttribute('data-target') == popup) {
                    item.classList.add('active');
                    scrollShowHide('hide');
                }
            });
        }
    });
}

const popupClose = () => {
    const popupWrappers = document.querySelectorAll('.popup__wrapper');

    popupWrappers.forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__content') || e.target.closest('.popup__close')) {
                e.target.closest('.popup__wrapper').classList.remove('active');
                scrollShowHide('show');
            }
        });
    });

}


/*mask*/
function phoneMask(e) {
    let val = e.target.value.replace(/\D/g, '')

    if (val) {
        if (val[0] === '7' || val[0] === '8') {
            val = val.slice(1)
        }

        val = val.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
        val = '+7' + (val[2] ? '(' + val[1] + ')' + val[2] : val[1] ? val[1] : '') + (val[3] ? '-' + val[3] : '') + (val[4] ? '-' + val[4] : '')
    }

    e.target.value = val
}

function inputTelHandler() {
    const tel = document.querySelectorAll('input[type="tel"]');
    if (tel.length > 0) {
        tel.forEach(item => {
            item.addEventListener('input', phoneMask)
        });
    }
}

/*!mask*/


/*horisontal scroll test*/

const horScroll = () => {


    window.addEventListener('mousewheel', scrollHandler, false);


    const scrollBlock = document.querySelector('.scroll-block');
    const scrollInner = document.querySelector('.scroll-content');

    let flag = false;

    function scrollHandler(e) {

        const coords = scrollBlock.getBoundingClientRect();
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;


        let cond1 = e.deltaY > 0;
        let cond2 = scrollTop + window.innerHeight >= Math.round(coords.bottom + pageYOffset - 400);
        let cond3 = scrollBlock.scrollLeft + 17 < scrollInner.offsetWidth - document.documentElement.offsetWidth;
        let condX = scrollTop + window.innerHeight <= Math.round(coords.bottom + pageYOffset + 400);

        let cond4 = e.deltaY < 0;
        let cond5 = scrollTop + window.innerHeight <= Math.round(coords.bottom + pageYOffset + 400);
        let cond6 = scrollBlock.scrollLeft > 0;
        let condY = scrollTop + window.innerHeight >= Math.round(coords.bottom + pageYOffset - 400);

        if (cond1 && cond2 && cond3 && condX) {
            window.scrollTo({
                top: coords.bottom + scrollTop - window.innerHeight,
                behavior: "smooth"
            });
            scrollShowHide('hide');
            flag = true;
        }
        else if (cond4 && cond5 && cond6 && condY) {
            window.scrollTo({
                top: coords.bottom + scrollTop - window.innerHeight,
                behavior: "smooth"
            });
            scrollShowHide('hide');
            flag = true;

        }
        else if (flag) {
            flag = false;
            scrollShowHide('show');
        }


        if (flag) {

            scrollBlock.scrollLeft = scrollBlock.scrollLeft + e.deltaY / 2;

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
    catalogSlider();
    changeCityDesc();
    popupOpen();
    popupClose();
    inputTelHandler();
    horScroll();
});