import React, { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "./api/fetchPokemon";
import { MyContext } from './MyContext';

const srcboss = "https://gbf.wiki/images/d/d6/Npc_zoom_3991054000_01.png?20190307155156";

function Pokedex() {
    const { pokeName } = useParams();
    const [pokeDex, setPokeDex] = useState(undefined);

    useEffect(() => {
        fetchdata();
        return () => {};
    }, [pokeName]);

    const fetchdata = async () => {
        try {
            
            const pokemonData = await fetchPokemon(pokeName);
            if (pokemonData) {
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
    
    return (

            <div>
                {pokeDex !== undefined ? (
                    <>
                    
                        <img id="yourpokemon" src={pokeDex?.sprites} alt="" />
                        <img id="boss" src={srcboss} alt="" />
                        <img id="enemeyHp" src="http://localhost:5173/src/image/EmHP_Bars-removebg-preview.png" alt="" />
                        <img id="playerHp" src="http://localhost:5173/src/image/DS_DSi_-_Pokemon_Platinum_-_HP_Bars-removebg-preview.png" alt="" />
                    </>
                ) : (
                    <b>Not found pokemon!!</b>
                )}
                {/* Pass pokeDex as a prop to Fight component */}
                
            </div>

    );
}

export default Pokedex;
