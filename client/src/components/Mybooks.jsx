import axios from 'axios'
import React from 'react'


class MyBooks extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            books:[],
            title:'',
            genre:'',
            imageUrl:'',  
    
            bookLink:''
        }

        this.deleteBook =this.deleteBook.bind(this)
        this.updateBook =this.updateBook.bind(this)
    }

    handlechange1(e){
        this.setState({title:e.target.value})
    }

    
    handlechange2(e){
        this.setState({genre:e.target.value})
    }

    
    handlechange3(e){
        this.setState({imageUrl:e.target.value})
    }
   

    
   

    handlechange4(e){
        this.setState({bookLink
            :e.target.value})
    }

    deleteBook(id){
        axios.delete("/deletebook/"+id).then((res)=>{
          alert('deleted')
          location.reload()
        })
    }

   

    updateBook(id){
        axios.put('/updated/'+id,{title:this.state.title,genre:this.state.genre,imageUrl:this.state.imageUrl,bookLink:this.state.bookLink}).then((res)=>{
          alert("updated")
          location.reload()
        })
      }


    render(){
        return(
        <div>
            <div class="card" >
                <img src={this.props.books.imageUrl} />
                <div class="in">
                    <h2 >
                       {this.props.books.title}
                    </h2>
                    <h3>{this.props.books.genre}</h3>
                       
                        <a href={this.props.books.bookLink}> read the book </a>
                </div>
                <br />
                <button onClick={()=>{this.deleteBook(this.props.books._id)}}>Delete</button>
            </div>
            <br />
            <div class="down">
                <label>title:</label>
                <input type="text" onChange={this.handlechange1.bind(this)} />
                <label>genre:</label>
                <input type="text" onChange={this.handlechange2.bind(this)} />
                <label>ImageUrl</label>
                <input type="text" onChange={this.handlechange3.bind(this)} />
               
                <label>BookLink:</label>
                <input type="text" onChange={this.handlechange4.bind(this)} />
               
                <button onClick={()=>{this.updateBook(this.props.books._id)}}>Edit</button>
            </div>
        </div>
        )
    }
}

export default MyBooks