const form = document.querySelector('form');
const searchBox = document.getElementById('search-box');
const img = document.querySelector('img');

img.src = 'no-image.png';

form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
    try {
        e.preventDefault();

        let searchTerm = searchBox.value;

        let response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=AVpgB59XEYsPu80ZpPNkiPtvvjCuLSrf&s=' + searchTerm, {
            mode: 'cors'
        });

        let gifData = await response.json();

        if (gifData.data.length === 0) {
            img.src = 'no-image.png';
            throw new TypeError('No gifs found!');
        } else {
            img.src = gifData.data.images.original.url;
        }
    } catch (error) {
        console.log(error);
    }
};