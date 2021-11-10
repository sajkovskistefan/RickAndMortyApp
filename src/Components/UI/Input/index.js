import React from 'react';

const Input = ({ name, type, value, onChange, onFocus, className, onBlur, placeholder, children, labelClassname, inputConatinerClassname }) => {
    return (
        <div className={inputConatinerClassname}>
            <label className={labelClassname}>{children}</label>
            <input
                className={className}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
