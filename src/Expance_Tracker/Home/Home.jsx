import React from "react";
import "./Home.css";
import Date from "../Date/Date";


const Home = (props) => {

  
    return (
        <>
            <div className="expence-item">
                    {/* <Date date={props.date}/> */}
                <div className="expence-item__description">
                    <h2>{ props.title }</h2>
                    <div className="expence-item__price">{ props.amount }</div>
                </div>
            </div>
        </>
    );
};

export default Home;
