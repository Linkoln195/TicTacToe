import classes from './App.module.css'
import { useState } from 'react';

function App() {
  let Player = "X";
  let winComb = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
  let field = new Array(9);
  const [winTitleVisibility, setWinTitleVisibility] = useState('hidden');
  const [buttonVisibility, setButtonVisibility] = useState('hidden');

  const onFieldClick = (event) => {
    let clickedField = event.target.id;

    if (event.target.innerHTML == "") {
      if (Player == "X") {
        field[clickedField - 1] = Player;
        event.target.innerHTML = field[clickedField - 1];
        checkWin(clickedField, Player);
        console.log(clickedField);

        Player = "O";
      } else if (Player == "O") {
        field[clickedField - 1] = Player;
        event.target.innerHTML = field[clickedField - 1];
        checkWin(clickedField, Player);
        console.log(clickedField);

        Player = "X";
      }
    }
  }

  const checkWin = (clickedField, Player) => {

    for (let i = 0; i < winComb.length; i++) {

      for (let j = 0; j < winComb[i].length; j++) {

        if (winComb[i][j] == clickedField) {

          if (field[winComb[i][0] - 1] == Player && field[winComb[i][1] - 1] == Player && field[winComb[i][2] - 1] == Player) {
            console.log(Player + " WINS!");
            setWinTitleVisibility('visible');
            setButtonVisibility('visible');
          }

        }

      }

    }
  }

  return (
    <div className={classes.main}>
      <h1 className={classes.mainText}>TicTacToe</h1>

      <div className={classes.gridContainer}>

        <div className={classes.gridItem} id='1' onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} id='2' onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} id='3' onClick={(event) => onFieldClick(event)}></div>

        <div className={classes.gridItem} id='4' onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} id='5' onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} id='6' onClick={(event) => onFieldClick(event)}></div>

        <div className={classes.gridItem} id='7' onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} id='8' onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} id='9' onClick={(event) => onFieldClick(event)}></div>

      </div>

      <h2 className={classes.winTitle} style={{ visibility: winTitleVisibility }}>{Player + " WINS!"}</h2>

      <button className={classes.resetButton} style={{ visibility: buttonVisibility }}>Reset</button>
    </div>
  )
}

export default App
