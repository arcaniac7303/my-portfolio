const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

$(function () {
    $('.faq-card').click(function () {
        $(this).toggleClass('active');
    })
})