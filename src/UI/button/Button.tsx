import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode
    id: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    isDisabled: boolean
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           id,
                                           onClick,
                                           isDisabled
                                        }) => {

    return (
        <>
            <button style={ {padding: '.5rem'} }
                    id={ id }
                    onClick={ onClick }
                    disabled={ isDisabled }
            >
                { children }
            </button>
        </>
    );
};

export default Button;
