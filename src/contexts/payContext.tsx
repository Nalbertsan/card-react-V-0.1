import {createContext} from "react";

interface PayContextType {
  infoCard: { 
    cardNumber: string,
    name: string,
    date: string,
    cvv: string
  };
  setInfoCard: React.Dispatch<React.SetStateAction<{ 
    cardNumber: string,
    name: string,
    date: string,
    cvv: string 
  }>>;
}

  
  export const PayContext = createContext<PayContextType>({
    infoCard: { cardNumber: "" ,
    name: "",
    date: "",
    cvv: ""},
    setInfoCard: () => {},
  });
  

