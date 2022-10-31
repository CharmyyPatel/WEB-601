import React, {useCallback, useState} from "react";

export default function MyComponent(){
    
    const [temp, setTemp] = useState(0)
    const [mode, setMode] = useState("Auto")
    const [state, setState] = useState("Celsius" || "Fahrenheit")

    function convertState(){

        if (state === "Celsius"){
            setTemp((temp*1.8)+32)
        }
        if (state === "Fahrenheit"){
            setTemp((temp-32)/1.8)
        }
    }

    return(
        <div>
            <h1> Temperature: {temp}&#176; {state} </h1>
            <button onClick={()=>{setTemp(temp+1)}}>+</button>
            <button onClick={()=>{setTemp(temp-1)}}>-</button>

            <hr />
            <br />

            <h1> Mode: {mode}</h1>
            <button onClick={()=>{setMode("Cold")}}>Cold</button>
            <button onClick={()=>{setMode("Hot")}}>Hot</button>
            <button onClick={()=>{setMode("Auto")}}>Auto</button>

            <br />
            <hr />
            <br />

            <button onClick={()=>{setState("Celsius")}}>Celsius</button>
            <button onClick={()=>{setState("Fahrenheit")}}>Fahrenheit</button>

            <h1> Converted State: {temp}&#176; {state} </h1>
            <button onClick={()=>{convertState()}}>Converted State</button>

            
        </div>
    )
}