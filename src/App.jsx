// src/App.jsx
import { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';


export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {

  const [stack, setStack] = useState([])


  const addToBurger = (newIngredient) => {
    console.log(newIngredient, 'FROM ADD TO BURGER')
    setStack([...stack, newIngredient])
  }

  const removeFromBurger = (ingredient) => {
    const ingredientToRemove = ingredient.name
    console.log(ingredientToRemove, 'NAME TO REMOVE')
    const newStack = stack.filter(ele => ele.name !== ingredientToRemove)
    console.log(newStack,'THE NEW STACK')
    setStack(newStack)
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      
      <div className="ingredients">
      <IngredientList 
        ingredients={availableIngredients}
        addToBurger={addToBurger}
      
      />
      </div>
      <div className="burgerStack">
      <BurgerStack 
        stack={stack}
        removeFromBurger={removeFromBurger}
        />
      </div>
      </section>
    </main>
  );
};

export default App;
