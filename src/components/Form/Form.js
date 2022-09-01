import { useNavigate } from "react-router-dom";
import './Form.scss'

function Form({ setName, name }) {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.name.value === "") {
      return 
    }
    setName(event.target.name.value);
    console.log(event.target.name.value);
    // window.location.replace("http://localhost:3000/game");
    navigate("../game");
    console.log(name);
  };

  // const handleClick = () => {
  //     window.location.replace="hhtp://localhost:3000/game"
  // }

  return (
    <div className="form__container">
      <form className="form" action="" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="name">Enter Your Name:</label>
        <input className="form__input" type="text" name="name" />
        <button className="form__button"> Enter </button>
      </form>
    </div>
  );
}

export default Form;
