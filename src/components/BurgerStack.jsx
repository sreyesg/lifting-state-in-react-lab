// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    // console.log(props.stack, 'FROM THE STACK')
    const handleRemoveFromBurger = (ingredient) => {
        props.removeFromBurger(ingredient)
    }
    return (
        <ul>
            {
            props.stack.map((ingredient, idx) => {
                {console.log(ingredient)}
                return (
                    <li
                    style={{background: ingredient.color}}    
                    key={idx}
                    >
                        {ingredient.name}
                        <button onClick={()=> handleRemoveFromBurger(ingredient)}>X</button>
                    </li>
                )

            })
            }
        </ul>
    )
  };
  
  export default BurgerStack;
  