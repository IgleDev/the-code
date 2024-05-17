import React, { useState } from "react";

export default function Casillas({ playerCodes }){
    const [code1, setCode1] = useState({ codePlayer1 : '' , codePlayer2 : '', codePlayer3 : '', codePlayer4 : '' });
    const [code2, setCode2] = useState({ codePlayer1 : '' , codePlayer2 : '', codePlayer3 : '', codePlayer4 : '' });

    const handleChangePlayer = (e, code, setCode) => {
        setCode({...code, [e.target.name] : e.target.value})
    }

    const handleKeyDownPlayer = (e, code, codeR, setCode) => {
        if (e.key === 'Enter') {
            const playerCode = Object.values(code).join('');
            console.log('Codigo del jugador', playerCode)
            const rivalCode = codeR
            console.log('Codigo rival: ', rivalCode);
            if(playerCode === rivalCode){
                alert('Ganaste!')
            }else{
                setCode({ codePlayer1: '', codePlayer2: '', codePlayer3: '', codePlayer4: '' });
            }
        }
    };

    return (
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
                        onKeyDown={(e) => handleKeyDownPlayer(e, code1, playerCodes.code2, setCode1)}
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
                        onChange={(e) => handleChangePlayer(e, code2, setCode2)} maxLength={1}
                    />
                </div>

                <div className="box">
                    <input 
                        type="text" 
                        name="codePlayer3" 
                        onChange={(e) => handleChangePlayer(e, code2, setCode2)} maxLength={1}
                    />
                </div>

                <div className="box">
                    <input 
                        type="text" 
                        name="codePlayer4" 
                        onChange={(e) => handleChangePlayer(e, code2, setCode2)} 
                        onKeyDown={(e) => handleKeyDownPlayer(e, code2, playerCodes.code1, setCode2)} maxLength={1}
                    />
                </div>
            </div>
        </div>
    )
}