import React from 'react';
import Cardform from '../components/Cardform';
import FlippableCard from '../components/FlippableCard';
import { PayContext } from '../contexts/payContext';



export default function Payment() {

    const [infoCard, setInfoCard] = React.useState({
        cardNumber: "0123 4567 8910 1112",
        name: "***** ***** *****",
        date: "00/00",
        cvv: "123"
    })

    return (
        <PayContext.Provider value={{infoCard,setInfoCard}}>
            <div className="App">
                <div className="payment-title">
                    <h1>Informações de Pagamento</h1>
                </div>
                <div className="Cardplusform">
                    <FlippableCard/>
                    <Cardform />
                </div>
            </div>
        </PayContext.Provider>
    )
}