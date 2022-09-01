import YouLose from "../YouLose/YouLose";
import YouWin from "../YouWin/YouWin";
import './Modal.scss';

function Modal({ score }) {
  return (
    <div className="modal">
      {score >= 2 && <YouWin />}
      {score < 2 && <YouLose />}
    </div>
  );
}

export default Modal;
