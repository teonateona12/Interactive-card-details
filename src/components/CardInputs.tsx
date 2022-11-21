import { useState } from "react";
import "../index.css";
import { CardInputsProps } from "./interfaces";

const CardInputs = ({
  cvc,
  setCvc,
  cardNumber,
  setCardNumber,
  name,
  setName,
  day,
  setDay,
  month,
  setMonth,
  ifFormIscorrect,
  setIfFormIscorrect,
}: CardInputsProps) => {
  const [inputCardNum, setInputCardNum] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputMm, setInputMm] = useState("");
  const [inputYy, setInputYy] = useState("");
  const [inputCvc, setInputCvc] = useState("");

  const nameInputHeandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const confirmClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let res = inputCardNum.replace(/(.{4})/g, "$1 ");

    setCardNumber(res);
    setName(inputName);
    setDay(inputMm);
    setMonth(inputYy);
    setCvc(inputCvc);
    setIfFormIscorrect(false)
  };

  return (
    <form className="mt-[20%] sm:mt-[30%] lg:w-[50%]">
      <div>
        <label>CARDHOLDER NAME </label>
        <input
          className="inp rounded-lg p-2"
          onChange={nameInputHeandler}
          type="text"
          placeholder="e.g. Jane Appleseed"
        ></input>
      </div>
      <div className="mt-4">
        <label>CARD NUMBER </label>
        <input
          pattern="[0-9\s]{13,19}"
          maxLength={16}
          className="inp rounded-lg p-2 "
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={inputCardNum}
          onChange={(e) => setInputCardNum(e.target.value)}
        ></input>
      </div>
      <div className="flex mt-4">
        <div>
          <label>EXP. DATE (MM/YY)</label>
          <div className="flex">
            <input
              className="inp-date rounded-lg p-2"
              onChange={(e) => setInputMm(e.target.value)}
              placeholder="MM"
              maxLength={2}
            ></input>
            <input
              className="inp-date rounded-lg ml-2 p-2"
              placeholder="YY"
              maxLength={2}
              onChange={(e) => setInputYy(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <label>CVC</label>
          <input
            className="inp-cvc rounded-lg p-2"
            placeholder="e.g. 123"
            maxLength={3}
            onChange={(e) => setInputCvc(e.target.value)}
          ></input>
        </div>
      </div>
      <button
        className="btn mt-10 p-3 text-white rounded-xl w-full"
        onClick={confirmClick}
      >
        Confirm
      </button>
    </form>
  );
};

export default CardInputs;
