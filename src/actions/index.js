export const increment = (incrementval,temp) =>{
    return{
        type : "INCREMENT",
        in : incrementval,
        tem : temp

        
    }
}

export const decrement = (decrementval, temp) =>{
    return{
        type : "DECREMENT",
        de : decrementval,
        tem : temp
        
    }
}