// Populate overlay fields and print
function printTemplate() {
  $("#nameOverlay").text($("#name").val());
  $("#ageOverlay").text($("#age").val());
  $("#sexOverlay").text($("#sex").val());
  $("#statusOverlay").text($("#status").val());
  $("#addressOverlay").text($("#address").val());
  $("#telOverlay").text($("#tel").val());
  $("#occupationOverlay").text($("#occupation").val());
  $("#referredOverlay").text($("#referred").val());

  const today = new Date();
  if (today) {
    const formattedDate = today.toLocaleDateString("en-US");
    const formattedTime = today.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    $("#dateOverlay").text(`${formattedDate} ${formattedTime}`);
  }

  const birthdateValue = $("#birthdate").val(); // yyyy-mm-dd
  if (birthdateValue) {
    const date = new Date(birthdateValue);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yyyy = date.getFullYear();
    const formatted = `${mm}/${dd}/${yyyy}`;

    $("#birthdateOverlay").text(formatted);
  }

  const $template = $("#printable");
  if ($template.length) {
    $template.show();
    window.print();
    $template.hide();
  }
}

function updateAge() {
  const birthdateValue = $("#birthdate").val();
  if (!birthdateValue || birthdateValue.length < 10) {
    $("#age").val("");
    return;
  }

  const birthdate = new Date(birthdateValue);
  if (isNaN(birthdate)) {
    $("#age").val("");
    return;
  }

  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  const dayDiff = today.getDate() - birthdate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  $("#age").val(age >= 0 ? age : "0");
}

$(document).ready(function () {
  $("#birthdate").on("change input", updateAge);
});
