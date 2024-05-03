import axios from "axios";
export async function fetchPokemon(pokeName){
    try{
        var response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        return response.data
    }
    catch (error){
        return Promise.reject()
    }
}
/*
fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
.then((res)=> res.json())
.then((data)=>{
    console.log(data)
    setPokeDex({
        name: data?.name,
        height: data?.height,
    });
})
.catch((err) =>setPokeDex(undefined))*/