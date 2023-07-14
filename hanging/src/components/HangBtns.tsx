import {letters}  from "../helpers/letters";





export function HangBtns() {
  return (
    letters.map((letter) => (
        <button key={letter}>
          {letter}
        </button>
      ))
  );
}
