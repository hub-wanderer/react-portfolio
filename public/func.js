let prevent = document.querySelectorAll('.prevent');

prevent.forEach(p => {
    p.addEventListener('click', e => {
        e.preventDefault();
    })
});