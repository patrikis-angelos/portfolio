const move = (elem) => {
  let mouseX = 0;
  let mouseY = 0;

  const ChangePosition = (e) => {
    e.preventDefault();
    const offsetX = mouseX - e.clientX;
    const offsetY = mouseY - e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    elem.style.top = `${elem.offsetTop - offsetY}px`;
    elem.style.left = `${elem.offsetLeft - offsetX}px`;
  };

  const Diselect = () => {
    elem.style.cursor = 'pointer';
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const Select = (e) => {
    e.preventDefault();
    mouseX = e.clientX;
    mouseY = e.clientY;
    elem.style.cursor = 'move';
    document.onmouseup = Diselect;
    document.onmousemove = ChangePosition;
  };

  elem.onmousedown = Select;
};

export default move;