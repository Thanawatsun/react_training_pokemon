import React from "react";
import Child from "./Child";
export default function Parent( {array}){

    return (
        <>
        <Child score={"2-3"} home={"spur"} away={"maaaa"}/>
        {array.map((text) => <p>{text}</p>
    )}
        </>
    )
}