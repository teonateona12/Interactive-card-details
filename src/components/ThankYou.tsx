import "../index.css";
import imgComplate from "../images/icon-complete.svg";
import { ThankYouProps } from "./interfaces";

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
    setMonth(0);
    setCvc(0);
    setDay(0o0);
    setIfFormIscorrect(true);
  };
  return (
    <div className="mt-14 lg:w-[50%] lg:mt-[40%]">
      <img className="m-auto" src={imgComplate} />
      <h1 className="text-center mt-9 text-3xl tracking-widest">THANK YOU!</h1>
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
