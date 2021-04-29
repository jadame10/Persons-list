import React, {Component} from "react";
//import App from "./App";



export class Users extends Component{
    constructor(props){
        super(props);
        this.state ={
            users: [],
            name:'',
            email: '',
            array: [],
            data: []
        }
        this.updateInput = this.updateInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

        updateInput(event){
            event.persist();
            this.setState(state => state[event.target.name] =  event.target.value)
            }
         

   onSubmit = () =>{
           this.props.callback(this.state);
           this.setState({ name: "", email: ""})
           console.log(this.state.name);
        }

        
        render(){  
          
            return(
                 <React.Fragment>
                     <div className = 'list2'>
                    <input className = 'form-control' name = "name" value = {this.state.name} onChange={this.updateInput} autoFocus = {true} />
                    <input className = 'form-control' name = "email" value = {this.state.email} onChange={this.updateInput} autoFocus = {true}  />
                    <button className = 'btn btn-primary' onClick = {this.onSubmit}>Dodaj</button>
                    </div>
                    </React.Fragment>
            );
        }

}