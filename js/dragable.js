elements = document.getElementsByClassName("dragable")
for (let i = 0; i < elements.length; i++) {
  Move(elements[i]);
}

function Move(elem) {
  let mouse_x = 0, mouse_y = 0;
  elem.onmousedown = Select;

  function Select(e){
    e.preventDefault();
    mouse_x = e.clientX;
    mouse_y = e.clientY;
    elem.style.cursor = "move";
    document.onmouseup = Diselect;
    document.onmousemove = ChangePosition;
  }

  function ChangePosition(e){
    e.preventDefault();
    offset_x = mouse_x - e.clientX
    offset_y = mouse_y - e.clientY
    mouse_x = e.clientX
    mouse_y = e.clientY
    elem.style.top = (elem.offsetTop - offset_y) + "px";
    elem.style.left = (elem.offsetLeft - offset_x) + "px";
  }

  function Diselect() {
    elem.style.cursor = "pointer";
    document.onmouseup = null;
    document.onmousemove = null;
  }
}