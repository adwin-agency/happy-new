"use strict"
const initFunctions = () => {
<<<<<<< HEAD
	// contacts code ==START==
	map();
	accordion();
	// contacts code ==END==

	// Video
	videoPlayerHandler();
};
// Yandex Cards ==START==
const map = () => {
	ymaps.ready(init);

	function init() {
		const myMap = new ymaps.Map("map", {
			center: [59.9386, 30.3141],
			zoom: 10,
			controls: []
		});
	};
=======
    // contacts code ==START==
    map();
    accordion();
    // contacts code ==END==

    // Video
    videoPlayerHandler();
};
// Yandex Cards ==START==
const map = () => {
    ymaps.ready(init);

    function init() {
        const myMap = new ymaps.Map("map", {
            center: [59.9386, 30.3141],
            zoom: 10,
            controls: []
        });
    };
>>>>>>> main
};
// Yandex Cards ==END==

// Accordion ==START==
const accordion = () => {
<<<<<<< HEAD
	const accordions = document.querySelectorAll('.accordion');

	if (accordions) {
		accordions.forEach((accordion) => {
			accordion.addEventListener('click', showAccElement)
		});
	};

	function showAccElement() {
		const accItem = this.querySelector('.accordion__item');
		if (accItem) {
			accItem.hasChildNodes() ? this.classList.toggle('_show') : console.log('There is no content in the accordion');
			accItem.style.maxHeight ? accItem.style.maxHeight = null : accItem.style.maxHeight = accItem.scrollHeight + "px";
		} else return
	};
=======
    const accordions = document.querySelectorAll('.accordion');

    if (accordions) {
        accordions.forEach((accordion) => {
            accordion.addEventListener('click', showAccElement)
        });
    };

    function showAccElement() {
        const accItem = this.querySelector('.accordion__item');
        if (accItem) {
            accItem.hasChildNodes() ? this.classList.toggle('_show') : console.log('There is no content in the accordion');
            accItem.style.maxHeight ? accItem.style.maxHeight = null : accItem.style.maxHeight = accItem.scrollHeight + "px";
        } else return
    };
>>>>>>> main
};
// Accordion ==END==


// Swiper-video-reviews ==START==

const videoPlayerHandler = () => {
<<<<<<< HEAD
	const element = document.querySelector('.video-reviews');
	const cards = document.querySelectorAll('.video-reviews__item');

	if (element || cards) {
		if (element) {
			document.addEventListener('scroll', onScroll);
		} else {
			videoPlayer();
		}
		function onScroll() {
			const elementTop = element.getBoundingClientRect().top;
			const distanceTostartLoading = 100;

			if (elementTop < window.innerHeight + distanceTostartLoading) {
				element.classList.add('_active');
				swiperVideo();
				videoPlayer();
				document.removeEventListener('scroll', onScroll);
			}
		}

	} else return
}

const swiperVideo = () => {
	const swiper = new Swiper('.video-reviews__container', {
		pagination: {
			el: ".video-reviews__pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".video-reviews__button_next",
			prevEl: ".video-reviews__button_previous",
		},
		observer: true,
		slidesPerView: 4,
		spaceBetween: 10,
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			200: {
				slidesPerView: 1.1,
				slidesPerGroup: 1,
				spaceBetween: 20,
				slideToClickedSlide: true,
			},
			// when window width is >= 450px
			450: {
				slidesPerView: 1.3,
				slidesPerGroup: 1,
				spaceBetween: 20
			},
			// when window width is >= 640px
			540: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 30,
				slideToClickedSlide: false,
			},
			// when window width is >= 940px
			940: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 40,
			},
			// when window width is >= 1440px
			1440: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 60
			}
		}
	});
=======
    const element = document.querySelector('.video-reviews');
    if (element) {
        document.addEventListener('scroll', onScroll);

        function onScroll() {
            const elementTop = element.getBoundingClientRect().top;
            const distanceTostartLoading = 100;

            if (elementTop < window.innerHeight + distanceTostartLoading) {
                element.classList.add('_active');
                swiperVideo();
                videoPlayer();
                document.removeEventListener('scroll', onScroll);
            }
        }
    }
}

const swiperVideo = () => {
    const swiper = new Swiper('.video-reviews__container', {
        pagination: {
            el: ".video-reviews__pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".video-reviews__button_next",
            prevEl: ".video-reviews__button_previous",
        },
        observer: true,
        slidesPerView: 4,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            200: {
                slidesPerView: 1.1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                slideToClickedSlide: true,
            },
            // when window width is >= 450px
            450: {
                slidesPerView: 1.3,
                slidesPerGroup: 1,
                spaceBetween: 20
            },
            // when window width is >= 640px
            540: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
                slideToClickedSlide: false,
            },
            // when window width is >= 940px
            940: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 40,
            },
            // when window width is >= 1440px
            1440: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 60
            }
        }
    });
