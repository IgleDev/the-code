import React, { useState } from "react";
import Casillas from "./casillas";

export default function Code(){
    const [codes, setCodes] = useState({code1 : '', code2 : ''});
    const [isCode, setIsCode] = useState(false);
    
    const handleChange = (e) => {
        setCodes({...codes,
            [e.target.name] : e.target.value
        });
    }

    const handleClick = (e) => {
        if (e.key === 'Enter' && e.target.value.length === 4) {
            e.target.classList.add('setCode');
            e.target.style.filter = 'blur(8px)';
            e.target.disabled = true;
            setIsCode(!isCode);
        }
    }
    
    return (
        <>
            <div className="inputs">
                <input
                    type="text"
                    value={codes.code1}
                    maxLength={4}
                    name="code1"
                    placeholder="Your Code"
                    onChange={handleChange}
                    onKeyDown={(e) => handleClick(e)}
                />

                <input
                    type="text"
                    maxLength={4}
                    name="code2"
                    value={codes.code2}
                    placeholder="Your Code"
                    onChange={handleChange}
                    onKeyDown={(e) => handleClick(e)}
                />
            </div>
            <Casillas playerCodes={codes}></Casillas>
        </>
    )
}