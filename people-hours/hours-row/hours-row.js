function remove(removeButton) {
  removeButton.getRootNode().host.setAttribute("hours", 0);

  const event = new CustomEvent("hours-updated", {
    //when a event is set to bubble, it only child to parent
    composed: true,
    //when you do compose it goes through shadow dom boundaries, typically events only go up to the parent
  });
  //this.getRootNode().host.dispatchEvent(event);
  removeButton.getRootNode().host.dispatchEvent(event);

  removeButton.getRootNode().host.remove();
}
