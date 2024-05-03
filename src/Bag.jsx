import {useEffect, useState,createContext, useContext} from "react";
import {useParams} from "react-router-dom";

function Bag() {
  const { inBag } = useParams('');
  const [bagItem, setBagItem] = useState(undefined);

  useEffect(() => {
    console.log("Nothing!!!");
    return () => {};
  }, [inBag]);
alert("don't have any item")
}
export default Bag
