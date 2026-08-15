document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("appointmentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("patientName").value.trim();
  const phone = document.getElementById("patientPhone").value.trim();
  const service = document.getElementById("serviceSelect").value;
  const note = document.getElementById("messageText").value.trim();

  let message = `Hello, I would like to book an appointment at Crown Family Dental Care.\nName: ${name}`;
  if (phone) message += `\nPhone: ${phone}`;
  if (service) message += `\nService: ${service}`;
  if (note) message += `\nNote: ${note}`;

  window.open(`https://wa.me/919878014939?text=${encodeURIComponent(message)}`, "_blank");
});
