import React from 'react'; 
import { useLocalStorage } from './useLocalStorage';


function useTodos(){
    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage('TODO_V1',[]);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedtTodos = [];

    if (!searchValue.length >= 1) {
        searchedtTodos = todos;
    } else {
        searchedtTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })

    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    }


    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);

        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];

        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);

    }


    /*React.useEffect(() => {
        
    },[totalTodos]);*/

    const states = {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedtTodos,
        openModal,
    }

    const stateUpdaters = {
        addTodo,
        setSearchValue,
        completeTodos,
        deleteTodo,
        setOpenModal,
        sincronizeTodos,
    }

    return {states, stateUpdaters };
}

export { useTodos };