>>>>>>> main
};
// Swiper-video-reviews ==END==

// Video-container ==START==
const videoPlayer = () => {
<<<<<<< HEAD
	const cards = document.querySelectorAll('.video-reviews__item');
	const slider = document.querySelector('.video-reviews');
	if (cards) {
		lazyVideo()
		// Массив для новых карт с id
		const newCardsWithId = [].map.call(cards, (card) => {
			// Main card
			const cardBlock = card.querySelector('.video-reviews__block');
			// Video
			const video = card.querySelector('.video-reviews__video');

			// Progress constants
			const progressBar = card.querySelector('.video-reviews__progress-bar');

			// Делаем уникальной каждую карточку
			cardBlock.setAttribute('data-id', '_' + Math.random().toString(36).substr(2, 9));
			// Start ProgressBar
			if (progressBar) {
				const progress = progressBar.querySelector('.video-reviews__progress');
				// Обновляем полузнок
				const updateProgressBar = () => {
					let percentage = Math.floor((100 / video.duration) * video.currentTime);
					progress.style.cssText = `width: ${percentage}%`;
				}
				// Слушатели
				video.addEventListener('timeupdate', updateProgressBar, false);
			}
			// End ProgressBar

			// Управляем активностью видео
			function classSettings() {
				if (video.play && cardBlock.classList.contains('_active')) {
					video.pause()
					cardBlock.classList.remove('_active', '_accent');
					video.muted = true;
				} else {
					video.play();
					cardBlock.classList.add('_active');
					// Проверяем наличие слайдера т.к у нас есть отдельный компонент карточки и на него не нужен фокусра
					slider ? cardBlock.classList.add('_accent') : '';
					video.muted = false;
					// Отправляем id карточки на сравнение
					checkingPlayingOneVideo(cardBlock.getAttribute('data-id'), video)
				}
			}

			cardBlock.addEventListener('click', classSettings);

			return cardBlock
		})

		// Принимает id карты и проверяет на совпадение, оставляя активной только 1 карточку
		function checkingPlayingOneVideo(id) {
			newCardsWithId.forEach((card) => {
				const video = card.querySelector('.video-reviews__video');

				const currentId = card.getAttribute('data-id');
				const incomingId = id;

				if (currentId !== incomingId) {
					card.classList.remove('_active', '_accent');
					video.muted = true;
				} else return
			})
		}
		// Lazy-loading
		// Для работы:
		// 1. Поместить ссылку в теге "source" в data-src="ссылка"
		// 2. Тегу video добавить класс "lazy-video"
		function lazyVideo() {
			const lazyLoadVideos = [].slice.call(document.querySelectorAll("video.lazy-video"));
			if ("IntersectionObserver" in window) {
				const lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
					entries.forEach(function (video) {
						if (video.isIntersecting) {
							for (let source in video.target.children) {
								let videoSource = video.target.children[source];
								if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
									videoSource.src = videoSource.dataset.src;
									videoSource.removeAttribute('data-src');

									// Если возникает ошибка в пути видео и оно не может быть загруженно удаляем его.
									videoSource.onerror = function () {
										console.log(`Error loading  ${this.src} this element has been removed`);
										this.closest('.video-reviews__item').remove();
									};
								}
							}
							video.target.load();
							video.target.classList.remove("lazy-video");
							// Ждем загрузки первого кадра видео.
							video.target.onloadeddata = function () {
								getSiblings(video.target)
								// Добавляем класс на главный блок информируя о успешном начале загрузки видео
								// класс позволяет начать взаимодействовать с карточкой
								video.target.closest('.video-reviews__item').classList.add('_uploaded');
							};
							// Находим preloader и выключаем его, добовляя класс "_inactive"
							function getSiblings(elem) {
								let sibling = elem;
								while (sibling.previousSibling) {
									sibling = sibling.previousSibling;
									if (sibling.nodeType == 1 && sibling.classList.contains('video-reviews__preloader')) {
										sibling.classList.add('_inactive')
									};
								}
								sibling = elem;
								while (sibling.nextSibling) {
									sibling = sibling.nextSibling;
									if (sibling.nodeType == 1 && sibling.classList.contains('video-reviews__preloader')) {
										sibling.classList.add('_inactive')
									};
								}
							}
							lazyVideoObserver.unobserve(video.target);
						}
					});
				});
				lazyLoadVideos.forEach(function (lazyVideo) {
					lazyVideoObserver.observe(lazyVideo);
				});
			}
		}

	}
