import './reset.css';
import './styles.css';
import './images/enigma.png';
import './images/Tictactoe.png';
import move from './dragable';

const elements = document.getElementsByClassName("dragable")
for (let i = 0; i < elements.length; i++) {
  move(elements[i]);
}