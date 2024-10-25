// src/components/IngredientList.jsx
const IngredientList = (props) => {
    console.log(props.ingredients, 'I AM PROPS')
    
    return (
        <ul>
            {
            props.ingredients.map((ingredient,idx) => {
                return(
                    <li style={{background: ingredient.color}} key={idx}>{ingredient.name}</li>
                )
            })
            }
        </ul>
    );
  };
  
  export default IngredientList;
  