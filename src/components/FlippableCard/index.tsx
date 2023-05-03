import React from "react";
import { CSSTransition } from 'react-transition-group';
import './flip.css';
import Cardfront from '../Cardfront';
import Cardback from '../Cardback';


export default function FlippableCard() {

  const [flipped, setFlipped] = React.useState(true);
  const nodeRef = React.useRef(null);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  }

  return (
    
        <div className="flipCreditCard" >
            <CSSTransition in={flipped} timeout={3000} classNames="flip" nodeRef={nodeRef}>
                <div ref={nodeRef} onClick={handleClick} className="creditcard">
                    <Cardfront/>
                    <Cardback/>
                </div>
            </CSSTransition>
        </div>);
}