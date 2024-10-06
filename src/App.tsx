import CreateTask from "./components/CreateTask.tsx";
import TasksList from "./components/TasksList.tsx";
import TaskItem from "./components/TaskItem.tsx";
import {useSelector} from "react-redux";
import {RootState} from "./store";
import AlertPopup from "./components/AlertPopup.tsx";

function App() {
    const tasks = useSelector((state: RootState) => state.tasks.tasks)

    return (
        <>
            <AlertPopup />
            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: '50px 10px 10px'
            }}>
                <CreateTask/>
                <TasksList>
                    {tasks.map(task =>
                        <TaskItem key={task.id}
                                  task={task}
                        />)}
                </TasksList>
            </div>
        </>
    )
}

export default App
