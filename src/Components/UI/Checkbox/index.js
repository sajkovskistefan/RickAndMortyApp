import React from 'react';

const Checkbox = ({value, onChange, label}) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

export default Checkbox;
