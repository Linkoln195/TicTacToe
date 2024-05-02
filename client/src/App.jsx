import classes from './App.module.css'

function App() {
  let Player = "X";

  const onFieldClick = (event) => {
    if (event.target.innerHTML == "") {
      if (Player == "X") {
        event.target.innerHTML = "X";
        Player = "O";
      } else if (Player == "O") {
        event.target.innerHTML = "O";
        Player = "X";
      }
    }
  }

  return (
    <>
      <h1 className={classes.mainText}>TicTacToe</h1>

      <div className={classes.gridContainer}>

        <div className={classes.gridItem} onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} onClick={(event) => onFieldClick(event)}></div>

        <div className={classes.gridItem} onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} onClick={(event) => onFieldClick(event)}></div>

        <div className={classes.gridItem} onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} onClick={(event) => onFieldClick(event)}></div>
        <div className={classes.gridItem} onClick={(event) => onFieldClick(event)}></div>

      </div>
    </>
  )
}

export default App
