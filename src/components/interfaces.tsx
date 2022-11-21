export interface CardInputsProps {
  setCvc: (value: number) => void;
  setCardNumber: (value: string | number) => void;
  setName: (value: string) => void;
  setDay: (value: number) => void;
  setMonth: (value: number) => void;
  setIfFormIscorrect: (value: boolean) => void;
  ifFormIscorrect: boolean
}

export interface ThankYouProps {
  setName: (value: string) => void;
  setMonth: (value: number) => void;
  setCvc: (value: number) => void;
  setCardNumber: (value: string | number) => void;
  setDay: (value: number) => void;
  setIfFormIscorrect: (value: boolean) => void;
}
