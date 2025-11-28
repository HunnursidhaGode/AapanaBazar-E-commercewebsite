document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#signinForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#signinEmail").value.trim();
    const password = document.querySelector("#signinPassword").value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    alert("Login successful!");

    // Redirect to homepage
    window.location.href = "index.html";
  });
});
