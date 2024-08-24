document.addEventListener("DOMContentLoaded", function () {
  const languageDropdownItems = document.querySelectorAll(
    ".language-dropdown .dropdown-item"
  );
  const selectedLanguageSpan = document.getElementById("selected-language");

  languageDropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");
      switchLanguage(selectedLang);
      selectedLanguageSpan.textContent = this.textContent;
      localStorage.setItem("selectedLanguage", selectedLang); // Сохраняем выбранный язык в localStorage
    });
  });

  function switchLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      const translation = translations[lang][key] || key;
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.setAttribute("placeholder", translation);
      } else {
        const icon = element.querySelector("i");
        element.innerHTML = icon
          ? icon.outerHTML + " " + translation
          : translation;
      }
    });

    // Изменение заголовка страницы
    if (document.body.classList.contains("auth-page")) {
      document.title = translations[lang].title;
    } else if (document.body.classList.contains("home-page")) {
      document.title = translations[lang].homePageTitle || "ITHous"; // Заголовок для главной страницы
    }
  }

  const translations = {
    uk: {
      home: "Головна",
      courses: "Курси",
      reviews: "Відгуки",
      contacts: "Контакти",
      login: "Вхід",
      register: "Реєстрація",
      email: "Email",
      password: "Пароль",
      "confirm-password": "Підтвердити пароль",
      title: "Вхід та Авторизація", // Заголовок на украинском
      homePageTitle: "ITHous",
      textsty: "Створи Майбутнє з ITHous",
      textxadd:
        "Приєднуйтесь до провідної платформи, щоб освоїти навички майбутнього та зробити перший крок до успішної кар'єри в IT.",
      consultationButton: "Безкоштовна консультація",
      selectContactMethod: "Виберіть спосіб зв'язку",
      sectionTitle: "Від початківця до успішної кар'єри в IT",
      sectionDescription:
        "Чіткий план для освоєння нової професії з нуля до першої роботи в IT.",
      courseTitle1: "Курси з нуля",
      courseDesc1:
        "Курси, які допоможуть вам освоїти базові та просунуті навички для роботи в IT. Ви зможете поступово заглиблюватись у світ програмування, набуваючи необхідних знань та впевненості.",
      courseBtn1: "Перейти на курси",
      courseTitle2: "Підготовка до співбесіди",
      courseDesc2:
        "Підготовка до співбесід, як ефективно презентувати себе роботодавцям, впевнено проходити співбесіди та допомога у створенні резюме та розвитку soft skills для успішної кар'єри.",
      courseBtn2: "Дізнатись більше",
      courseTitle3: "Консультації",
      courseDesc3:
        "Я відповім на всі ваші запитання та допоможу з вибором шляху в IT. Ми разом проаналізуємо ваші сильні сторони, визначимо цілі, та складемо індивідуальний план розвитку.",
      courseBtn3: "Замовити консультацію",
      sectionTitle1: "Обирайте свій шлях в IT",
      sectionDescription1:
        "Пропоную три різних курси, які допоможуть вам почати або розвинути свою кар'єру в IT. Від основ до повного стеку розробки.",
      courseTitle4: "БАЗОВИЙ КУРС",
      courseDesc4:
        "Опануйте основи веб-розробки, вивчаючи HTML та CSS. Ідеально підходить для початківців.",
      courseDuration1: "Термін вивчення: 3 місяці",
      coursePrice1: "Вартість: 5000 грн",
      courseBtn4: "Дізнатись більше",
      courseTitle5: "FRONT-END КУРС",
      courseDesc5:
        "Поглиблюйте свої знання, додаючи JavaScript до вашого арсеналу веб-розробника. Перший крок до інтерактивних сайтів.",
      courseDuration2: "Термін вивчення: 6 місяців",
      coursePrice2: "Вартість: 10000 грн",
      courseBtn5: "Дізнатись більше",
      courseTitle6: "FULL-STACK КУРС",
      courseDesc6:
        "Стати повноцінним Full Stack розробником, освоюючи React та Node.js. Для тих, хто прагне стати професіоналом у створенні сучасних веб-додатків.",
      courseDuration3: "Термін вивчення: 9 місяців",
      coursePrice3: "Вартість: 15000 грн",
      courseBtn6: "Дізнатись більше",
      sectionTitle3: "Ваша дорога до успіху",
      sectionDescription2:
        "Перспективи та можливості в сучасній IT-індустрії для вас і для України.",
      salary: "$1500",
      salaryDescription:
        "Середня заробітна плата для IT-фахівця в Україні. Можливості для високих доходів і кар'єрного зростання.",
      vacancies: "+35 000",
      vacanciesDescription:
        "Щороку з'являється нових вакансій в IT-сфері. Це безмежні можливості для тих, хто хоче працювати у цій сфері.",
      remoteWork: "65%",
      remoteWorkDescription:
        "Більшість вакансій дозволяють працювати віддалено. 20% вакансій передбачають релокацію, що відкриває нові горизонти.",
      specialists: "238 000",
      specialistsDescription:
        "Кількість IT-фахівців в Україні. Більшість з них зуміла зберегти свої позиції навіть у складні часи.",
      bestConditions: "37%",
      bestConditionsDescription:
        "Багато IT-фахівців мають успішні кар'єри без формальної технічної освіти. Ваші навички і знання мають значення.",
      educationSkills: "50%",
      educationSkillsDescription:
        "Приблизно половина IT-фахівців в Україні має додаткові сертифікати та курси, що підтверджують їхні навички.",
      introTitle: "Розпочніть свою IT-кар'єру з нами",
      introDescription:
        "З радістю представляю вам нові курси, розроблені особисто мною, щоб допомогти вам досягти успіху в світі IT. Ці курси – ваш ключ до сучасних технологій та перспективної кар'єри.",
      whatWeOffer: "Що ми пропонуємо:",
      courseOverview:
        "Мої курси охоплюють всі рівні навичок, від початківця до професіонала. Незалежно від того, чи ви тільки починаєте свій шлях в IT, чи вже маєте базові знання і хочете розвиватися далі, наші програми нададуть вам всі необхідні інструменти для успіху.",
      whatYouFind: "Ось що ви знайдете в кожному з курсів:",
      basicCourse:
        "<strong>Базовий курс HTML/CSS:</strong> Ідеально для новачків, які прагнуть освоїти основи веб-розробки. Вивчайте HTML та CSS, створюйте красиві веб-сторінки та отримуйте фундаментальні знання для подальшого розвитку. Довжина курсу – 3 місяці, вартість – 5000 грн.",
      frontEndCourse:
        "<strong>Front-end курс HTML/CSS/JS:</strong> Для тих, хто хоче розширити свої навички та створювати динамічні веб-додатки. Курс включає JavaScript разом з HTML і CSS, що дозволяє вам створювати інтерактивні сайти. Довжина курсу – 6 місяців, вартість – 10000 грн.",
      fullStackCourse:
        "<strong>Full-Stack курс HTML/CSS/JS/React/Node.js:</strong> Вичерпний курс для тих, хто прагне стати Full Stack розробником. Вивчайте як фронтенд, так і бекенд технології, включаючи React та Node.js, і освоюйте створення сучасних веб-додатків. Довжина курсу – 9 місяців, вартість – 15000 грн.",
      guarantee:
        "Я гарантую якість навчання та надання актуальних знань, що відповідають вимогам сучасного ринку праці. Приєднуйтесь до нас і отримайте навички, які відкриють перед вами нові можливості!",
      introTitle: "Розпочніть свою IT-кар'єру з нами",
      introDescription:
        "З радістю представляю вам нові курси, розроблені особисто мною, щоб допомогти вам досягти успіху в світі IT. Ці курси – ваш ключ до сучасних технологій та перспективної кар'єри.",
      whatWeOffer: "Що ми пропонуємо:",
      courseOverview:
        "Мої курси охоплюють всі рівні навичок, від початківця до професіонала. Незалежно від того, чи ви тільки починаєте свій шлях в IT, чи вже маєте базові знання і хочете розвиватися далі, наші програми нададуть вам всі необхідні інструменти для успіху.",
      whatYouFind: "Ось що ви знайдете в кожному з курсів:",
      basicCourse:
        "<strong>Базовий курс HTML/CSS:</strong> Ідеально для новачків, які прагнуть освоїти основи веб-розробки. Вивчайте HTML та CSS, створюйте красиві веб-сторінки та отримуйте фундаментальні знання для подальшого розвитку. Довжина курсу – 3 місяці, вартість – 5000 грн.",
      frontEndCourse:
        "<strong>Front-end курс HTML/CSS/JS:</strong> Для тих, хто хоче розширити свої навички та створювати динамічні веб-додатки. Курс включає JavaScript разом з HTML і CSS, що дозволяє вам створювати інтерактивні сайти. Довжина курсу – 6 місяців, вартість – 10000 грн.",
      fullStackCourse:
        "<strong>Full-Stack курс HTML/CSS/JS/React/Node.js:</strong> Вичерпний курс для тих, хто прагне стати Full Stack розробником. Вивчайте як фронтенд, так і бекенд технології, включаючи React та Node.js, і освоюйте створення сучасних веб-додатків. Довжина курсу – 9 місяців, вартість – 15000 грн.",
      guarantee:
        "Я гарантую якість навчання та надання актуальних знань, що відповідають вимогам сучасного ринку праці. Приєднуйтесь до нас і отримайте навички, які відкриють перед вами нові можливості!",
      aboutUsTitle: "Про нас",
      aboutUs:
        "Ми – команда професіоналів, яка створила ці курси для того, щоб допомогти вам досягти успіху в світі IT. Наші курси підходять для будь-якого рівня підготовки і забезпечують найактуальніші знання та навички.",
      contactsTitle: "Контакти",
      phone: " Телефон: +38 (095) 091-31-15",
      email: " Email: sckollHousIT@gmail.com",
      socialMediaTitle: "Соціальні мережі",
      footerCopy: "&copy; 2024 ITHous. Усі права захищені.",
    },
    ru: {
      home: "Главная",
      courses: "Курсы",
      reviews: "Отзывы",
      contacts: "Контакты",
      login: "Войти",
      register: "Регистрация",
      email: "Email",
      password: "Пароль",
      "confirm-password": "Подтвердить пароль",
      title: "Вход и Регистрация", // Заголовок на русском
      homePageTitle: "ITHous",
      textsty: "Создай будущее с ITHous",
      textxadd:
        "Присоединяйтесь к ведущей платформе, чтобы освоить навыки будущего и сделать первый шаг к успешной карьере в IT.",
      consultationButton: "Бесплатная консультация",
      selectContactMethod: "Выберите способ связи",
      sectionTitle: "От новичка до успешной карьеры в IT",
      sectionDescription:
        "Четкий план для освоения новой профессии с нуля до первой работы в IT.",
      courseTitle1: "Курсы с нуля",
      courseDesc1:
        "Курсы, которые помогут вам освоить базовые и продвинутые навыки для работы в IT. Вы сможете постепенно погружаться в мир программирования, приобретая необходимые знания и уверенность.",
      courseBtn1: "Перейти на курсы",
      courseTitle2: "Подготовка к собеседованию",
      courseDesc2:
        "Подготовка к собеседованиям, как эффективно представить себя работодателям, уверенно проходить собеседования и помощь в создании резюме и развитии soft skills для успешной карьеры.",
      courseBtn2: "Узнать больше",
      courseTitle3: "Консультации",
      courseDesc3:
        "Я отвечу на все ваши вопросы и помогу с выбором пути в IT. Мы вместе проанализируем ваши сильные стороны, определим цели и составим индивидуальный план развития.",
      courseBtn3: "Заказать консультацию",
      sectionTitle1: "Выберите свой путь в IT",
      sectionDescription1:
        "Предлагаю три разных курса, которые помогут вам начать или развить свою карьеру в IT. От основ до полного стека разработки.",
      courseTitle4: "БАЗОВЫЙ КУРС",
      courseDesc4:
        "Освойте основы веб-разработки, изучая HTML и CSS. Идеально подходит для начинающих.",
      courseDuration1: "Срок обучения: 3 месяца",
      coursePrice1: "Стоимость: 5000 грн",
      courseBtn4: "Узнать больше",
      courseTitle5: "FRONT-END КУРС",
      courseDesc5:
        "Углубляйте свои знания, добавляя JavaScript в ваш арсенал веб-разработчика. Первый шаг к интерактивным сайтам.",
      courseDuration2: "Срок обучения: 6 месяцев",
      coursePrice2: "Стоимость: 10000 грн",
      courseBtn5: "Узнать больше",
      courseTitle6: "FULL-STACK КУРС",
      courseDesc6:
        "Станьте полноценным Full Stack разработчиком, осваивая React и Node.js. Для тех, кто стремится стать профессионалом в создании современных веб-приложений.",
      courseDuration3: "Срок обучения: 9 месяцев",
      coursePrice3: "Стоимость: 15000 грн",
      courseBtn6: "Узнать больше",
      sectionTitle3: "Ваш путь к успеху",
      sectionDescription2:
        "Перспективы и возможности в современной IT-индустрии для вас и для Украины.",
      salary: "$1500",
      salaryDescription:
        "Средняя заработная плата для IT-специалиста в Украине. Возможности для высоких доходов и карьерного роста.",
      vacancies: "+35 000",
      vacanciesDescription:
        "Каждый год появляется новое количество вакансий в IT-сфере. Это безграничные возможности для тех, кто хочет работать в этой области.",
      remoteWork: "65%",
      remoteWorkDescription:
        "Большинство вакансий позволяют работать удаленно. 20% вакансий предполагают релокацию, что открывает новые горизонты.",
      specialists: "238 000",
      specialistsDescription:
        "Количество IT-специалистов в Украине. Большинство из них смогли сохранить свои позиции даже в сложные времена.",
      bestConditions: "37%",
      bestConditionsDescription:
        "Многие IT-специалисты имеют успешные карьеры без формального технического образования. Ваши навыки и знания имеют значение.",
      educationSkills: "50%",
      educationSkillsDescription:
        "Примерно половина IT-специалистов в Украине имеет дополнительные сертификаты и курсы, подтверждающие их навыки.",
      introTitle: "Начните свою IT-карьеру с нами",
      introDescription:
        "С радостью представляю вам новые курсы, разработанные лично мной, чтобы помочь вам добиться успеха в мире IT. Эти курсы – ваш ключ к современным технологиям и перспективной карьере.",
      whatWeOffer: "Что мы предлагаем:",
      courseOverview:
        "Мои курсы охватывают все уровни навыков, от начинающего до профессионала. Независимо от того, начинаете ли вы свой путь в IT или уже имеете базовые знания и хотите развиваться дальше, наши программы предоставят вам все необходимые инструменты для успеха.",
      whatYouFind: "Вот что вы найдете в каждом из курсов:",
      basicCourse:
        "<strong>Базовый курс HTML/CSS:</strong> Идеально для новичков, которые хотят освоить основы веб-разработки. Изучайте HTML и CSS, создавайте красивые веб-страницы и получайте фундаментальные знания для дальнейшего развития. Длительность курса – 3 месяца, стоимость – 5000 грн.",
      frontEndCourse:
        "<strong>Front-end курс HTML/CSS/JS:</strong> Для тех, кто хочет расширить свои навыки и создавать динамичные веб-приложения. Курс включает JavaScript вместе с HTML и CSS, что позволяет создавать интерактивные сайты. Длительность курса – 6 месяцев, стоимость – 10000 грн.",
      fullStackCourse:
        "<strong>Full-Stack курс HTML/CSS/JS/React/Node.js:</strong> Всеобъемлющий курс для тех, кто стремится стать Full Stack разработчиком. Изучайте как фронтенд, так и бэкенд технологии, включая React и Node.js, и осваивайте создание современных веб-приложений. Длительность курса – 9 месяцев, стоимость – 15000 грн.",
      guarantee:
        "Я гарантирую качество обучения и предоставление актуальных знаний, соответствующих требованиям современного рынка труда. Присоединяйтесь к нам и получите навыки, которые откроют перед вами новые возможности!",
      introTitle: "Начните свою IT-карьеру с нами",
      introDescription:
        "С радостью представляю вам новые курсы, разработанные лично мной, чтобы помочь вам добиться успеха в мире IT. Эти курсы – ваш ключ к современным технологиям и перспективной карьере.",
      whatWeOffer: "Что мы предлагаем:",
      courseOverview:
        "Мои курсы охватывают все уровни навыков, от начинающего до профессионала. Независимо от того, начинаете ли вы свой путь в IT или уже имеете базовые знания и хотите развиваться дальше, наши программы предоставят вам все необходимые инструменты для успеха.",
      whatYouFind: "Вот что вы найдете в каждом из курсов:",
      basicCourse:
        "<strong>Базовый курс HTML/CSS:</strong> Идеально для новичков, которые хотят освоить основы веб-разработки. Изучайте HTML и CSS, создавайте красивые веб-страницы и получайте фундаментальные знания для дальнейшего развития. Длительность курса – 3 месяца, стоимость – 5000 грн.",
      frontEndCourse:
        "<strong>Front-end курс HTML/CSS/JS:</strong> Для тех, кто хочет расширить свои навыки и создавать динамичные веб-приложения. Курс включает JavaScript вместе с HTML и CSS, что позволяет создавать интерактивные сайты. Длительность курса – 6 месяцев, стоимость – 10000 грн.",
      fullStackCourse:
        "<strong>Full-Stack курс HTML/CSS/JS/React/Node.js:</strong> Всеобъемлющий курс для тех, кто стремится стать Full Stack разработчиком. Изучайте как фронтенд, так и бэкенд технологии, включая React и Node.js, и осваивайте создание современных веб-приложений. Длительность курса – 9 месяцев, стоимость – 15000 грн.",
      guarantee:
        "Я гарантирую качество обучения и предоставление актуальных знаний, соответствующих требованиям современного рынка труда. Присоединяйтесь к нам и получите навыки, которые откроют перед вами новые возможности!",
      aboutUsTitle: "О нас",
      aboutUs:
        "Мы – команда профессионалов, которая создала эти курсы, чтобы помочь вам добиться успеха в мире IT. Наши курсы подходят для любого уровня подготовки и обеспечивают самые актуальные знания и навыки.",
      contactsTitle: "Контакты",
      phone: " Телефон: +38 (095) 091-31-15",
      email: " Email: sckollHousIT@gmail.com",
      socialMediaTitle: "Социальные сети",
      footerCopy: "&copy; 2024 ITHous. Все права защищены.",
    },
    en: {
      home: "Home",
      courses: "Courses",
      reviews: "Reviews",
      contacts: "Contacts",
      login: "Login",
      register: "Register",
      email: "Email",
      password: "Password",
      "confirm-password": "Confirm Password",
      title: "Login and Registration", // Title in English
      homePageTitle: "ITHous",
      textsty: "Create Your Future with ITHous",
      textxadd:
        "Join the leading platform to master future skills and take the first step toward a successful IT career.",
      consultationButton: "Free Consultation",
      selectContactMethod: "Select Contact Method",
      sectionTitle: "From Beginner to Successful IT Career",
      sectionDescription:
        "A clear plan for mastering a new profession from scratch to your first IT job.",
      courseTitle1: "Beginner Courses",
      courseDesc1:
        "Courses designed to help you learn basic and advanced skills for working in IT. You will gradually immerse yourself in the world of programming, gaining necessary knowledge and confidence.",
      courseBtn1: "Go to Courses",
      courseTitle2: "Interview Preparation",
      courseDesc2:
        "Preparing for interviews, how to effectively present yourself to employers, confidently handle interviews, and assistance with creating resumes and developing soft skills for a successful career.",
      courseBtn2: "Learn More",
      courseTitle3: "Consultations",
      courseDesc3:
        "I will answer all your questions and help you choose your path in IT. Together, we will analyze your strengths, set goals, and create an individual development plan.",
      courseBtn3: "Call a Consultation",
      sectionTitle1: "Choose Your Path in IT",
      sectionDescription1:
        "Offering three different courses to help you start or advance your IT career. From basics to full-stack development.",
      courseTitle4: "BASIC COURSE",
      courseDesc4:
        "Master the basics of web development by learning HTML and CSS. Perfect for beginners.",
      courseDuration1: "Study Duration: 3 months",
      coursePrice1: "Price: 5000 UAH",
      courseBtn4: "Learn More",
      courseTitle5: "FRONT-END COURSE",
      courseDesc5:
        "Deepen your knowledge by adding JavaScript to your web development toolkit. The first step towards interactive websites.",
      courseDuration2: "Study Duration: 6 months",
      coursePrice2: "Price: 10000 UAH",
      courseBtn5: "Learn More",
      courseTitle6: "FULL-STACK COURSE",
      courseDesc6:
        "Become a full-fledged Full Stack developer by mastering React and Node.js. For those aiming to become professionals in building modern web applications.",
      courseDuration3: "Study Duration: 9 months",
      coursePrice3: "Price: 15000 UAH",
      courseBtn6: "Learn More",
      sectionTitle3: "Your Path to Success",
      sectionDescription2:
        "Prospects and opportunities in the modern IT industry for you and for Ukraine.",
      salary: "$1500",
      salaryDescription:
        "Average salary for IT specialists in Ukraine. Opportunities for high income and career growth.",
      vacancies: "+35,000",
      vacanciesDescription:
        "New IT job vacancies appear every year. Endless opportunities for those who want to work in this field.",
      remoteWork: "65%",
      remoteWorkDescription:
        "Most vacancies allow remote work. 20% of vacancies offer relocation, opening new horizons.",
      specialists: "238,000",
      specialistsDescription:
        "Number of IT specialists in Ukraine. Most of them managed to keep their positions even in difficult times.",
      bestConditions: "37%",
      bestConditionsDescription:
        "Many IT specialists have successful careers without formal technical education. Your skills and knowledge matter.",
      educationSkills: "50%",
      educationSkillsDescription:
        "Approximately half of IT specialists in Ukraine have additional certifications and courses that validate their skills.",
      introTitle: "Start Your IT Career with Us",
      introDescription:
        "I am excited to present new courses personally designed to help you succeed in the IT world. These courses are your key to modern technologies and a promising career.",
      whatWeOffer: "What We Offer:",
      courseOverview:
        "My courses cover all skill levels, from beginner to professional. Whether you are just starting your journey in IT or have basic knowledge and want to advance further, our programs will provide you with all the necessary tools for success.",
      whatYouFind: "Here's what you will find in each course:",
      basicCourse:
        "<strong>Basic HTML/CSS Course:</strong> Perfect for beginners looking to master the basics of web development. Learn HTML and CSS, create beautiful web pages, and gain fundamental knowledge for further development. Course length – 3 months, cost – 5000 UAH.",
      frontEndCourse:
        "<strong>Front-end HTML/CSS/JS Course:</strong> For those who want to expand their skills and create dynamic web applications. The course includes JavaScript along with HTML and CSS, allowing you to create interactive websites. Course length – 6 months, cost – 10000 UAH.",
      fullStackCourse:
        "<strong>Full-Stack HTML/CSS/JS/React/Node.js Course:</strong> Comprehensive course for those aiming to become a Full Stack developer. Learn both frontend and backend technologies, including React and Node.js, and master the creation of modern web applications. Course length – 9 months, cost – 15000 UAH.",
      guarantee:
        "I guarantee the quality of teaching and the provision of up-to-date knowledge that meets the requirements of the modern job market. Join us and acquire skills that will open up new opportunities for you!",
      introTitle: "Start Your IT Career with Us",
      introDescription:
        "I am excited to present new courses personally designed to help you succeed in the IT world. These courses are your key to modern technologies and a promising career.",
      whatWeOffer: "What We Offer:",
      courseOverview:
        "My courses cover all skill levels, from beginner to professional. Whether you are just starting your journey in IT or have basic knowledge and want to advance further, our programs will provide you with all the necessary tools for success.",
      whatYouFind: "Here's what you will find in each course:",
      basicCourse:
        "<strong>Basic HTML/CSS Course:</strong> Perfect for beginners looking to master the basics of web development. Learn HTML and CSS, create beautiful web pages, and gain foundational knowledge for further development. Course length – 3 months, cost – 5000 UAH.",
      frontEndCourse:
        "<strong>Front-End HTML/CSS/JS Course:</strong> For those who want to expand their skills and create dynamic web applications. The course includes JavaScript along with HTML and CSS, allowing you to create interactive websites. Course length – 6 months, cost – 10000 UAH.",
      fullStackCourse:
        "<strong>Full-Stack HTML/CSS/JS/React/Node.js Course:</strong> Comprehensive course for those aiming to become a Full Stack developer. Learn both frontend and backend technologies, including React and Node.js, and master the creation of modern web applications. Course length – 9 months, cost – 15000 UAH.",
      guarantee:
        "I guarantee the quality of teaching and the provision of up-to-date knowledge that meets the requirements of the modern job market. Join us and acquire skills that will open up new opportunities for you!",
      aboutUsTitle: "About Us",
      aboutUs:
        "We are a team of professionals who created these courses to help you succeed in the IT world. Our courses are suitable for any level of preparation and provide the most up-to-date knowledge and skills.",
      contactsTitle: "Contacts",
      phone: " Phone: +38 (095) 091-31-15",
      email: "Email: sckollHousIT@gmail.com",
      socialMediaTitle: "Social Media",
      footerCopy: "&copy; 2024 ITHous. All rights reserved.",
    },
  };

  // Установка языка при загрузке страницы
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
  switchLanguage(savedLanguage);
  selectedLanguageSpan.textContent = document.querySelector(
    `.language-dropdown .dropdown-item[data-lang="${savedLanguage}"]`
  ).textContent;
});
