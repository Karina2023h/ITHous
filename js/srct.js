const faqItems = document.querySelectorAll(".faq-item h3");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    const arrow = item.querySelector(".arrow");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      arrow.innerHTML = "&#9654;";
    } else {
      answer.style.display = "block";
      arrow.innerHTML = "&#9660;";
    }
  });
});
