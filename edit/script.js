function showPage(pageId) {
    // ซ่อนทุกหน้าทั้งที่เป็น .card และ .notebook-page
    document.querySelectorAll('.card, .notebook-page').forEach(el => el.classList.remove('active'));
    
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    }

    if (pageId === 'final') {
        startHeartRain();
        const audio = document.getElementById('anniversary-audio');
        if (audio) audio.play().catch(() => console.log("รอคนกดเล่นเพลง"));
    }
}

function wrongAnswer() {
    alert("จำไม่ได้หรอออ ตอบใหม่เลยยย 😤");
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💗';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '110vh';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    heart.style.zIndex = '1';
    heart.style.transition = 'transform 4s linear, opacity 4s';
    document.getElementById('bg-hearts').appendChild(heart);
    setTimeout(() => {
        heart.style.transform = `translateY(-120vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
    }, 100);
    setTimeout(() => heart.remove(), 4000);
}

function startHeartRain() {
    setInterval(createHeart, 400);
}