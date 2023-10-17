function remove(removeButton) {
  removeButton.getRootNode().host.remove();
  recomputeSplitTips();
}
