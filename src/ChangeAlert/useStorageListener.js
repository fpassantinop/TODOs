import React from 'react';

function useStorageListener(sincronize){
   
    const [storageChange, setStorageChange] = React.useState(false);
    
    console.log("HOC")
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODO_V1'){
            console.log("hubo cabios V1")
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    };

    return {
        show: storageChange,
        toggleShow,
    }
   
    /*return function WrappedComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = React.useState(false);
        console.log("HOC")
        window.addEventListener('storage', console.log)
        window.addEventListener('storage', (change) => {
            if (change.key === 'TODO_V1'){
                console.log("hubo cabios V1")
                setStorageChange(true);
            }
        });

        const toogleShow = () => {
            props.sincronize();
            setStorageChange(false);
        }

        return (
            <WrappedComponent 
                show={storageChange}
                toogleShow={toogleShow}
            />
        );
    }*/
}

export { useStorageListener }