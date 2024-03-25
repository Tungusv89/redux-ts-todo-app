import React from "react";

interface NewTodoFormProps {
    value: string,
    updateText: (str: string) => void,
    handleAction: () => void,
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({value, updateText, handleAction}) => {
    return (
        <>
            <input
                placeholder='new todo'
                value={value}
                onChange={(e) => updateText(e.target.value)}
            />
            <button onClick={handleAction}>Add</button>
        </>
    );
};

export default NewTodoForm;
