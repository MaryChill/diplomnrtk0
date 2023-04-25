const videos = Array.from(document.querySelectorAll('.item'));
const page = document.querySelector('.video_div');

function clean() {
    videos.forEach((elem) => {
        elem.classList.remove('active');
        page.innerHTML = '';
    })
}

videos.forEach((value, index) => {
    value.addEventListener('click', () => {
        clean();
        value.classList.add('active');
        page.insertAdjacentHTML('afterbegin', 
        `<video controls>
            <source src="videoo/${index}.mp4" type="video/mp4">
        </video>`)
    })
})