const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

$(function () {
    $('.faq-card').click(function () {
        $(this).toggleClass('active');
    })

    const $inquiry = $('#inquiry');
    const inquiryMaxHeight = () => parseFloat(getComputedStyle($inquiry[0]).maxHeight);

    const resizeInquiry = () => {
        $inquiry.css('height', 'auto');
        const nextHeight = Math.min($inquiry[0].scrollHeight, inquiryMaxHeight());
        $inquiry.css('height', `${nextHeight}px`);
    };

    $inquiry.on('input', resizeInquiry);
    resizeInquiry();

    $('.form-section-submit-btn').on('click', function () {
        const requiredFields = [
            { id: '#userName', label: '이름' },
            { id: '#userPhone', label: '휴대폰 번호' },
            { id: '#userEmail', label: '이메일 주소' },
            { id: '#employmentStatus', label: '근무 현황' },
            { id: '#camp-gen', label: '기수 선택' },
            { id: '#email-site', label: '이메일 도메인' },
        ];

        const emptyField = requiredFields.find(({ id }) => !$(id).val()?.toString().trim());

        if (emptyField) {
            alert(`${emptyField.label}을(를) 입력해주세요.`);
            $(emptyField.id).focus();
            return;
        }

        const phone = $('#userPhone').val().toString().trim();

        if (!/^\d{11}$/.test(phone)) {
            alert('올바르지 않은 입력입니다. 휴대폰 번호는 11자리 숫자로 입력해주세요.');
            $('#userPhone').focus();
            return;
        }

        alert('성공적으로 지원되었습니다.');
    });
})