import React from "react";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart, getTotals } from "../features/cartSlice";
import Staticdata from "../Staticdata.json"
import { useState } from "react";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
console.log(data);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals());
    };

    const [products, setProducts] = useState(Staticdata.products);
    const [isDescending, setIsDescending] = useState(true);
  
    const sortByPrice = () => {
      const sortedProducts = [...Staticdata.products].sort((a, b) =>
        isDescending ? b.price - a.price : a.price - b.price
      );
      setProducts(sortedProducts);
      setIsDescending(!isDescending);
    };
    
    return (
        <div className="home-container">
          
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occurred.</p>
            ) : (
                <>
                    <h2>Projects Mall</h2>
                    <button onClick = {sortByPrice}className="products-order-button">    {isDescending ? "Sort Ascending":"Sort Descending" }</button>
                    <div className="products">
                   
                        {products?.map((product) => (
                            
                            <div key={product.id} className="product">
                                
                                <h3>{product.name}</h3>
                                <img src={product.image} alt={product.name} />
                                <div className="details">
                                    <span>{product.desc}</span>
                                    <span className="price">${product.price}</span>
                                </div>
                                <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
