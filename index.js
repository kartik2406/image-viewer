let images = document.querySelectorAll('img');

function removeEnlarge() {
    images.forEach(img => {
        if (img.classList) {
            img.classList.remove('view');
        }
    });
}

function view(element) {
    removeEnlarge();
    element.classList.add('view');
}

function getImageInView() {
    return document.querySelector('.view');
}

function prev() {
    let imageInView = getImageInView() //get the element which is in view
    console.log(imageInView.previousElementSibling , imageInView.previousElementSibling.nodeName)
    if (imageInView.previousElementSibling && imageInView.previousElementSibling.nodeName == "IMG") {
        view(imageInView.previousElementSibling);
    } else{
        let lastImage = document.querySelector('.container img:last-child');
        view(lastImage);
    }
}

function next() {
    let imageInView = getImageInView() //get the element which is in view
    //if there is next image available go to next, else go to the first image
    if (imageInView.nextElementSibling) {
        view(imageInView.nextElementSibling);
    } else {
        let firstImage = document.querySelector('.container img');
        view(firstImage);
    }

}

images.forEach(img => {
    img.addEventListener('click', function () {
        view(this);
        document.getElementById('container').scrollIntoView();
    });
});