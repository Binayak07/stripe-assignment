import React from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/product/productAction";
export function Cart() {
    const addedProducts = useSelector(state => state.productsInCart)
    console.log('===>',addedProducts)
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div>
            <div className="grid-container">
                {addedProducts.map(p => {
                    return (
                        <div className="grid-item d-flex flex-column justify-content-between">
                            <div>
                                <img src={p.image} height="100px" width="100px" />
                                <div>{p.title}</div>
                                <div><b>&#8377;{p.price}</b></div>
                            </div>
                            <button type="button" onClick={() => dispatch(removeFromCart(p.id))} className="btn btn-danger">Delete</button>
                        </div>
                    )
                })}
            </div>
            <br/>
            <div className="container">
            {addedProducts.length ?
                <button className="btn btn-primary" onClick={() => history.push('/checkout')}>Checkout</button>
                : 
                <div className="alert alert-danger" role="alert">
                    Your cart is empty.
                </div>
            }
               <button className="btn btn-primary pull-right" onClick={() => history.push('/products')}>Back</button>
            </div>
        </div>
    );
}