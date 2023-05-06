import React from "react";
import { CSSTransition } from 'react-transition-group';
import './flip.css';
import Cardfront from '../Cardfront';
import Cardback from '../Cardback';
import {
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function FlippableCard() {

  const [flipped, setFlipped] = React.useState(true);
  const nodeRef = React.useRef(null);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  }

  return (
    <div className="h-full w-full ">
      <div className=" w-full h-full flex justify-center perspective-1000 items-end" >
        <CSSTransition in={flipped} timeout={3000} classNames="flip" nodeRef={nodeRef}>
          <div ref={nodeRef} onClick={handleClick} className="creditcard max-w-md w-full items-center flex ">
            <Cardfront />
            <Cardback />
          </div>
        </CSSTransition>
      </div>
    </div>);
}