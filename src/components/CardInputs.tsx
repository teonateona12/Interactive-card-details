import { useState, useEffect } from "react";
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
  const [nameError, setNameError] = useState("");
  const [mmError, setMmError] = useState("");
  const [yyError, setYyError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [numberError, setNumberError] = useState("");

  const submitFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let res = inputCardNum.replace(/(.{4})/g, "$1 ");

    if (inputName == "") {
      setNameError("Can’t be blank");
    } else {
      setNameError("");
    }
    if (inputMm == "") {
      setMmError("Can’t be blank");
    } else {
      setMmError("");
    }
    if (inputYy == "") {
      setYyError("Can’t be blank");
    } else {
      setYyError("");
    }
    if (inputCardNum.length < 16) {
      setNumberError("Can’t be blank");
    } else {
      setNumberError("");
    }
    if (inputCvc.length < 2) {
      setCvcError("Can’t be blank");
    } else {
      setCvcError("");
    }
    if (
      inputName !== "" &&
      inputCardNum.length == 16 &&
      inputCvc.length == 3 &&
      inputMm.length == 2 &&
      inputYy.length == 2
    ) {
      setCardNumber(res);
      setName(inputName);
      setDay(inputMm);
      setMonth(inputYy);
      setCvc(inputCvc);
      setIfFormIscorrect(false);
    }
  };

  return (
    <>
      <form
        onSubmit={submitFunction}
        className="mt-[20%] sm:mt-[30%] lg:w-[50%]"
      >
        <div>
          <label>CARDHOLDER NAME </label>
          <input
            className="inp rounded-lg p-2"
            onChange={(e) => setInputName(e.target.value)}
            type="text"
            placeholder="e.g. Jane Appleseed"
          ></input>
          <p>{nameError}</p>
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
          <p>{numberError}</p>
        </div>
        <div className="flex mt-4">
          <div>
            <label>EXP. DATE (MM/YY)</label>
            <div className="flex">
              <div>
                <input
                  className="inp-date rounded-lg p-2"
                  onChange={(e) => setInputMm(e.target.value)}
                  placeholder="MM"
                  maxLength={2}
                ></input>
                <p>{mmError}</p>
              </div>
              <div>
                <input
                  className="inp-date rounded-lg ml-2 p-2"
                  placeholder="YY"
                  maxLength={2}
                  onChange={(e) => setInputYy(e.target.value)}
                ></input>
                <p>{yyError}</p>
              </div>
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
            <p>{cvcError}</p>
          </div>
        </div>
        <button
          type="submit"
          className="btn mt-10 p-3 text-white rounded-xl w-full"
        >
          Confirm
        </button>
      </form>
    </>
  );
};

export default CardInputs;
