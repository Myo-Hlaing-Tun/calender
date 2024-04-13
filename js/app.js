const getCarousel = document.querySelector(".carousel-inner");
const getImages = document.querySelectorAll(".image");
const imageArr = ["image1.webp", "image2.webp", "image3.webp", "image4.webp", "image5.webp", "image6.webp", "image7.webp", "image8.webp", "image9.webp"];
getImages.forEach((element, index) => {
    element.addEventListener('click', function (e) {
        getCarousel.innerHTML = '';
        for (let x = 0; x < getImages.length; x++) {
            let img = document.createElement('img');
            let div = document.createElement('div');
            if (x == 0) {
                div.className = "carousel-item active";
                img.src = e.target.src;
                img.className = "d-block w-100";
                img.alt = "profile-photo";
                img.style.width = "50%";
                img.style.borderRadius = "10px";
                div.appendChild(img);
            } else {
                div.className = "carousel-item";
                let filePathArr = e.target.src.split("/");
                let fileName = filePathArr[filePathArr.length - 1];
                let indexOf = index;
                indexOf += x;
                if (indexOf >= imageArr.length) {
                    indexOf = indexOf - imageArr.length;
                };
                filePathArr = e.target.src.replace(fileName, imageArr[indexOf]);
                img.src = filePathArr;
                img.className = "d-block w-100";
                img.alt = "profile-photo";
                img.style.width = "50%";
                img.style.borderRadius = "10px";
                div.appendChild(img);
            }
            getCarousel.appendChild(div);
        }
    })
});