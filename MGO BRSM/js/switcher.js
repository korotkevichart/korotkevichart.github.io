const numbers = ['01', '02', '03', '04'];
let currentIndex = 0;

const information = [
    {
        header: 'Гражданско-патриотическое',
        main: 'Меняется эпоха. Буквально на глазах стремительно меняется темп жизни, появляются новые технологии, молодежь становится более продвинутой, все процессы проходят динамичнее. Но остается неизменной жизненная ценность любого государства – патриотизм его граждан, который начинается с любви к своей малой родине, к тому месту, где ты родился и вырос, с гордости за свою семью, школу, деревню, поселок или город, за людей, которые живут рядом. Белорусская молодежь ценит то, что имеет и понимает, что сегодня Беларусь – это островок мира, спокойствия и стабильности.',
        backgroundImage: '../MGO BRSM/activity.jpeg'  // путь к изображению для 01
    },
    {
        header: 'Гражданско-патриотическое',
        main: 'Меняется эпоха. Буквально на глазах стремительно меняется темп жизни, появляются новые технологии, молодежь становится более продвинутой, все процессы проходят динамичнее. Но остается неизменной жизненная ценность любого государства – патриотизм его граждан, который начинается с любви к своей малой родине, к тому месту, где ты родился и вырос, с гордости за свою семью, школу, деревню, поселок или город, за людей, которые живут рядом. Белорусская молодежь ценит то, что имеет и понимает, что сегодня Беларусь – это островок мира, спокойствия и стабильности.',
        backgroundImage: '../MGO BRSM/img/firstpik.jpg'  // путь к изображению для 02
    },
    {
        header: 'Гражданско-патриотическое',
        main: 'Меняется эпоха. Буквально на глазах стремительно меняется темп жизни, появляются новые технологии, молодежь становится более продвинутой, все процессы проходят динамичнее. Но остается неизменной жизненная ценность любого государства – патриотизм его граждан, который начинается с любви к своей малой родине, к тому месту, где ты родился и вырос, с гордости за свою семью, школу, деревню, поселок или город, за людей, которые живут рядом. Белорусская молодежь ценит то, что имеет и понимает, что сегодня Беларусь – это островок мира, спокойствия и стабильности.',
        backgroundImage: '../MGO BRSM/img/activity.jpeg'  // путь к изображению для 03
    },
    {
        header: 'Гражданско-патриотическое',
        main: 'Меняется эпоха. Буквально на глазах стремительно меняется темп жизни, появляются новые технологии, молодежь становится более продвинутой, все процессы проходят динамичнее. Но остается неизменной жизненная ценность любого государства – патриотизм его граждан, который начинается с любви к своей малой родине, к тому месту, где ты родился и вырос, с гордости за свою семью, школу, деревню, поселок или город, за людей, которые живут рядом. Белорусская молодежь ценит то, что имеет и понимает, что сегодня Беларусь – это островок мира, спокойствия и стабильности.',
        backgroundImage: '../MGO BRSM/img/activity.jpeg'  // путь к изображению для 04
    }
];

function updatePositions() {
    const container = document.getElementById('switcher');
    container.innerHTML = '';

    const topNum = document.createElement('div');
    topNum.className = 'number top';
    topNum.textContent = currentIndex > 0 ? numbers[currentIndex - 1] : '';
    
    const middleNum = document.createElement('div');
    middleNum.className = 'number middle';
    middleNum.textContent = numbers[currentIndex];
    
    const bottomNum = document.createElement('div');
    bottomNum.className = 'number bottom';
    bottomNum.textContent = currentIndex < numbers.length - 1 ? numbers[currentIndex + 1] : '';

    if (currentIndex > 0) topNum.addEventListener('click', moveBackward);
    if (currentIndex < numbers.length - 1) bottomNum.addEventListener('click', moveForward);

    container.appendChild(topNum);
    container.appendChild(middleNum);
    container.appendChild(bottomNum);

    // Обновляем информацию с плавным переходом
    const header = document.querySelector('.activity_header');
    const main = document.querySelector('.activity_main');
    const image = document.querySelector('.activity-image');

    // Убираем активные классы перед обновлением
    header.classList.remove('active');
    main.classList.remove('active');
    image.classList.remove('active');

    // Устанавливаем новые данные
    header.textContent = information[currentIndex].header;
    main.textContent = information[currentIndex].main;
    image.style.backgroundImage = `url(${information[currentIndex].backgroundImage})`;

    // Ждем, чтобы изменения стали видимыми после удаления старого контента
    setTimeout(() => {
        // Добавляем активные классы для плавного появления
        header.classList.add('active');
        main.classList.add('active');
        image.classList.add('active');
    }, 300); // Увеличил задержку до 300ms для анимации
}

function moveForward() {
    if (currentIndex < numbers.length - 1) {
        const elements = document.querySelectorAll('.number');
        elements[0].classList.add('fade-out'); 
        elements[1].classList.replace('middle', 'top');
        elements[2].classList.replace('bottom', 'middle');

        currentIndex++;
        setTimeout(updatePositions, 300);
    }
}

function moveBackward() {
    if (currentIndex > 0) {
        const elements = document.querySelectorAll('.number');
        elements[2].classList.add('fade-out'); 
        elements[1].classList.replace('middle', 'bottom');
        elements[0].classList.replace('top', 'middle');

        currentIndex--;
        setTimeout(updatePositions, 300);
    }
}

updatePositions();