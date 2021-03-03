const form = document.querySelector('form');
const searchBox = document.getElementById('search-box');
const img = document.querySelector('img');

img.src = 'no-image.png';

addEventListener('submit', (e) => {
    e.preventDefault();
    let searchTerm = searchBox.value;

    fetch('https://api.giphy.com/v1/gifs/translate?api_key=AVpgB59XEYsPu80ZpPNkiPtvvjCuLSrf&s=' + searchTerm, {
        mode: 'cors'
    }).then(function(response) {
        return response.json();
    }).then(function(response) {
        if(response.data.length === 0) {
            img.src = 'no-image.png';
            throw new TypeError('No gifs found!');
        } else {
            img.src = response.data.images.original.url;
        }
    }).catch(function(error) {
        console.log(error);
    });
});