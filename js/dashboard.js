document.addEventListener("DOMContentLoaded", () => {
  const auth = window.Auth;
  if (!auth) return;

  const user = auth.getCurrentUser();

  if (!user) {
    window.location.href = "index.html";
    return;
  }
  const name = user.name || "User";
  const email = user.email || "";

  const sidebarName = document.getElementById("sidebarUserName");
  const sidebarEmail = document.getElementById("sidebarUserEmail");
  const greeting = document.getElementById("mainGreeting");
  const avatar = document.querySelector(".sidebar__avatar");
  const  sidebar = document.getElementsByClassName("sidebar-container");

  if (sidebarName) sidebarName.textContent = name;
  if (sidebarEmail) sidebarEmail.textContent = email;
  if (greeting) greeting.textContent = `Good morning, ${name.split(" ")[0]}!`;
  if (avatar && name) avatar.textContent = name.charAt(0).toUpperCase();

  const btnLogout = document.getElementById("btnLogout");
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      auth.logoutUser();
      window.location.href = "index.html";
    });
  }
});


sidebar
