import React, { useState } from 'react';
import UPayContext from '../../use/UPayContext';
import { Input, Button } from '@material-tailwind/react';

function formatDate(value: string) {
    return value
        .replace(/[^0-9]/g, "")
        .replace(/^([2-9])$/g, "0$1")
        .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
        .replace(/^0{1,}/g, "0")
        .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export default function Cardform() {



    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [cvv, setCvv] = useState("");
    const { setInfoCard } = UPayContext();




    const handleCardNumber = (e: any) => {
        const number = e.target.value;

        setInfoCard({
            cardNumber: number.replace(/[^0-9]/g, '').replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, ''),
            name: name,
            date: date,
            cvv: cvv,
            fucus: true
        })
        setCardNumber(number.replace(/[^0-9]/g, '').replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, ''));

    }

    const handleName = (e: any) => {
        const name = e.target.value.replace(/[^a-zA-Z ]/g, "");
        setInfoCard({
            cardNumber: cardNumber,
            name: name,
            date: date,
            cvv: cvv,
            fucus: true
        });
        setName(name);
    }

    const handleCvv = (e: any) => {
        const cvv = e.target.value.replace(/[^0-9]/g, "");
        setInfoCard({
            cardNumber: cardNumber,
            name: name,
            date: date,
            cvv: cvv,
            fucus: false
        })
        setCvv(cvv);
    }


    const handleDate = (e: any) => {
        const dateFormated = formatDate(e.target.value);
        setInfoCard({
            cardNumber: cardNumber,
            name: name,
            date: dateFormated,
            cvv: cvv,
            fucus: true
        });
        setDate(dateFormated);
    }



    return (
        <div className="flex w-92 h-full items-start justify-center">
            <div className='flex flex-col items-center gap-3'>
                <Input size='md' label='Nome do Titular' value={name} maxLength={20} minLength={3} onChange={(e) => { handleName(e) }} containerProps={{ className: "md:min-w-[90px]" }} onClick={(e)=>handleName(e)}/>
                <Input label='Número do Cartão' maxLength={19} value={cardNumber} type='text' containerProps={{ className: "md:min-w-[90px]" }} onChange={(e) => { handleCardNumber(e) }} onClick={(e)=>handleCardNumber(e)}/>
                <div className="my-1 flex-col flex md:flex-row items-center gap-3  ">
                    <Input label='Validade(MM/AA)' value={formatDate(date)} onChange={(e) => { handleDate(e) }} maxLength={5} containerProps={{ className: "md:min-w-[90px]" }}onClick={(e) => { handleDate(e)}} />
                    <Input label="CVV" value={cvv} onChange={(e) => { handleCvv(e) }} maxLength={4} containerProps={{ className: "md:min-w-[90px]" }} onClick={(e)=>handleCvv(e)}/>
                </div>
                <Button fullWidth>Salvar</Button>;
            </div>
        </div>
    )
}
