import React from "react";
import axios from 'axios'
import ListBooks from "./ListBooks.jsx";

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     books : [],
      title:'',
      genre:"",
     
      bookLink:"",
      ImageUrl:""
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }

  componentDidMount(){
   axios.get("/books").then((res)=>{
     this.setState({books:res.data})
     console.log(res.data)
   })
  }


  createBook(){
    axios.post('/addbook',this.state).then((data)=>{
      alert("your Book just Aded !")
      this.componentDidMount()
    })
  }

  render() {
    return(
      
      <div>
        
        <div class='top'>
          <label htmlFor="">Title:</label>
          <br />
          <input type="text" name= "title" placeholder="enter your title here "  onChange ={this.handleChange.bind(this)}/>
          <br />
          <label htmlFor="">genre:</label>
          <br />
          <input type="text" name="genre" placeholder="enter your genre here "  onChange ={this.handleChange.bind(this)} />
          <br />
          
          <label htmlFor="">book picture:</label>
          <br />
         
          <input type="text" name= "imageUrl" placeholder="enter your book picture here " onChange ={this.handleChange.bind(this)} />
          <br />

          <label htmlFor="">Book link:</label>
          <br />
         
          <input type="text" name= "bookLink"placeholder="enter your book url here " onChange ={this.handleChange.bind(this)}/>
          <br />
          <div>
          
          <button onClick={this.createBook.bind(this)}>Add Book</button>
    </div>
        </div>
        <br />
        <ListBooks books={this.state.books}/>
      </div>
    )
  }
}
