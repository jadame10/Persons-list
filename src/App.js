
import './App.css';
import {Users} from "./users";
import {Email} from "./emails";
import React, {Component} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

export class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        users: [],
        data: [],
        products: []
    };
    this.addChild= this.addChild.bind(this);
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users').then((Response) => Response.json())
  .then((findresponse) =>
  {
  this.setState({
    users:findresponse
  })
  //console.log(this.state.users);
  });
 
  }

  addChild = (product) => {
   if(this.state.products.indexOf(product.name) === -1){
     this.setState({ products: [...this.state.products, product]})
   }
}

addDelete = (i, j) => {     
                  console.log(i);
                  const data = this.state.users;
                    
                  this.setState({ 
                    users: [...data.slice(0,i), ...data.slice(i+1)]
                  });
              }
render(){

  return (
    <>
    <div className="App">
      <main>
           
      <Users callback = {this.addChild} />
        <table className = 'list1 table-sm table-striped'>
          <thead><tr><th>Name and surname</th><th>Email address</th><th>Delete</th></tr></thead>
          <tbody>

           { this.state.users.map((person, id ) =>(
           <tr className ='name1' key = {person.id}><td>
           {person.name}
       
             </td>
             <td>
             {person.email}
             </td>
               <td>
               <button key = {person.id+ 'b'} onClick={this.addDelete.bind(null, id)} className="btn btn-danger btn-sm">Delete</button>
                 </td></tr>))}
            
             {
                  this.state.person === 0 
                  ? <div className = 'text-center'>There is no persons in room</div>
                  : <Email key = {this.state.products.id} products = {this.state.products} />
                }

          </tbody>
          </table>
      </main>
    </div>
    </>
  );
}
}

export default App;
