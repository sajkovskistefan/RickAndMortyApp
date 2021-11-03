import React from 'react';

const Input = ({name, type, value, onChange, onFocus }) => {
    return (
        <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
        />
    );
};

export default Input;
