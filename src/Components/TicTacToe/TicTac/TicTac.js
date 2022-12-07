import React, { useState } from "react";
import './TicTac.css'
import Box from "../Box/Box";

const board = [[], [], []]
function TicTac() {

    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState('');

    function play(row, col) {

        board[row][col] = turn;
        setTurn(turn => turn === 'X' ? 'O' : 'X')
        const winner = checkResult()

        if(winner) {
            setWinner(`Winner is ${winner}`)
        }
    }

    function checkResult() {
        //row test 
        for(let i=0; i<board.length; i++) {
            const row = board[i]
            if(row[0] === row[1] && row[1] === row[2] && row[0]) {
                return row[0]
            }
        }

        //collumn test
        for(let i=0; i<board.length; i++) {
            const el1 = board[0][i]
            const el2 = board[1][i]
            const el3 = board[2][i]
            if(el1 === el2 && el2 === el3 && el1) {
                return el1
            }
        }

        // diagonal test

        const d1 = board[0][0]
        const d2 = board[1][1]
        const d3 = board[2][2]

        if(d1 === d2 && d2 === d3 && d1) {
            return d1
        }

        const p1 = board[2][0]
        const p2 = board[1][1]
        const p3 = board[0][2]

        if(p1 === p2 && p2 === p3 && p1) {
            return p1
        }

        return false
    }

    return (
        <div className="outer">
            <div className="inner">
                <div>{winner}</div>
                <div className="row">
                    <Box row={0} col={0} currentState={turn} play={play}></Box>
                    <Box row={0} col={1} currentState={turn} play={play}></Box>
                    <Box row={0} col={2} currentState={turn} play={play}></Box>
                </div>

                <div className="row">
                    <Box row={1} col={0} currentState={turn} play={play}></Box>
                    <Box row={1} col={1} currentState={turn} play={play}></Box>
                    <Box row={1} col={2} currentState={turn} play={play}></Box>
                </div>

                <div className="row">
                    <Box row={2} col={0} currentState={turn} play={play}></Box>
                    <Box row={2} col={1} currentState={turn} play={play}></Box>
                    <Box row={2} col={2} currentState={turn} play={play}></Box>
                </div>
            </div>
        </div>
    )
}

export default TicTac