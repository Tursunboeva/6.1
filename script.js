let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Dastlabki slaydni ko'rsatish
showSlide(currentSlide);
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Hisob: {count}</p>
            <button onClick={() => setCount(count + 1)}>Qo'shish</button>
        </div>
    );
};