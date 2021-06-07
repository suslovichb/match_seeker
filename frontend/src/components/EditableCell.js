import React, {useEffect, useState} from 'react';


const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateTableData
}) => {

  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
        setValue(e.target.value)
  };

  const onBlur = () => {
        updateTableData(index, id, value)
  };

  useEffect(
      () => {setValue(initialValue)},
      [initialValue]
  );

  return (
      <input
          className={'editable-cell'}
          value={value || ''}
          onChange={handleChange}
          onBlur={onBlur}
      />
  );
};

export default EditableCell;
