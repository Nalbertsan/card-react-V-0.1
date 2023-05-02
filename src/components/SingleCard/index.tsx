import React from "react";
import Cardfront from '../Cardfront';
import Cardback from '../Cardback';
import './flip.css';

interface SingleCardProps {
    flipped: boolean;
}

const SingleCard = ({onClick}:any) =>{

  return (
    <div className="creditcard" onClick={onClick}>
                  <Cardfront/>
                  <Cardback/>
              </div>
  );
}

export default SingleCard;