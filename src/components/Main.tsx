import bgImg from "../images/bg-main-mobile.png";
import cardImg from "../images/bg-card-back.png";
import cardImgFront from "../images/bg-card-front.png";
import logo from "../images/card-logo.svg";
import CardInputs from "./CardInputs";
import ThankYou from "./ThankYou";
import { useState } from "react";

const Main = () => {
  const [cvc, setCvc] = useState("0 0 0");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("JANE APPLESEED");
  const [day, setDay] = useState("00");
  const [month, setMonth] = useState("00");
  const [ifFormIscorrect, setIfFormIscorrect] = useState(true);
  return (
    <div className="lg:flex  ">
      <img className="w-full lg:w-[40%] lg:h-[170vh]" src={bgImg} />
      <div className="p-5 absolute sm:p-8 lg:p-[15%] lg:flex">
        <div className="flex flex-col-reverse">
          <div className="lg:mt-[20%] lg:ml-[10%]">
            <img className="-mt-[70%] w-[80%] ml-[20%] lg:m-0 " src={cardImg} />
            <h1 className="ml-[77%] text-white -mt-[26%] lg:ml-[65%] ">{cvc}</h1>
          </div>
          <div className="">
            <img className="w-[77%] " src={cardImgFront} />
            <div className="-mt-[43%] p-3 w-[75%] sm:p-8">
              <img src={logo} />
              <h1 className="text-white mt-[5%]">{cardNumber}</h1>
              <div className="flex justify-between mt-[5%]">
                <h1 className="text-white ">{name}</h1>
                <h1 className="text-white">{`${day}/${month}`}</h1>
              </div>
            </div>
          </div>
        </div>
        {ifFormIscorrect ? (
          <CardInputs
            cvc={cvc}
            setCvc={setCvc}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            name={name}
            setName={setName}
            day={day}
            setDay={setDay}
            month={month}
            setMonth={setMonth}
            ifFormIscorrect={ifFormIscorrect}
            setIfFormIscorrect={setIfFormIscorrect}
          />
        ) : (
          <ThankYou
            setName={setName}
            setCvc={setCvc}
            setCardNumber={setCardNumber}
            setDay={setDay}
            setMonth={setMonth}
            setIfFormIscorrect={setIfFormIscorrect}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
