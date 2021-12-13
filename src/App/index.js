import React from 'react';
 

import { useTodos } from './useTodos';
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

import { TodoHeader } from '../TodoHeader'; 
import { ChangeAlert } from '../ChangeAlert';


function App() {

    const {
        error, 
        loading, 
        searchedtTodos, 
        completeTodos, 
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos, 
        completedTodos,
        searchValue, 
        setSearchValue,
        addTodo,
        sincronizeTodos,
    } = useTodos()


    return(
            <React.Fragment>
                <TodoHeader loading={loading}>
                    <TodoCounter 
                        totalTodos = {totalTodos}
                        completedTodos = {completedTodos} 
                    />   
                   <TodoSearch 
                        searchValue =  {searchValue}
                        setSearchValue = {setSearchValue}
                    />
                   
                </TodoHeader>
        



                <TodoList
                    error={error}
                    loading={loading}
                    searchedtTodos={searchedtTodos}
                    totalTodos={totalTodos}
                    searchText={searchValue}
                    onError={() => <TodosError/>}
                    onLoading={() => <TodosLoading/>}
                    onEmpyTodos={() => <EmptyTodos/>} 
                    onEmptySearchResults={
                        (searchText) => <p>No hay resultados para {searchText}</p>
                    } 
               >
                
                    {todo => (
                        <TodoItem  
                            key={ todo.text }
                            text={ todo.text }
                            completed={ todo.completed }
                            onComplete={
                                () => completeTodos(todo.text)
                            }
                            onDelete={
                                () => deleteTodo(todo.text)
                            }
                        />
                    )} 
                    
                    </TodoList>


   


               
            {!!openModal && (
                    <Modal>
                        <TodoForm
                            addTodo={addTodo}
                            setOpenModal={setOpenModal}
                         />
                    </Modal>
                )
            }
    
    
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            <ChangeAlert 
                sincronize={sincronizeTodos}
            />
        </React.Fragment>
        )
}

export default App;