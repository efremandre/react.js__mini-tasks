import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask, showAlert} from "../store/taskSlice";

const CreateTask = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const getInputValue = (text: string) => {
        setText(text)
    }

    const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (text.length) {
                dispatch(addTask(text))
                setText('')
            } else {
                dispatch(showAlert(true))
            }
        }
    }

    return (
        <div>
            <input style={{width: '100%', padding: '.5rem'}}
                placeholder='Create task'
                type="text"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => getInputValue(e.target.value)}
                onKeyDown={handleKeyEnter}
            />
        </div>
    );
};

export default CreateTask;
