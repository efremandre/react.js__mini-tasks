import React, {ReactNode, useState} from 'react';
import Button from "../button/Button.tsx";

interface MainTitleProps {
    children: ReactNode
}

const MainTitle: React.FC<MainTitleProps> = ({children}) => {

    let [ counter, setCounter ] = useState<number>(0)
    const [ disabledPlus, setDisabledPlus ] = useState<boolean>(false)
    const [ disabledMinus, setDisabledMinus ] = useState<boolean>(true)

    const handlyCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
        let idValue = (e.target as HTMLButtonElement).id

        setCounter((prevCounter) => {
            let newCounter = prevCounter

            if (idValue === 'plus') {
                newCounter = Math.min(prevCounter + 1, 10)
            }
            if (idValue === 'minus') {
               newCounter = Math.max(prevCounter - 1, 0)
            }

            setDisabledPlus(newCounter === 10)
            setDisabledMinus(newCounter === 0)

            return newCounter
        })
    }

    return (
        <div>
            <h1>{ children }</h1>
            <div style={ {margin: '1rem 0', fontSize: '18px'} }>
                <p>Счет: { counter }</p>
            </div>
            <div style={ {display: 'flex', gap: '1rem'} }>
                <Button id='minus'
                        onClick={ (e: React.MouseEvent<HTMLButtonElement>) => handlyCounter(e) }
                        isDisabled={ disabledMinus }
                >
                    -
                </Button>
                <Button id='plus'
                        onClick={ (e: React.MouseEvent<HTMLButtonElement>) => handlyCounter(e) }
                        isDisabled={ disabledPlus }
                >
                    +
                </Button>
            </div>
        </div>
    );
};

export default MainTitle;
