import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../store"
import {useEffect} from "react";
import {showAlert} from "../store/taskSlice.ts";

const AlertPopup = () => {
    const isOpen = useSelector((state: RootState) => state.tasks.isOpenAlert)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                dispatch(showAlert(false))
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [isOpen, dispatch])

    return (
        <div style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            maxWidth: '300px',
            margin: '40px auto 0 auto',
            padding: '1rem',
            border: '1px solid #ccc',
            textAlign: 'center',
            transform: isOpen ? 'translate(-50%, 0)' : 'translate(-50%, -20px)',
            opacity: isOpen ? '1' : '0',
            visibility: isOpen ? 'visible' : 'hidden',
            background: '#fff',
            boxShadow: '0px 5px 10px 2px rgba(0, 0, 0, .2)',
            transition: 'transform .5s, opacity .5s'
        }}>
            <p>Напишите что-нибудь...</p>
        </div>
    );
};

export default AlertPopup;
