import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index.js';

function App2(props){
    return (
        <h1> {props.saludo}, {props.nombre}!</h1>
    )
}

function withSaludo(WrappedComponent){
    return function WrappedComponentWithSaludo(saludo){
        return function ComponentDeVerdad(props){
            return (
                <React.Fragment>
                    <WrappedComponent {...props} saludo={saludo}/>
                    <p>estamos con el wrapped component</p>
                </React.Fragment>
            )
        }
    } 
}

//const AppWithSaludo = withSaludo(App)('holass');

ReactDOM.render(  
    <App/> ,
    document.getElementById('root')
);

