import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from  '../actions';




function DisplayCounter(){
    const counter = useSelector(state => state.count);
    const dispatch = useDispatch()


    return(
        <div>
            <h2>Display Counter Here</h2>
         
            <h2>{counter}</h2>
            <button onClick = {() => dispatch(increment(100, 50))}>+</button>&nbsp;
            <button onClick = {() => dispatch(decrement(50))}>-</button>
        </div>
    );
}

export default DisplayCounter;