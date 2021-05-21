const move = (elem) => {
  const Select = (e) => {
    e.preventDefault();
    mouse_x = e.clientX;
    mouse_y = e.clientY;
    elem.style.cursor = "move";
    document.onmouseup = Diselect;
    document.onmousemove = ChangePosition;
  }

  const ChangePosition = (e) => {
    e.preventDefault();
    const offset_x = mouse_x - e.clientX
    const offset_y = mouse_y - e.clientY
    mouse_x = e.clientX
    mouse_y = e.clientY
    elem.style.top = (elem.offsetTop - offset_y) + "px";
    elem.style.left = (elem.offsetLeft - offset_x) + "px";
  }

  const Diselect = () => {
    elem.style.cursor = "pointer";
    document.onmouseup = null;
    document.onmousemove = null;
  }

  let mouse_x = 0, mouse_y = 0;
  elem.onmousedown = Select;
};

export default move;