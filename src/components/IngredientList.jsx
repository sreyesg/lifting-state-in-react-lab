// src/components/IngredientList.jsx
const IngredientList = (props) => {
    console.log(props.ingredients, 'I AM PROPS')
    const handleAddToBurger = (ingredient) => {
        console.log('FROM HANDLE ADD BURGER')
        console.log(ingredient)
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
  