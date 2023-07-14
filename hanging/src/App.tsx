import { useEffect, useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";
import { getRandomWord } from "./helpers/getRandomWord";
import { HangBtns } from "./components/HangBtns";

function App() {
  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //si perdió
  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  //si ganó
  useEffect(() => {
    const currnHiddenWord = hiddenWord.split(" ").join("");
    if (currnHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord]);

  const checkLetter = (letter: string) => {
    if (lose || won) return;
    console.log("la palabra escondida es " + word);//eliminar esta linea
    console.log(letter);
    if (!word.includes(letter)) {
      
      setAttempts(Math.min(attempts + 1, 9));
    }

    const hiddenWordArray = hiddenWord.split(" ");

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
      setHiddenWord(hiddenWordArray.join(" "));
    }
    //setAttempts(Math.min(attempts + 1, 9));
  };

  const restart = () => {
    //nuevo juego sin reiniciar el navegador
    let newWord = getRandomWord();
console.log("nuevo juego en curso " + newWord);
    setWord(newWord);
    setHiddenWord( "_ ".repeat(newWord.length))
    setAttempts(0);
    setLose(false);
    setWon(false);
  };

  return (
    <div className="App">
      {/*Imágenes*/}
      <HangImage imageNumber={attempts} />
      {/*Palabra oculta*/}
      <h3>{hiddenWord}</h3>
      {/*Contador de intentos*/}
      <h3>Turnos disponibles: {attempts}</h3>
      {/*mensaje en caso de perder */}
      {lose ? <p>Perdiste, la palabra correcta es {word} </p> : ""}
      {/*mensaje en caso de ganar */}
      {won ? <p>Ganaste</p> : ""}

      {/* Botones de juego */}
      {letters.map((letter) => (
        <button onClick={() => checkLetter(letter)} key={letter}>
          {letter}
        </button>
      ))}
      <hr></hr>

      {/* Botones de juego llamdos desde clase -> test */}
      <HangBtns />
      <hr></hr>
      <button onClick={restart}>¿Reiniciar?</button>
    </div>
  );
}

export default App;
