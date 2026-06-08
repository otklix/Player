// Эффект "разбегающегося круга" при нажатии в любом месте экрана
document.addEventListener("pointerdown", (e) => {
    const glow = document.createElement("div");
    glow.className = "glow";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 600);
});

// Добавляем стили для эффекта, если их нет в CSS
const style = document.createElement('style');
style.textContent = `
    .glow {
        position: fixed;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(255, 0, 0, 0.6), transparent 70%);
        animation: tap 0.6s ease-out forwards;
        z-index: 9999;
    }

    @keyframes tap {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.3);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
        }
    }
`;
document.head.appendChild(style);