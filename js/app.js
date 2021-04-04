const addImages = function(){
    for(let i = 0; i < 4; i++){
        let imgToAdd = document.createElement('img');
        imgToAdd.src = `files/${numImagesShowing+1}.jpeg`;
        let lastImg = document.querySelector(`img[src="files/${numImagesShowing}.jpeg"]`)
        lastImg.insertAdjacentElement('afterend', imgToAdd)
        numImagesShowing++;
    }

    if(numImagesShowing == 64){
        showMoreButton.remove();
    }
}

let numImagesShowing = 12;

const showMoreButton = document.querySelector('#showMoreButton');
showMoreButton.addEventListener('click', addImages);