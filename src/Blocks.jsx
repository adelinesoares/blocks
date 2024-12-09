import { useState } from "react"
import "./Blocks.css"

function Blocks() {
    const [ board, setBoard ] = useState([0,0,0,0,0,0,0,0,0]);
    const [ msg, setMsg ] = useState("")

    if(board.every((item) => item === 1) && msg === "") {
        setMsg("Você ganhou");
    }

    function start(){
        const newBoard = []; 
        for( let i = 0; i <= 9; i++) {
            const blockState = Math.round(Math.random())
            newBoard.push(blockState);
        }
        setBoard(newBoard);
        setMsg("")
    }

    function click(blockIndex){ 
        const newBoard = [...board]
        if(blockIndex === 0){
            newBoard[0] = newBoard[0] ? 0 : 1;
            newBoard[1] = newBoard[1] ? 0 : 1;
            newBoard[3] = newBoard[3] ? 0 : 1;

        }
        if(blockIndex === 1){
            newBoard[0] = newBoard[0] ? 0 : 1;
            newBoard[1] = newBoard[1] ? 0 : 1;
            newBoard[2] = newBoard[2] ? 0 : 1;
            newBoard[4] = newBoard[4] ? 0 : 1;
        }
        if(blockIndex === 2){
            newBoard[1] = newBoard[1] ? 0 : 1;
            newBoard[2] = newBoard[2] ? 0 : 1;
            newBoard[5] = newBoard[5] ? 0 : 1;          
        }
        if(blockIndex === 3){
            newBoard[0] = newBoard[0] ? 0 : 1;
            newBoard[3] = newBoard[3] ? 0 : 1;
            newBoard[4] = newBoard[4] ? 0 : 1;
            newBoard[6] = newBoard[6] ? 0 : 1;
        }
        if(blockIndex === 4){
            newBoard[1] = newBoard[1] ? 0 : 1;
            newBoard[3] = newBoard[3] ? 0 : 1;
            newBoard[4] = newBoard[4] ? 0 : 1;
            newBoard[5] = newBoard[5] ? 0 : 1;
            newBoard[7] = newBoard[7] ? 0 : 1;
        }
        if(blockIndex === 5){
            newBoard[2] = newBoard[2] ? 0 : 1;
            newBoard[4] = newBoard[2] ? 0 : 1;
            newBoard[5] = newBoard[5] ? 0 : 1;
            newBoard[8] = newBoard[8] ? 0 : 1;
        }
        if(blockIndex === 6){
            newBoard[3] = newBoard[3] ? 0 : 1;
            newBoard[6] = newBoard[6] ? 0 : 1;
            newBoard[7] = newBoard[7] ? 0 : 1;
        }
        if(blockIndex === 7){
            newBoard[4] = newBoard[4] ? 0 : 1;
            newBoard[6] = newBoard[6] ? 0 : 1;
            newBoard[7] = newBoard[7] ? 0 : 1;
            newBoard[8] = newBoard[8] ? 0 : 1;
        }
        if(blockIndex === 8){
            newBoard[5] = newBoard[5] ? 0 : 1;
            newBoard[7] = newBoard[7] ? 0 : 1;
            newBoard[8] = newBoard[8] ? 0 : 1;
        }
        setBoard(newBoard);
    }



    return <>
        <button onClick={start}>Start</button>
        <div>{msg}</div>
        <div className="container">
            <div className={"block" + (board[0] ? " green" : " red")} onClick={() => click(0)}></div>
            <div className={"block" + (board[1] ? " green" : " red")} onClick={() => click(1)}></div>
            <div className={"block" + (board[2] ? " green" : " red")} onClick={() => click(2)}></div>
            <div className={"block" + (board[3] ? " green" : " red")} onClick={() => click(3)}></div>
            <div className={"block" + (board[4] ? " green" : " red")} onClick={() => click(4)}></div>
            <div className={"block" + (board[5] ? " green" : " red")} onClick={() => click(5)}></div>
            <div className={"block" + (board[6] ? " green" : " red")} onClick={() => click(6)}></div>
            <div className={"block" + (board[7] ? " green" : " red")} onClick={() => click(7)}></div>
            <div className={"block" + (board[8] ? " green" : " red")} onClick={() => click(8)}></div>
        </div>
    </>
}


export default Blocks