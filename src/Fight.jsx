import {useEffect, useState,createContext, useContext,useRef } from "react";
import {useParams} from "react-router-dom";
import ReactDOM from 'react-dom/client';
function Fight(){
  const { inBag } = useParams('');
  const [bagItem, setBagItem] = useState(undefined);
  let previousInputValue = useRef("");

    // Now you can use pokeDex here in your Fight component
    console.log(localStorage.getItem("atk"))
    let enemyHp = localStorage.getItem('enemyhp')
    localStorage.setItem('enemyhp',enemyHp-1)
    console.log(enemyHp)
  useEffect(() => {
    
    
    return () => {};
  }, [inBag]);
  
  return (
<div>
<div id="cardBoss">
                        <h2>HP: {localStorage.getItem('enemyhp')}/{30}</h2>
                        </div>
        </div>
  );
}
export default Fight
