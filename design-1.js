
{
  function insertAfter(newNode, targetNode) {
    targetNode.parentNode.insertBefore(newNode, targetNode.nextSibling);
  }
  var sectionTarget = document.getElementById("homepage-splash")
  var node = document.createElement("DIV");
  insertAfter(node, sectionTarget)
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
}
