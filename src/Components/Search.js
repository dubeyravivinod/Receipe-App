import React, { useState } from "react";

const Search = (props) => {

    const [item, setItem] = useState('');

    const inputHandler = (event) => {
        const userInput = event.target.value;
        setItem(userInput);
        
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSearch(item)
    }   

    return (
        <div className="MainSearch" >
            <h1>Search</h1>
            <input type="text" onChange={inputHandler}/>
            <button type="submit" onClick={submitHandler}>search</button>
        </div>
    );
}


export default Search;