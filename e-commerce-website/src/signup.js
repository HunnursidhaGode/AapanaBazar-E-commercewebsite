document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#signupForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#signupName").value.trim();
    const email = document.querySelector("#signupEmail").value.trim();
    const password = document.querySelector("#signupPassword").value.trim();

    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    alert("Account created successfully!");

    // Redirect user to Sign In page
    window.location.href = "signin.html";
  });
});
