import { useState } from "react";
import withCounter  from "./withCounter";

const CounterComponent = (props)=>{

    
    return (
        <div>
            <button onClick={props.incrementCounter} >Click Me</button>
            <h2>Counter : {props.counterValue}</h2>
            <h3>Name : {props.name}</h3>
        </div>
    );

}

export default withCounter(CounterComponent);