import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton'; 
import { Modal } from '../Modal';  
import { Loader } from '../Loader';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';

function AppUI(){

    const {
        error, 
        loading, 
        searchedtTodos, 
        completeTodos, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter /> 
            <TodoSearch />

       
            <TodoList> 
            {error && <TodosError error={error}></TodosError>}
            {loading && <TodosLoading></TodosLoading>}
            {(!loading && !searchedtTodos.length) && <EmptyTodos></EmptyTodos>}
    
            { searchedtTodos.map(todo => ( <
                TodoItem key = { todo.text }
                text = { todo.text }
                completed = { todo.completed }
                onComplete = {
                    () => completeTodos(todo.text)
                }
                onDelete = {
                    () => deleteTodo(todo.text)
                }
                />
            ))
        } </TodoList>
           
        {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )
        }


        <CreateTodoButton
            setOpenModal={setOpenModal}
        />
        </React.Fragment>
    )
}

export { AppUI }