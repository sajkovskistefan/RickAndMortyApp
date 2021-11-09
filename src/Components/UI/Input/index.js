import React from 'react';

const Input = ({ name, type, value, onChange, onFocus, className, onBlur }) => {
    return (
        <input
            className={className}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

export default Input;
