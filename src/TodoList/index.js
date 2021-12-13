import React from 'react';
import './TodoList.css';

function TodoList(props){
    const renderFunc = props.children || props.render;
    return (
        <section className='todoList-container'>
         
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.searchedtTodos) && props.onEmpyTodos()}
    
            {(!!props.totalTodos && !props.searchedtTodos.length) && props.onEmptySearchResults(props.searchText)}
            
            {(!props.loading && !props.error) && props.searchedtTodos.map(renderFunc)}

        </section>
        
    )
}

export {TodoList};