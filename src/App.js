
import './App.css';
import Image from './img/shopping-211128-142332.jpg';
import Picture from './img/man-211128-142332.jpg'
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
      <img src={ Image } alt="shopping" width="250px" />
      <h1>Список покупок:</h1>
      <GroceryList/>
      <img src={ Picture } alt="man" width="250px"/>
      
    </div>
  );
}

export default App;
