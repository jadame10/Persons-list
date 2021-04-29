import React, {Component} from "react";
//import {App} from "./App";

export class Email extends Component {
  constructor(props){
    super(props);
    this.state = {
        products: this.props.products
    };
  }
  handleDelete = (i, j) => {   
    this.props.products.splice(i, 1);
    //this.setState({  products: [...data.slice(0,i), ...data.slice(i+1)] })
   // console.log( this.props.products.splice(0, 1));
}

    render() {
      return (
        <> 
       
       { this.props.products.map((p, id)  => (
          <tr className = "teer" key = {id}>
                 <td>{p.name}</td>
                 <td>{p.email}</td>
                 <td><button key = {id} onClick ={this.handleDelete.bind(null, id)} className = 'btn btn-danger btn-sm'>Delete</button></td>
               </tr>
        ))
       }
      
     </>
      );
    }
  }