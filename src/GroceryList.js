import { Component } from "react";
import icon from './icon.jpg';

export class GroceryList extends Component {
    state = {
        userInput: "",
        GroceryList: []
    }
    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if(input === '') {
            alert('Please enter an item')
        } 
        else{
        let listArray = this.state.GroceryList;
        listArray.push(input);
        this.setState({GroceryList: listArray, 
        userInput: ''})
        }
          
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.GroceryList;
        listArray = [];
        this.setState({GroceryList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
                <div className="container">
                <input type="text" 
                placeholder="What to you want to buy today?"
                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
            <button className="btn add" onClick={()=> this.addItem(this.state.userInput)}>ADD</button>
            </div>
            <ul>
                {this.state.GroceryList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                 <img src={icon} alt="icon" width="40px"/> 
                {item}</li>
                ))}  
            </ul>
            <div className="container">
            <button className=" btn delete" onClick={()=> this.deleteItem()}>DELETE</button>
            </div>
            </form>
            </div>
        )
    }
}