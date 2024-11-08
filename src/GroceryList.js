import { Component } from 'react';
import Check from './img/check.svg';

export class GroceryList extends Component {
        state = {
        userInput: "",
        groceryList: []
        }
        onChangeEvent(event){
            this.setState({userInput: event})
        }
        addItem(input){
            if (input === '') {
                alert("Пожалуйста внеси продукт")
            } else{
                let listArray = this.state.groceryList;
                listArray.push(input);
                this.setState({groceryList: listArray, userInput: ''})
            }
        }
        deleteItem(){
            let listArray = this.state.groceryList;
            listArray = [];
            this.setState({groceryList: listArray})
        }
        crossedWord(event) {
            const li = event.target;
            li.classList.toggle('crossed');
        }
        onFormSubmit(e) {
            e.preventDefault();
        }

        render() {
            return (
                <div>
                    <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type='text' 
                        placeholder='Внеси покупку...'
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                    <div>   
                        
                        <button  className='btn btn-add' onClick={() => this.addItem(this.state.userInput)}>Добавить</button>                    
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) =>(
                            <li onClick={this.crossedWord} key={index}><img src={Check} alt="check" width="40px" />{item}</li>
                        ))}    
                    </ul>
                    <button  className='btn btn-delete' onClick={() => this.deleteItem()}>Удалить список</button> 
                    </form>
                   
                </div>
                
            )
           
        }
    }
