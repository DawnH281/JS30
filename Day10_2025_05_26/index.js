const images = [
    'https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef1f0b850e0a17f323e4aff7e77fc05415cf0fd28a1b4c2ed15b9d77e3ff025480445d8664912e524bb892f77a15e422a3/1-copy-4843-5464.jpg',
    'https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef1f0b850e0a17f323e4aff7e77fc054157a1a38a25802be22712f88a3f4776c29c48f8d5d15269f8457017bde8a6c74c1bf46ac6ef44915f15501aaf05dc98e25e12bbcd6e1a90e5bea59ba47b84d4619/gettyimages-2205374224-spxewx16-copy-3739-7304.jpg',
    'https://pbs.twimg.com/media/FwQJKPcWYAAPYm2.jpg:large'
];
let currentIndex = 0;
const slideImg = document.getElementById('slide');
function showSlide(index){
    slideImg.src = images[index];
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex)
}

function showSlide(index){
    slideImg.style.opacity - 0;
    setTimeout(() => {
        slideImg.src = images[index]
        slideImg.onload = () =>{
            slideImg.style.opacity = 1
        }
    }, 500);
}