import React from 'react';
import {useSelector} from 'react-redux';



function DisplayLogged(){
    const isLogged = useSelector(state =>state.isLogged);
    return(
        <div >
         {isLogged && <h2>I am logged in !!</h2>}
        </div>
    );
}

export default DisplayLogged;