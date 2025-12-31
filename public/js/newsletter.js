document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".newsletter-form");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // nu se face reload automat

      const formData = new FormData(form);
      const action = form.getAttribute("action");

      fetch(action, {
        method: "POST",
        body: formData,
        mode: "no-cors", // MailerLite nu permite CORS, dar submitul merge
      })
        .then(() => {
          // Redirect după submit
          window.location.href = "https://www.cameravar.ro/sigur-vrei-sa-te-abonezi/";
        })
        .catch(() => {
          const msg = form.querySelector(".form-message");
          if (msg) msg.textContent = "A apărut o eroare. Te rog încearcă din nou.";
        });
    });
  });
});