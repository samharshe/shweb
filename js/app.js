const showNextRow = function(){
    let mediaRow = document.createElement('section');
    mediaRow.classList.add('mediaRow');

    const mediaRows = document.querySelectorAll('.mediaRow');
    const lastRowShown = mediaRows[mediaRows.length-1];
    const firstIndex = 4*rowsShowing+1;
    const lastIndex = 4*rowsShowing+5;

    for(let i = firstIndex; i < lastIndex; i++){
        let img = document.createElement('img');
        img.src = `files/${i}.jpeg`;
        mediaRow.append(img);
    }

    lastRowShown.insertAdjacentElement('afterend', mediaRow);

    if(rowsShowing == 16){
        showMoreButton.remove();
    } else {
        rowsShowing++;    
    }
}

let rowsShowing = 3;

const showMoreButton = document.querySelector('#showMoreButton');
showMoreButton.addEventListener('click', showNextRow);