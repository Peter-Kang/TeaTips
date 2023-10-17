function remove(removeButton) {
  let hoursRow = removeButton.parentNode;
  hoursRow.innerHTML = "";
  recomputeSplitTips()
}
