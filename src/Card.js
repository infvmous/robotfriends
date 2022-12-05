import React from "react";
import 'tachyons';

const Card = ({name, email, id}) => {
   
    return  (
        <div className="bg-light-green br4 ma2 grow shadow-5 tc fl fl w-30 pa2 mr2">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2 className="serif { font-family: georgia, times, serif; }" >{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;