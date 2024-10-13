import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

interface TextItems {
    id: string
    item: string
}

interface TextState {
    inputValue: string
    texts: TextItems[]
}

const initialState: TextState ={
    inputValue: '',
    texts: []
}

const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        addText(state, action: PayloadAction<string>) {
            state.texts.push({
                id: uuidv4(),
                item: action.payload
            })
        },
        addInput(state, action: PayloadAction<string>){
            state.inputValue = action.payload
        },
        clearInput(state, action: PayloadAction<string>) {
            state.inputValue = action.payload
        }
    }
})

export const {addText, addInput, clearInput} = textSlice.actions
export default textSlice.reducer
