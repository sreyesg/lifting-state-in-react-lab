// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    // console.log(props.stack, 'FROM THE STACK')
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
                        <button>X</button>
                    </li>
                )

            })
            }
        </ul>
    )
  };
  
  export default BurgerStack;
  