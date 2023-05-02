import React from "react";
import SingleCard from "../SingleCard";
import { CSSTransition } from 'react-transition-group';

export default function FlippableCard() {

  const [flipped, setFlipped] = React.useState(true);

  return (
        <div className="flipCreditCard">
            <CSSTransition in={flipped} timeout={3000} classNames="flip">
                <SingleCard onClick={()=>{
                    setFlipped((prev) => !prev);
                }}/>
            </CSSTransition>
        </div>);
}