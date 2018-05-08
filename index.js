let images = document.querySelectorAll('.container img');

function removeFromView() {
    let imageInView = getImageInView();
    imageInView.classList.remove('view');
}

/* function that displays the selected image at the top */
function view(element) {
    removeFromView();
    element.classList.add('view'); //view class does the magic
}

/* Return the image element which is currently in view */
function getImageInView() {
    return document.querySelector('.view');
}
/* previous button logic */
function prev() {
    let imageInView = getImageInView() //get the element which is in view
    if (imageInView.previousElementSibling && imageInView.previousElementSibling.nodeName == "IMG") {
        view(imageInView.previousElementSibling);
    } else {
        let lastImage = document.querySelector('.container img:last-child');
        view(lastImage);
    }
}

/* next button logic */
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

/* add click event listener for each image*/
images.forEach(img => {
    img.addEventListener('click', function () {
        view(this);
        document.getElementById('container').scrollIntoView();
    });
});