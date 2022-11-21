export interface CardInputsProps {
  cvc: string;
  setCvc: (value: string) => void;
  cardNumber: string;
  setCardNumber: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  day: string;
  setDay: (value: string) => void;
  month: string;
  setMonth: (value: string) => void;
  ifFormIscorrect: boolean;
  setIfFormIscorrect: (value: boolean) => void;
}

export interface ThankYouProps{
  setName: (value: string) => void;
  setMonth:(value: string) => void;
  setCvc:(value: string) => void;
  setCardNumber:(value: string) => void;
  setDay:(value: string) => void;
  setIfFormIscorrect:(value: boolean) => void;
}
