// src/components/IngredientList.jsx
const IngredientList = (props) => {
    const handleAddToBurger = (ingredient) => {
        
        props.addToBurger(ingredient)

    }

    return (
        <ul>
            {
            props.ingredients.map((ingredient,idx) => {
                return(
                    <li 
                    style={{background: ingredient.color}} 
                    key={idx}>
                        {ingredient.name} 
                        <button onClick={() => handleAddToBurger(ingredient)}>+</button>
                    </li>
                )
            })
            }
        </ul>
    );
  };
  
  export default IngredientList;
  