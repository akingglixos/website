function bob(){
    let boom = new Audio('./assets/sounds/boom.mp3');
    let randomNumber = Math.floor(Math.random() * (links.length + 1));
    if (randomNumber === (links.length)){
        let pag = document.getElementsByTagName('article');
        alert('Eu avisei...');
        boom.play();
        while (pag.length > 0){
            pag[0].parentNode.removeChild(pag[0]);
        }
        setTimeout(() => alert(';('), 3000);
    }
    else {
            alert(links[randomNumber]);
            window.open(links[randomNumber], '_blank').focus();
    }
}

const links = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=TNdIbn-qpRM',
    'https://www.youtube.com/watch?v=MF7sPRBRgE8',
    'https://www.youtube.com/watch?v=0IAr0HhOVZo',
    'https://www.youtube.com/watch?v=KWtwIf-TSlo',
    'https://amongusdrip.org/',
    'https://www.google.com/search?q=do+a+barrel+roll&oq=do+a+barrel+roll',
    './him/%253F.html',
    'http://www.pudim.com.br/',
    'https://i1.sndcdn.com/artworks-ksPyeKdYzla38ksz-L0GOdA-t240x240.jpg',
    'http://papertoilet.com/',
    'https://www.myinstants.com/pt/instant/heheheha-85810/',
    'https://img.ibxk.com.br/2012/6/gifs/dancingbaby2.gif'
];