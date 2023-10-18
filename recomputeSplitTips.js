function recomputeSplitTips() {
  const totalTips = parseFloat(document.getElementById("totalTips").value);
  let totalHours = 0;
  document
    .querySelector("people-hours")
    .shadowRoot.querySelectorAll("hours-row")
    .forEach((h) => {
      totalHours += parseFloat(h.getAttribute("hours")) || 0;
    });
  if (!isNaN(totalHours) && !isNaN(totalTips) && totalHours > 0) {
    const dollarPerHour = parseFloat(totalTips) / parseFloat(totalHours);
    document
      .querySelector("people-hours")
      .shadowRoot.querySelectorAll("hours-row")
      .forEach((h) => {
        if (h.getAttribute("hours")) {
          const parsedHours = parseFloat(h.getAttribute("hours"));
          if (!isNaN(parsedHours) && parsedHours != 0) {
            const display = h.shadowRoot.getElementById("displaySplit");
            const personsTips = (parsedHours * dollarPerHour).toFixed(2);
            const displayText = "$" + personsTips.toString();
            display.innerHTML = displayText;
          } else {
            h.shadowRoot.getElementById("displaySplit").innerHTML = "$--.--";
          }
        } else {
          h.shadowRoot.getElementById("displaySplit").innerHTML = "$--.--";
        }
      });
  }
}
