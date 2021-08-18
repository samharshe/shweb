const addImages = function(){
    for(let i = 0; i < 4; i++){
        let imgToAdd = document.createElement('img');
        imgToAdd.src = `files/${numImagesShowing+1}.jpeg`;
        let lastImg = document.querySelector(`img[src="files/${numImagesShowing}.jpeg"]`)
        lastImg.insertAdjacentElement('afterend', imgToAdd)
        numImagesShowing++;
    }

    if(numImagesShowing == 64){
        morePhotosButton.remove();
    }
}

let numImagesShowing = 12;

const morePhotosButton = document.querySelector('#morePhotosButton');
morePhotosButton.addEventListener('click', addImages);

const navDisplayToggle = document.querySelector("#navDisplayToggle");
const navItems = document.querySelectorAll('.navItem');
navDisplayToggle.addEventListener('click', function(){
    navItems.forEach(navItem => {
        navItem.classList.toggle('hidden');
    });
});