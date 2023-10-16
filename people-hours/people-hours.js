function AddPerson(peopleHours) {
  const hours = document
    .querySelector("people-hours")
    .shadowRoot.querySelector("section[hours]");
  const newPerson = document.createElement("hours-row");
  hours.appendChild(newPerson);
}
