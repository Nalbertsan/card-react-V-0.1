import React from 'react';
import Cardform from '../components/Cardform';
import FlippableCard from '../components/FlippableCard';
import { PayContext } from '../contexts/payContext';



export default function Payment() {

    const [infoCard, setInfoCard] = React.useState({
        cardNumber: "",
        name: "",
        date: "",
        cvv: ""
    })

    return (
        <PayContext.Provider value={{ infoCard, setInfoCard }}>
            <div className="flex h-screen w-screen justify-center gap-y-12">
                    <div className="flex flex-col justify-center items-center h-full w-4/6 ">
                        <FlippableCard />
                        <Cardform />
                    </div>
            </div>
        </PayContext.Provider>
    )
}