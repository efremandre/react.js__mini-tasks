import './App.css'
import ListUsers from "./components/list-usres/ListUsers.tsx";
import MainTitle from "./UI/title/Title.tsx";

function App() {

    return (
        <div className='wrapper'>
            <MainTitle>Список пользователей</MainTitle>
            <ListUsers/>
        </div>
    )
}

export default App
