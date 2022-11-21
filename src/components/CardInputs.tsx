import { useState } from "react";
import "../index.css";
import { CardInputsProps } from "./interfaces";

const CardInputs = ({
  setCvc,
  setCardNumber,
  setName,
  setDay,
  setMonth,
  setIfFormIscorrect,
  ifFormIscorrect,
}: CardInputsProps) => {
  const [inputCardNum, setInputCardNum] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputMm, setInputMm] = useState(0);
  const [inputYy, setInputYy] = useState(0);
  const [inputCvc, setInputCvc] = useState(0);
  const [nameError, setNameError] = useState("");
  const [mmError, setMmError] = useState("");
  const [yyError, setYyError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [numberError, setNumberError] = useState("");
  //const [borderColor, setBorderColor] = useState(true);

  const submitFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let res = inputCardNum.replace(/(.{4})/g, "$1 ");
    if (inputName == "") {
      setNameError("Can’t be blank");
    } else {
      setNameError("");
    }
    if (String(inputMm).length !== 2) {
      setMmError("Can’t be blank");
    } else {
      setMmError("");
    }
    if (String(inputYy).length !== 2) {
      setYyError("Can’t be blank");
    } else {
      setYyError("");
    }
    if (isNaN(+inputCardNum)) {
      setNumberError("Wrong format, numbers only");
    } else if (inputCardNum.length < 16) {
      setNumberError("Can’t be blank");
    } else {
      setNumberError("");
    }
    if (String(inputCvc).length !== 3) {
      setCvcError("Can’t be blank");
    } else {
      setCvcError("");
    }
    if (
      inputName !== "" &&
      inputCardNum.length == 16 &&
      String(inputCvc).length == 3 &&
      String(inputMm).length == 2 &&
      String(inputYy).length == 2
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
            style={
              nameError !== ""
                ? { borderColor: "red" }
                : { borderColor: "#DFDEE0" }
            }
          ></input>
          <p className="text-red-600">{nameError}</p>
        </div>
        <div className="mt-4">
          <label>CARD NUMBER </label>
          <input
            style={
              numberError == ""
                ? { borderColor: "#DFDEE0" }
                : { borderColor: "red" }
            }
            maxLength={16}
            className="inp rounded-lg p-2 "
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={inputCardNum}
            onChange={(e) => setInputCardNum(e.target.value)}
          ></input>
          <p className=" text-red-600"> {numberError}</p>
        </div>
        <div className="flex mt-4">
          <div>
            <label>EXP. DATE (MM/YY)</label>
            <div className="flex">
              <div>
                <input
                  style={
                    mmError == ""
                      ? { borderColor: "#DFDEE0" }
                      : { borderColor: "red" }
                  }
                  className="inp-date rounded-lg p-2"
                  onChange={(e) => setInputMm(Number(e.target.value))}
                  placeholder="MM"
                  maxLength={2}
                ></input>
                <p className=" text-red-600">{mmError}</p>
              </div>
              <div>
                <input
                  style={
                    yyError == ""
                      ? { borderColor: "#DFDEE0" }
                      : { borderColor: "red" }
                  }
                  className="inp-date rounded-lg ml-2 p-2"
                  placeholder="YY"
                  maxLength={2}
                  onChange={(e) => setInputYy(Number(e.target.value))}
                ></input>
                <p className=" text-red-600">{yyError}</p>
              </div>
            </div>
          </div>
          <div>
            <label>CVC</label>
            <input
              style={
                cvcError == ""
                  ? { borderColor: "#DFDEE0" }
                  : { borderColor: "red" }
              }
              className="inp-cvc rounded-lg p-2"
              placeholder="e.g. 123"
              maxLength={3}
              onChange={(e) => setInputCvc(Number(e.target.value))}
            ></input>
            <p className="text-red-600">{cvcError}</p>
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
