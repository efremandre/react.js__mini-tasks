import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Task {
    id: string
    text: string
    isDone: boolean
    isEdit: boolean
}

interface InitialState {
    tasks: Task[]
    isOpenAlert: boolean
}

const initialState: InitialState = {
    tasks: [],
    isOpenAlert: false
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.tasks.push({
                id: new Date().toISOString(),
                text: action.payload,
                isDone: false,
                isEdit: false
            });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        editTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id)
            if (task) {
                task.text = action.payload.text
            }
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            if (task) {
                task.isDone = !task.isDone
            }
        },
        toggleEditTask: ((state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            if (task) {
                task.isEdit = !task.isEdit
            }
        }),
        showAlert: (state, action) => {
            state.isOpenAlert = action.payload
        }
    }
})

export const {
    addTask,
    deleteTask,
    toggleTaskCompletion,
    editTask,
    toggleEditTask,
    showAlert,
} = tasksSlice.actions;
export default tasksSlice.reducer;
