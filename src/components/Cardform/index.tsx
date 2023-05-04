import React, { useState } from 'react';
import UPayContext from '../../use/UPayContext';
import { Input } from '@material-tailwind/react';

function formatDate(value: string) {
    return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export default function Cardform() {



    const [cardNumber, setCardNumber] = useState("0123 4567 8910 1112");
    const [name, setName] = useState("***** ***** *****");
    const [date, setDate] = useState("00/00");
    const [cvv, setCvv] = useState("123");
    const { setInfoCard } = UPayContext();




    const handleCardNumber = (e: any) => {

        let noSpace = e.target.value.replace(/\s/g, '');
        while (noSpace.length < 16) {
            noSpace += "*";

        }

        setInfoCard({
            cardNumber: noSpace.replace(/[^0-9*]/g, '').replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, ''),
            name: name,
            date: date,
            cvv: cvv
        })
        setCardNumber(noSpace.replace(/[^0-9*]/g, '').replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, ''));

    }

    const handleName = (e: any) => {
        setInfoCard({
            cardNumber: cardNumber,
            name: e.target.value,
            date: date,
            cvv: cvv
        });
        setName(e.target.value);
    }

    const handleCvv = (e: any) => {
        setInfoCard({
            cardNumber: cardNumber,
            name: name,
            date: date,
            cvv: e.target.value
        })
        setCvv(e.target.value);
    }

    const handleDateCard = (e: any) => {
        setInfoCard({
            cardNumber: cardNumber,
            name: name,
            date: date,
            cvv: cvv
        })
  
    }

    const handleDate = (value: string) => {
        const dateFormated = formatDate(value);
        setInfoCard({
            cardNumber: cardNumber,
            name: name,
            date: dateFormated,
            cvv: cvv
        });
        setDate(dateFormated);
    }

    return (
        <div className="flex flex-col w-72 items-end gap-3">
            <div className="field-container">
                <label htmlFor="name">Nome do Titular</label>
                <input id="name" maxLength={30} minLength={3} type="text" onChange={(e) => { handleName(e) }}></input>
            </div>
            <div className="my-1 items-center gap-4">
                <Input label='Número do Cartão'/>
            </div>
            <div className="my-1 flex items-center gap-4">
                <Input label='Validade' value={formatDate(date)} onChange={(e) => { handleDate(e.target.value) }} maxLength={5} containerProps={{ className: "min-w-[72px]" }} />
                <Input label="CVV" onChange={(e) => { handleCvv(e) }} maxLength={4} containerProps={{ className: "min-w-[72px]" }} />
            </div>
        </div>
    )
}