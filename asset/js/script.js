const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.querySelectorAll('.faq-card').forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

const inquiry = document.getElementById('inquiry');
const inquiryMaxHeight = () => parseFloat(getComputedStyle(inquiry).maxHeight);

const resizeInquiry = () => {
    inquiry.style.height = 'auto';
    const nextHeight = Math.min(inquiry.scrollHeight, inquiryMaxHeight());
    inquiry.style.height = `${nextHeight}px`;
};

inquiry.addEventListener('input', resizeInquiry);
resizeInquiry();

document.querySelector('.form-section-submit-btn').addEventListener('click', () => {
    const requiredFields = [
        { id: 'userName', label: '이름' },
        { id: 'userPhone', label: '휴대폰 번호' },
        { id: 'userEmail', label: '이메일 주소' },
        { id: 'employmentStatus', label: '근무 현황' },
        { id: 'camp-gen', label: '기수 선택' },
        { id: 'email-site', label: '이메일 도메인' },
    ];

    const emptyField = requiredFields.find(({ id }) => {
        const value = document.getElementById(id)?.value?.toString().trim();
        return !value;
    });

    if (emptyField) {
        alert(`${emptyField.label}을(를) 입력해주세요.`);
        document.getElementById(emptyField.id).focus();
        return;
    }

    const phone = document.getElementById('userPhone').value.toString().trim();

    if (!/^\d{11}$/.test(phone)) {
        alert('올바르지 않은 입력입니다. 휴대폰 번호는 11자리 숫자로 입력해주세요.');
        document.getElementById('userPhone').focus();
        return;
    }

    alert('성공적으로 지원되었습니다.');
});
