import axios from "axios";
function Test(img){
    console.log(img)
    const response = document.getElementById("test01");
    response.innerHTML =img;
}
export default Test