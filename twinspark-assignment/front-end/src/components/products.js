import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/product/productAction";

export function Products() {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const addedProducts = useSelector(state => state.productsInCart)
    console.log('added', addedProducts)
    const getProducts = async () => {
        let fetchedProducts = await axios.get('https://fakestoreapi.com/products');
        setProducts(fetchedProducts.data);
    };
    useEffect(() => {
        getProducts();
    }, []);
    const addedProductIds = addedProducts.map(product => product.id)
    console.log(addedProductIds)
    return (
        <>
          <div className="container">
            {addedProducts.length?
            <div className="float-right"><button className="btn btn-warning" onClick={()=>history.push('/cart')}>Show Cart</button></div>:<div className="float-right"><button className="btn btn-warning disabled" onClick={()=>history.push('/cart')}>Show Cart</button></div>}
        </div>
        <br/>
        <br/>
    <div className="grid-container">
            {products.map(product => {
                return (
                    <div key={product.id} className="grid-item d-flex flex-column justify-content-between">
                        <div>
                            <img src={product.image} height="100px" width="100px" />
                            <div>{product.title}</div>
                            <div><b>&#8377;{product.price}</b></div>
                        </div>
                        {addedProductIds.indexOf(product.id) != -1 ?

                            <span className="badge badge-success">Success</span>
                            :
                            <button type="button" onClick={() => dispatch(addToCart(product))} className="btn btn-primary">Add to cart</button>
                        }
                    </div>
                )
            })}
        </div>
        </>
    )
}