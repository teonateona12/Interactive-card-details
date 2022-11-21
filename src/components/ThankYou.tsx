import "../index.css";
import imgComplate from "../images/icon-complete.svg";
import { ThankYouProps } from "./interfaces";
import CardInputs from "./CardInputs";

const ThankYou = ({
  setName,
  setMonth,
  setCvc,
  setCardNumber,
  setDay,
  setIfFormIscorrect,
}: ThankYouProps) => {

  const btnContinue = () => {
    setName("JANE APPLESEED");
    setCardNumber("0000 0000 0000 0000");
    setMonth("MM");
    setCvc("000");
    setDay("YY");
    setIfFormIscorrect(true)
   
  };
  return (
    <div className="mt-14 lg:w-[50%]">
      <img className="m-auto" src={imgComplate} />
      <h1 className="text-center mt-9">TKANK YOU!</h1>
      <p className="text-center mt-3">We’ve added your card details</p>
      <button
        className="btnCont w-full p-2 mt-6 rounded-lg text-white"
        onClick={btnContinue}
      >
        Continue
      </button>
    </div>
  );
};
export default ThankYou;
