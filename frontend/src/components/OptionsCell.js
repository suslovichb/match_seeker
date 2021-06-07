import React, {useEffect, useState} from 'react';


const OptionsCell = ({
    options,
    selectedOption,
    updateChoice
}) => {
    const [selectedValue, setSelectedValue] = useState(selectedOption);

    const handleChange = e => {
        updateChoice(e.target.value);
    };

    useEffect(
        () => {setSelectedValue(selectedOption)},
        [selectedOption]
    );

    return (
        <select
            className='options-cell'
            value={selectedValue}
            onChange={handleChange}
        >
            {
                options.map(
                    (option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    )
                )
            }
        </select>
    )
};

export default OptionsCell;