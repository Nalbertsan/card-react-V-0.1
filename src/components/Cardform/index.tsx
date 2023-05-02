import React, {useState} from 'react';



export default function Cardform() {

    const [value, setValue] = useState("");

    const handleDate = (e:any) => {
        if (e.key === "Backspace") {
            setValue(value.slice(0, -1));
            if(value.length === 3) {
                setValue(value.slice(0, -1));
            }
            return;
        }
        if(value.length >= 7) return;
        
        if (!/[0-9]/.test(e.key)){
            return;
        }

        if(value.length === 0 && parseInt(e.key) > 1){
            return
        }

        if(value.length === 1 && parseInt(value) === 1 && parseInt(e.key) > 2 ){
            return
        }

        if(value.length === 1 && parseInt(value) === 0 && parseInt(e.key) === 0 ){
            return
        }

        if(value.length === 1){
            setValue(value +e.key+ "/");
            return;
        }
        if(value.length === 2 && !value.match("/")){
            setValue(value + "/" + e.key);
            return;
        }

        if(value.length === 3 && parseInt(e.key) < 2 ){
            return
        }

        if(value.length === 5 && parseInt(value[4]) === 0 && parseInt(value[3]) === 2 && parseInt(e.key) < 2){
            return
        }

        if(value.length === 6 && parseInt(value[5]) === 2 && parseInt(value[4]) === 0 && parseInt(value[3]) === 2  && parseInt(e.key) < 3){
            return
        }

        const inputDate = e.target.value + e.key;
        setValue(inputDate);
  };

    return(
        <div className="form-container">
            <div className="field-container">
                <label htmlFor="name">Nome do Titular</label>
                <input id="name" maxLength={30} minLength={3} type="text"></input>
            </div>
            <div className="field-container">
                <label htmlFor="cardnumber">Número do Cartão</label>
                <input id="cardnumber" type="text" maxLength={16} minLength={13} pattern="[0-9]*" onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
                }
            }}></input>
            </div>
            <div className="field-container">
                <label htmlFor="expirationdate">Validade</label>
                <input id="expirationdate"  placeholder='MM/AAAA' onKeyDown={(event) => {handleDate(event);
                }} value={value} ></input>
            </div>
            <div className="field-container">
                <label htmlFor="securitycode">CVV</label>
                <input id="securitycode" type="text" pattern="[0-9]*" maxLength={4} minLength={3} onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
                }
            }}></input>
    </div>
</div>
    )
}