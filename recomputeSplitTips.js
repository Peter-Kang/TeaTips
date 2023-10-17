function recomputeSplitTips() {
  const totalTips = parseFloat(document.getElementById("totalTips").value);
  let totalHours = 0;
  document
    .querySelector("people-hours")
    .shadowRoot.querySelectorAll("hours-row")
    .forEach((h) => {
      totalHours += parseFloat(h.getAttribute("hours")) || 0
    });
  if (!isNaN(totalHours) && !isNaN(totalTips) && totalHours > 0) {
    const dollarPerHour = parseFloat(totalTips) / parseFloat(totalHours);
    document
      .querySelector("people-hours")
      .shadowRoot.querySelectorAll("hours-row")
      .forEach((h) => {
        if (h.shadowRoot.getElementById("hours")) {
          const parsedHours = parseFloat(
            h.shadowRoot.getElementById("hours").value
          );
          if (!isNaN(parsedHours)) {
            const display = h.shadowRoot.getElementById("displaySplit");
            const personsTips = (parsedHours * dollarPerHour).toFixed(2);
            const displayText = "$" + personsTips.toString();
            display.innerHTML = displayText;
          }
          else
          {
            h.shadowRoot.getElementById("displaySplit").innerHTML = "$--.--";
          }
        }
      });
  }
}
