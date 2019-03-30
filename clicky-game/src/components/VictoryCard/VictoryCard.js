import React from "react";
import "./VictoryCard.css"


const VictoryCard = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <iframe title="destruction of the one ring" src="https://giphy.com/embed/iOkOpfXZZl44M" width="700px" height="700px" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                <button className="reset-btn" onClick={props.handleReset}>New Game</button>
                </div>
            </div>
        </div>
    );
};

export default VictoryCard;