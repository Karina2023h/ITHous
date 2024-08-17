document.addEventListener("DOMContentLoaded", function () {
  // Обработчик для начального состояния страницы

  // Функция для переключения вкладок
  const authTabs = document.querySelectorAll("#authTabs a");
  const authContents = document.querySelectorAll(".tab-pane");

  authTabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);

      authTabs.forEach((t) => t.classList.remove("active"));
      authContents.forEach((c) => c.classList.remove("show", "active"));

      this.classList.add("active");
      document.getElementById(targetId).classList.add("show", "active");
    });
  });
});
