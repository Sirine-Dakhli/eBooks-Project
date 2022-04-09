import React from "react";
import Mybooks from "./Mybooks.jsx";

const ListBooks = (props)=> (
    <div>
        {props.books.map((book,i)=>(
        <Mybooks  books={book} key={i}/>
        ))}
    </div>
)

export default ListBooks