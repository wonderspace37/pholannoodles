const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
function redirectToGrubhub() {
    window.location.href = 'https://www.grubhub.com/restaurant/pho-lan-noodles-house-39060-fremont-blvd-fremont/3252378';
}