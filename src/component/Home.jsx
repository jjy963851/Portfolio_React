import { useDispatch } from "react-redux";
//import {useHistory} from 'react-router';
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart, getTotals } from "../features/cartSlice";

const Home = () => {

    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
    //const history = useHistory();


    const  handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals());
       // history.push("/cart"); //when user add items to cart, navigate to cart page
    };


    return <div className="home-container">
        {isLoading ?
            (<p>loading</p>) : error ?
                (<p>An error occured..</p>)
                : (
                    <>
                        <h2>Projects Mall</h2>
                        <div className="products">
                            {data?.map((product) => (
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
}

export default Home;