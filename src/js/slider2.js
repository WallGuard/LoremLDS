class Slider {
    constructor(slideIndex){
    this.slideIndex = slideIndex;
    }

    plusSlide() {
        this.showSlides(this.slideIndex += 1);
    }

    minusSlide() {
        this.showSlides(this.slideIndex -= 1);
    }

    showSlides(n = this.slideIndex) {
        let slides = document.getElementsByClassName('item');
        let dots = document.getElementsByClassName('slider-dots_item');
        let i;
        if (n > slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[this.slideIndex - 1].style.display = 'block';
        dots[this.slideIndex - 1].className += ' active';
    }
}

let slider = new Slider(1)

slider.showSlides(1)

window.slider = slider
