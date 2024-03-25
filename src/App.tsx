import {useState} from 'react';
import {useAppDispatch} from './hook';

import {addTodo} from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';


function App() {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(addTodo(text));
            setText('');
        }
    }

    return (
        <div className='App'>
            <div className="main-container">
                <h1>Todo List</h1>
                <NewTodoForm
                    value={text}
                    updateText={setText}
                    handleAction={handleAction}
                />
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
