import React, {ChangeEvent, useState} from "react";
import {addInput, addText, clearInput} from "./store/textSlice.ts";
import {useAppDispatch, useAppSelector} from "./store/hooks.ts";

function App() {
    const [placeholder, setPlaceholder] = useState('Введите текст')
    const inputValue = useAppSelector((state) => state.text.inputValue)
    const texts = useAppSelector((state) => state.text.texts)
    const dispatch = useAppDispatch()
    const textChanges = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch(addInput(ev.currentTarget.value))
    }
    const getText = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.code === 'Enter' && inputValue.trim()) {
            dispatch(addText(inputValue))
            dispatch(clearInput(''))
            setPlaceholder('Введите текст')
        } else if (!inputValue.trim()) {
            setPlaceholder('Не должно быть пустым')
        }
    }

    const handleClearInput = () => {
        dispatch(clearInput(''))
        setPlaceholder('Введите текст')
    }

        return (
        <>
            <input type="text"
                   value={inputValue}
                   placeholder={placeholder}
                   onChange={textChanges}
                   onKeyDown={getText}
            />
            <button onClick={handleClearInput}>x</button>
            <div>
                <ul>
                    {
                        texts.map(item => <li key={item.id}>{item.item}</li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default App