=======
    const cards = document.querySelectorAll('.video-reviews__item');
    if (cards) {
        lazyVideo()
        // Массив для новых карт с id
        const newCardsWithId = [].map.call(cards, (card) => {
            // Main card
            const cardBlock = card.querySelector('.video-reviews__block');
            // Video
            const video = card.querySelector('.video-reviews__video');

            // Progress constants
            const progressBar = card.querySelector('.video-reviews__progress-bar');

            // Делаем уникальной каждую карточку
            cardBlock.setAttribute('data-id', '_' + Math.random().toString(36).substr(2, 9));
            // Start ProgressBar
            if (progressBar) {
                const progress = progressBar.querySelector('.video-reviews__progress');
                // Обновляем полузнок
                const updateProgressBar = () => {
                    let percentage = Math.floor((100 / video.duration) * video.currentTime);
                    progress.style.cssText = `width: ${percentage}%`;
                }
                // Слушатели
                video.addEventListener('timeupdate', updateProgressBar, false);
            }
            // End ProgressBar

            // Управляем активностью видео
            function classSettings() {
                if (video.play && cardBlock.classList.contains('_active')) {
                    video.pause()
                    cardBlock.classList.remove('_active');
                    video.muted = true;
                } else {
                    video.play()
                    cardBlock.classList.add('_active');
                    video.muted = false;
                    // Отправляем id карточки на сравнение
                    checkingPlayingOneVideo(cardBlock.getAttribute('data-id'))
                }
            }

            cardBlock.addEventListener('click', classSettings);

            return cardBlock
        })

        // Принимает id карты и проверяет на совпадение, оставляя активной только 1 карточку
        function checkingPlayingOneVideo(id) {
            newCardsWithId.forEach((card) => {
                const video = card.querySelector('.video-reviews__video');

                const currentId = card.getAttribute('data-id');
                const incomingId = id;

                if (currentId !== incomingId) {
                    card.classList.remove('_active');
                    video.muted = true;
                } else return
            })
        }
        // Lazy-loading
        // Для работы:
        // 1. Поместить ссылку в теге "source" в data-src="ссылка"
        // 2. Тегу video добавить класс "lazy-video"
        function lazyVideo() {
            const lazyLoadVideos = [].slice.call(document.querySelectorAll("video.lazy-video"));
            if ("IntersectionObserver" in window) {
                const lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (video) {
                        if (video.isIntersecting) {
                            for (let source in video.target.children) {
                                let videoSource = video.target.children[source];
                                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                                    videoSource.src = videoSource.dataset.src;
                                    videoSource.removeAttribute('data-src');

                                    // Если возникает ошибка в пути видео и оно не может быть загруженно удаляем его.
                                    videoSource.onerror = function () {
                                        console.log(`Error loading  ${this.src} this element has been removed`);
                                        this.closest('.video-reviews__item').remove();
                                    };
                                }
                            }
                            video.target.load();
                            video.target.classList.remove("lazy-video");
                            // Ждем загрузки первого кадра видео.
                            video.target.onloadeddata = function () {
                                getSiblings(video.target)
                                // Добавляем класс на главный блок информируя о успешном начале загрузки видео
                                // класс позволяет начать взаимодействовать с карточкой
                                video.target.closest('.video-reviews__item').classList.add('_uploaded');
                            };
                            // Находим preloader и выключаем его, добовляя класс "_inactive"
                            function getSiblings(elem) {
                                let sibling = elem;
                                while (sibling.previousSibling) {
                                    sibling = sibling.previousSibling;
                                    if (sibling.nodeType == 1 && sibling.classList.contains('video-reviews__preloader')) {
                                        sibling.classList.add('_inactive')
                                    };
                                }
                                sibling = elem;
                                while (sibling.nextSibling) {
                                    sibling = sibling.nextSibling;
                                    if (sibling.nodeType == 1 && sibling.classList.contains('video-reviews__preloader')) {
                                        sibling.classList.add('_inactive')
                                    };
                                }
                            }
                            lazyVideoObserver.unobserve(video.target);
                        }
                    });
                });
                lazyLoadVideos.forEach(function (lazyVideo) {
                    lazyVideoObserver.observe(lazyVideo);
                });
            }
        }

    }
>>>>>>> main
}
// Video-container ==END==


document.addEventListener("DOMContentLoaded", initFunctions);