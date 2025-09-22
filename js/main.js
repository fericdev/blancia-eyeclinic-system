// Populate overlay fields and print
function printTemplate() {
  document.getElementById("nameOverlay").textContent =
    document.getElementById("name").value;
  document.getElementById("ageOverlay").textContent =
    document.getElementById("age").value;
  document.getElementById("sexOverlay").textContent =
    document.getElementById("sex").value;
  document.getElementById("statusOverlay").textContent =
    document.getElementById("status").value;
  document.getElementById("addressOverlay").textContent =
    document.getElementById("address").value;
  document.getElementById("telOverlay").textContent =
    document.getElementById("tel").value;
  document.getElementById("occupationOverlay").textContent =
    document.getElementById("occupation").value;
  document.getElementById("referredOverlay").textContent =
    document.getElementById("referred").value;

  const today = new Date();
  if (today) {
    const formattedDate = today.toLocaleDateString("en-US"); // DD/MM/YYYY
    document.getElementById("dateOverlay").textContent = formattedDate;
  }

  const birthdateValue = document.getElementById("birthdate").value; // yyyy-mm-dd
  if (birthdateValue) {
    const date = new Date(birthdateValue);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yyyy = date.getFullYear();
    const formatted = `${mm}/${dd}/${yyyy}`;
    document.getElementById("birthdateOverlay").textContent = formatted;
  }

  const template = document.getElementById("printable");
  if (template) {
    template.style.display = "block";
    window.print();
    template.style.display = "none";
  }
}
