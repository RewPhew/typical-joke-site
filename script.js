const emojis = ['🤣', '😂', '😝', '😭', '💀', '😅', '😆', '😄', '😊', '😃', '😁', '😀', '😹', '😸', '😺', '😻', '😼', '😽', '🙀', '😿', '😾', '😹', '😸', '😺', '😻', '😼', '😽', '🙀', '😿', '😾'];
document.head.appendChild(Object.assign(document.createElement("link"), {rel: "icon", href: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='11 0 100 100'><text y='.9em' font-size='90'>${emojis[Math.floor(Math.random() * emojis.length)]}</text></svg>`}))
const url = `https://v2.jokeapi.dev/joke/Any?type=single`;

const emoji = document.getElementById("emoji");
const jokeHolder = document.getElementById("joke");
const getJokeBtn = document.getElementById("getJoke");
const loader = document.getElementById('loader');
function fetchJoke() {
    getJokeBtn.classList.replace('active','unactive');
    getJokeBtn.textContent = `🥱 wait!`
    loader.classList.add('loaderW')
    jokeHolder.classList.add('fade')
    fetch(url)
        .then(response => response.json())
        .then(data => {
            jokeHolder.textContent = data.joke;
            getJokeBtn.classList.replace('unactive','active');
            getJokeBtn.textContent = `${emojis[Math.floor(Math.random() * emojis.length)]} more!`
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            loader.classList.remove('loaderW')
            jokeHolder.classList.remove('fade')
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            jokeHolder.textContent = 'Failed to show joke. Please try again later.';
            getJokeBtn.classList.replace('unactive','active');
            getJokeBtn.textContent = `${emojis[Math.floor(Math.random() * emojis.length)]} more!`
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            loader.classList.remove('loaderW')
            jokeHolder.classList.remove('fade')
        });
}
window.onload = fetchJoke;
getJokeBtn.addEventListener('click', fetchJoke);


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        fetchJoke();
    }
});