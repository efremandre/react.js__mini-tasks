import React from 'react';
import ReadTask from "./EditTask.tsx";
import {useDispatch} from "react-redux";
import {deleteTask, toggleEditTask, toggleTaskCompletion} from "../store/taskSlice.ts";

interface TaskItemProps {
    task: {
        id: string
        text: string
        isDone: boolean
        isEdit: boolean
    }
}

const TaskItem: React.FC<TaskItemProps> = ({task}) => {
    const dispatch = useDispatch()

    const handleTaskCompletion = (id: string) => {
        dispatch(toggleTaskCompletion(id))
    }

    const handleDeleteTask = (id: string) => {
        dispatch(deleteTask(id))
    }

    const handleEditTask = () => {
        dispatch(toggleEditTask(task.id))
    }

    return (
        <li id={task.id}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '.5rem',
                marginBottom: '.5rem',
                width: '100%',
                border: '1px solid #ccc'
            }}>
            {task.isEdit && <ReadTask id={task.id}
                                      text={task.text}
            />}
            {!task.isEdit &&
                (
                    <>
                        <input type="checkbox"
                               checked={task.isDone}
                               onChange={() => handleTaskCompletion(task.id)}
                        />
                        <span style={{
                            flex: '1 1 auto',
                            textDecoration: task.isDone ? 'line-through' : ''
                        }}
                              onDoubleClick={handleEditTask}>{task.text}</span>
                        <button onClick={() => handleDeleteTask(task.id)}>x</button>
                    </>
                )
            }
        </li>
    );
};

export default TaskItem;
