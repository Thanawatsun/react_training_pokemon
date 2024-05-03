import { useContext,useState,useEffect } from 'react';
import { MyContext } from './MyContext';
import { useParams } from "react-router-dom";
import { fetchPokemon } from "./api/fetchPokemon";

function MyComponent(props) {
  
  const { text, setText } = useContext(MyContext);

  const [pokeName, setpokeName] = useState(props.pokemon);
  const [pokeDex, setPokeDex] = useState(undefined);

  useEffect(() => {
    setpokeName(props.pokemon)
      fetchdata();
      return () => {};
  }, [props.pokemon]);

  const fetchdata = async () => {
      try {
        
          const pokemonData = await fetchPokemon(props.pokemon);
          if (pokemonData) {
            console.log(pokemonData)
              setPokeDex({
                  name: pokemonData?.name,
                  height: pokemonData?.height,
                  sprites: pokemonData?.sprites.other.showdown.back_default,
                  hp: pokemonData?.stats[0].base_stat,
                  maxhp: pokemonData?.stats[0].base_stat,
                  atk: pokemonData?.stats[1].base_stat,
                  
              });
          } else {
              setPokeDex(undefined);
          }
      } catch (error) {
          console.error("Error fetching Pokemon data:", error);
      }
  };
  console.log(pokeDex)
  setText(pokeDex)
  console.log(text)
  return (
    <div>
      
      
    </div>
  );
}

export default MyComponent;