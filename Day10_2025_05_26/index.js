const images = [
  "https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg",
  "https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg",
  "https://nads.1cdn.vn/2024/11/22/74da3f39-759b-4f08-8850-4c8f2937e81a-1_mangeshdes.png"
];

let currentIndex = 0;
const slideImg = document.getElementById("slide");

function showSlide(index) {
  slideImg.src = images[index];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}
