import s from './ListUsers.module.scss'
import Loader from "../../UI/loader/Loader.tsx";
import React, {useEffect, useState} from "react";
import useFetch from "../../hooks/useFetch.tsx";
import InputSearch from "../../UI/input-search/InputSearch.tsx";

interface UsersItem {
    id: number
    name: string
    email: string
}

const ListUsers: React.FC = () => {
    const {loading, data, error} = useFetch('https://jsonplaceholder.typicode.com/users')
    const [usersItem, setUsersItem] = useState<UsersItem[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        if (data) {
            setUsersItem(data)
        }
    }, [data])

    const getFiltered = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value
        setInputValue(value)
        const searchResult = data.filter((user: UsersItem) => user.name.toLowerCase().includes(value.toLowerCase()))
        setUsersItem(searchResult)
    }

    const clearValue = () => {
        setInputValue('')
        setUsersItem(data)
    }

    return (
        <div className={s.wrapper}>
            {loading && <Loader/>}
            {error && <p>Что-то пошло не так, попробуйте ещё раз... =(</p>}
            <div className={s.header}>
                <InputSearch type="text"
                             placeholder="Поиск по имени"
                             value={ inputValue }
                             onChange={ getFiltered }
                             onClick={ clearValue }
                />
            </div>
            <ul className={s.list}>
                {(usersItem.length)
                    ? usersItem.map((user: UsersItem) =>
                        <li key={user.id}>
                            <span><strong>Имя:</strong> {user.name}</span>
                            <span><strong>E-mail:</strong> {user.email}</span>
                        </li>)
                    : <p>Ничего нет</p>
                }
            </ul>
        </div>
    );
};

export default ListUsers;
