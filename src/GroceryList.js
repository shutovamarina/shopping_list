import { Component } from 'react';
import Check from './img/check.svg';

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
    };

    componentDidMount() {
        // Извлекаем данные из localStorage при загрузке компонента
        const savedList = localStorage.getItem('groceryList');
        if (savedList) {
            this.setState({ groceryList: JSON.parse(savedList) });
        }
    }

    componentDidUpdate(_, prevState) {
        // Сохраняем данные в localStorage, если список изменился
        if (prevState.groceryList !== this.state.groceryList) {
            localStorage.setItem('groceryList', JSON.stringify(this.state.groceryList));
        }
    }

    onChangeEvent(event) {
        this.setState({ userInput: event });
    }

    addItem(input) {
        if (input === '') {
            alert('Пожалуйста, внесите продукт');
        } else {
            let listArray = [...this.state.groceryList, input];
            this.setState({ groceryList: listArray, userInput: '' });
        }
    }

    deleteItem() {
        this.setState({ groceryList: [] });
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
                        <input
                            type="text"
                            placeholder="Внеси покупку..."
                            onChange={(e) => this.onChangeEvent(e.target.value)}
                            value={this.state.userInput}
                        />
                    </div>
                    <div>
                        <button
                            className="btn btn-add"
                            onClick={() => this.addItem(this.state.userInput)}
                        >
                            Добавить
                        </button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                <img src={Check} alt="check" width="40px" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="btn btn-delete"
                        onClick={() => this.deleteItem()}
                    >
                        Удалить список
                    </button>
                </form>
            </div>
        );
    }
}

