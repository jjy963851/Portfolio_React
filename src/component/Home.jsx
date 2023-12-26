import React from "react";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart, getTotals } from "../features/cartSlice";
import Staticdata from "../Staticdata.json"


const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
console.log(data);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals());
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
                    <div className="products">
                        {Staticdata.products?.map((product) => (
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
