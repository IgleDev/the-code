import React, { useState } from "react";

export default function Casillas({ playerCodes }) {
    const [code1, setCode1] = useState({ codePlayer1: '', codePlayer2: '', codePlayer3: '', codePlayer4: '' });
    const [code2, setCode2] = useState({ codePlayer1: '', codePlayer2: '', codePlayer3: '', codePlayer4: '' });
    const [contadores, setContadores] = useState({ player1: 0, player2: 0 });

    const handleChangePlayer = (e, code, setCode) => {
        setCode({ ...code, [e.target.name]: e.target.value });
    };

    const handleKeyDownPlayer = (e, code, rivalCode, setCode, playerKey) => {
        if (e.key === 'Enter') {
            const playerCode = Object.values(code).join('');
            console.log('Codigo del jugador', playerCode);
            console.log('Codigo rival: ', rivalCode);

            let contador = 0;
            for (let i = 0; i < rivalCode.length; i++) {
                if (playerCode.includes(rivalCode[i]) && playerCode[i] === rivalCode[i]) {
                    contador++;
                }
            }

            if (playerCode === rivalCode) {
                alert('¡Ganaste!');
            } else {
                setCode({ codePlayer1: '', codePlayer2: '', codePlayer3: '', codePlayer4: '' });
            }

            setContadores(prevContadores => ({
                ...prevContadores,
                [playerKey]: contador
            }));
        }
    };

    return (
        <>
            <div className="games">
                <div className="player1">
                    <div className="box">
                        <input
                            type="text"
                            name="codePlayer1"
                            value={code1.codePlayer1}
                            onChange={(e) => handleChangePlayer(e, code1, setCode1)} maxLength={1}
                        />
                    </div>
                    <div className="box">
                        <input
                            type="text"
                            name="codePlayer2"
                            value={code1.codePlayer2}
                            onChange={(e) => handleChangePlayer(e, code1, setCode1)} maxLength={1}
                        />
                    </div>
                    <div className="box">
                        <input
                            type="text"
                            name="codePlayer3"
                            value={code1.codePlayer3}
                            onChange={(e) => handleChangePlayer(e, code1, setCode1)} maxLength={1}
                        />
                    </div>
                    <div className="box">
                        <input
                            type="text"
                            name="codePlayer4"
                            value={code1.codePlayer4}
                            onChange={(e) => handleChangePlayer(e, code1, setCode1)} maxLength={1}
                            onKeyDown={(e) => handleKeyDownPlayer(e, code1, playerCodes.code2, setCode1, 'player1')}
                        />
                    </div>
                </div>

                <div className="player2">
                    <div className="box">
                        <input
                            type="text"
                            name="codePlayer1"
                            value={code2.codePlayer1}
                            onChange={(e) => handleChangePlayer(e, code2, setCode2)} maxLength={1}
                        />
                    </div>
                    <div className="box">
                        <input
                            type="text"
                            name="codePlayer2"
                            value={code2.codePlayer2}
                            onChange={(e) => handleChangePlayer(e, code2, setCode2)} maxLength={1}
                        />
                    </div>
                    <div className="box">
                        <input
                            type="text"
                            name="codePlayer3"
                            value={code2.codePlayer3}
                            onChange={(e) => handleChangePlayer(e, code2, setCode2)} maxLength={1}
                        />
                    </div>
                    <div className="box">
                        <input
                            type="text"
                            name="codePlayer4"
                            value={code2.codePlayer4}
                            onChange={(e) => handleChangePlayer(e, code2, setCode2)} maxLength={1}
                            onKeyDown={(e) => handleKeyDownPlayer(e, code2, playerCodes.code1, setCode2, 'player2')}
                        />
                    </div>
                </div>
            </div>
            <div className="guess">
                <p>Player 1 guesses: {contadores.player1}</p>
                <p>Player 2 guesses: {contadores.player2}</p>
            </div>
        </>
    );
}
