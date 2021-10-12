import{useReducer} from "react";
import { shoppingInitialState, shoppingReducer } from "../reducers/VentaReducer"
import ProductoItem from "./ProductoItem";

const VentaCarrito = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
   
    const{products,cart}=state;

    const addToCart=()=>{};
    const delFromCart=()=>{};
    const clearCart=()=>{};
     

    return (
        <div>
            <h2>Carrito de compra</h2>
            <h3>Productos</h3>
            <article className="box">
                {products.map((product)=><ProductoItem key={product.id} data={product} addToCart={addToCart}/>)}
            </article>
            <h3>Carrito</h3>
            <article className="box"></article>
        </div>
    )
}

export default VentaCarrito
