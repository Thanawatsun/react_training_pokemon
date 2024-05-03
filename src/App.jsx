import {React , useState, createContext, useContext,useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Pokedex from './Pokedex';
import Home from './components/Home';
import Fight from './Fight';
import Bag from './Bag';
import ReactDOM from 'react-dom/client';
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";
import PokemonBoss from "./PokemonBoss";
import Test01 from './Test01';

// สร้าง Context
function App() {
  const [srcboss, setsrcboss] = useState("https://gbf.wiki/images/d/d6/Npc_zoom_3991054000_01.png?20190307155156");
  const [srcPokemon, setSrcPokemon] = useState("");
  let [bossInfo, setBossInfo] = useState();
  let [text, setText] = useState();
  let pokemonInfo =(<></>)
  let pokemonHp =(<></>)
  let pokemonBoss =(<></>)
  const [selectPokemon, setSelectPokemon] = useState(false);
  const [testValue, setTestValue] = useState();
  const [bossHp, setBossHp] = useState(100);
  const [playerHp, setPlayerHp] = useState(0);
  const [pokemon, setpokemon] = useState(['ditto', 'bulbasaur', 'butterfree' ,'jigglypuff','honedge',
  'meowth', 'porygon', 'meowscarada', 'golisopod', 'pichu']);
  function run(){
    window.location.href = "http://localhost:5173/"
  }
  
  useEffect(() => {
    <MyComponent pokemon={testValue} />
    console.log(testValue)
  }, [testValue]);
  useEffect(() => {
    if (text != undefined){
    console.log(text)
    Test01(text)
    setstart()
  }
  }, [text]);

  useEffect(() => {
    if (text != undefined){
      bossdead()
      playerdead()
  }
  }, [bossHp,playerHp]);

  useEffect(() => {
    if (selectPokemon){
       const myelement = (
      renderPokemonLinks(pokemon)
      );
      const container = document.getElementById('textpokemon');
    const root = ReactDOM.createRoot(container);
    root.render(
      myelement
    )
    }
   
  }, [pokemon]);

  if (text != undefined){
    
    pokemonHp = (
      <>
      <div id="cardHp">
      <h3>Name: {text?.name}</h3>
      <h3>HP: {playerHp}/{text?.maxhp} Atk: {text?.atk}</h3>
      </div>      
      <div id="cardBoss">
        <h3>Boss Name: {bossInfo?.name}</h3>
      <h3>HP: {bossHp}/{100} Atk: {bossInfo?.atk}</h3>
      </div>
      </>
    )
    let sizePokemon = 120+text.height
    let topPokemon = 60-text.height*2
    pokemonInfo = (
      <>
      <div id="yourpokemon">
              <img style={{
        position: 'absolute',
        width: sizePokemon,
        top: topPokemon}} src={srcPokemon} alt="" />
      </div>

      <img id="enemeyHp" src="http://localhost:5173/src/image/EmHP_Bars-removebg-preview.png" alt="" />
      <img id="playerHp" src="http://localhost:5173/src/image/DS_DSi_-_Pokemon_Platinum_-_HP_Bars-removebg-preview.png" alt="" />
      </>
    )

    }
    if(bossInfo != undefined && bossHp > 0){
      
      pokemonBoss = (
      <div id="boss">
      <img style={{
        position: 'absolute',
        width: '300px',
        top: '8vh'
      }} src={bossInfo.sprites} alt="" />
      </div>);
      
    }
  function fight(){
    if (text != undefined && playerHp != 0 && bossHp != 0){
      setBossHp(bossHp-text.atk)
      if (bossHp-text.atk > 0){
        setPlayerHp(playerHp-bossInfo.atk)
      }
    }
  }
  function bossdead(){
    if(bossHp <= 0){
      setBossHp(0)
    }
  }
  function playerdead(){
    if(playerHp <= 0){
      setSelectPokemon(true)
      setSrcPokemon()
      setPlayerHp(0)
      setpokemon(prevPokemon => prevPokemon.filter(name => name !== text.name));
    }
  }
  function setstart(){
    
    setPlayerHp(text.hp)
    setSrcPokemon(text?.sprites)
  }
  const handleClick = (pokemonValue) => {
    setSelectPokemon(false)
    setTestValue(pokemonValue);
  };
  function renderPokemonLinks(pokemonNames) {
    return pokemonNames.map(pokemon => (
        <button onClick={() => handleClick(pokemon)}>{pokemon}</button>
    ));
  }
  function bag() {
alert("no item in bag")
  }

  const pickPokemon = () => {
  const myelement = (
  renderPokemonLinks(pokemon)
  );
  const container = document.getElementById('textpokemon');
const root = ReactDOM.createRoot(container);
root.render(
  myelement
);};

  return (
    <>
<div id='pokemon_battel'>
<div style={{
  margin: 0,
  padding: 0,
  width: '100%',
  height: '80%',
  display: 'block',
  backgroundImage: 'url(src/image/pokemonBg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  justifyContent: 'center',
  alignItems: 'flex-end',
  border: '2px solid', // ต้องระบุขนาดของเส้นและประเภท เช่น '2px solid black'
  flexWrap: 'wrap',
  flexDirection: 'row',
  maxHeight: '1000px'
}}></div>

    <div id='pokemon_acton'>
    <div id="textpokemon"></div>
    
    <div id="butonaction">
        <button id='butonaction' onClick={fight}>Fight</button>
        <button id='butonaction' onClick={bag}>Bag</button>
    <button id='butonaction' onClick={pickPokemon}>Pokemon</button>
    <button id='butonaction' onClick={run}>Run</button>
    </div>
</div>

<div>
      <MyContext.Provider value={{ text, setText }}>
      <MyComponent pokemon={testValue} />
      </MyContext.Provider>
    </div>
    <div>
      <MyContext.Provider value={{ bossInfo, setBossInfo }}>
      <PokemonBoss pokemon={'venusaur'} />
      </MyContext.Provider>
    </div>
</div>
<div>
{pokemonBoss}
  {pokemonInfo}
  {pokemonHp}
</div>

    </>

  )
}
export default App
