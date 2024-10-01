import s from './InputSearch.module.scss'

interface InputSearchProps {
    type: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClick: () => void
}

const InputSearch: React.FC<InputSearchProps> = ({
                         type,
                         placeholder,
                         value,
                         onChange,
                         onClick
                     }) => {

    return (
        <div className={s.wrapper}>
            <input
                className={s.input}
                type={type}
                placeholder={placeholder}
                value={ value }
                onChange={ onChange }
            />
            <button className={s.button}
                    onClick={ onClick }>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 18L18 6M6 6l12 12"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default InputSearch;
