const initFunctions = ()=> {
    map();
    accordion();
}
const map = () => {
    ymaps.ready(init);
    function init(){
        const myMap = new ymaps.Map("map", {
            center: [59.9386, 30.3141],
            zoom: 10,
            controls: []
        });
    }
}

const accordion = () => {
    const accordions = document.querySelectorAll('.accordion');
    
    if(accordions) {
        accordions.forEach((accordion)=> {
            accordion.addEventListener('click', showAccElement)
        })
    }

    function showAccElement() {
        const accItem = this.querySelector('.accordion__item'); 
        if(accItem) {
            accItem.hasChildNodes() ? this.classList.toggle('_show') : console.log('There is no content in the accordion');
            accItem.style.maxHeight ? accItem.style.maxHeight = null : accItem.style.maxHeight = accItem.scrollHeight + "px";
        } else return
    }
} 


document.addEventListener("DOMContentLoaded", initFunctions);