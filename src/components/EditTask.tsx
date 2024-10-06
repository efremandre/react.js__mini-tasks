import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {editTask, toggleEditTask} from "../store/taskSlice.ts";

interface EditTaskProps {
    id: string
    text: string
}

const EditTask: React.FC<EditTaskProps> = ({id, text}) => {
    const [value, setValue] = useState<string>(text)
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const getValue = (valueInput: string) => {
        setValue(valueInput)
    }

    const handleSave = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (value.length) {
                dispatch(editTask({id, text: value}))
                dispatch(toggleEditTask(id))
                setValue('')
            } else {
                alert('Нельзя сохранить пустое значение')
            }
        }
    }

    const handleClose = () => {
        setValue(text)
        dispatch(toggleEditTask(id))
    }

    return (
        <>
            <input id={id}
                   type="text"
                   value={value}
                   ref={inputRef}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => getValue(e.target.value)}
                   onKeyDown={handleSave}
            />
            <button onClick={handleClose}>x</button>
        </>
    );
};

export default EditTask;
