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
      document.title = "ITHous"; // Заголовок для главной страницы
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
      title: "Login and Registration", // Заголовок на английском
    },
  };

  // Устанавливаем начальный язык
  const initialLang = localStorage.getItem("selectedLanguage") || "uk";
  switchLanguage(initialLang);
});
