import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearMyPageCart, decreaseCart, getTotals, removeFromMyPage  } from "../features/cartSlice";


function MyPage() {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch])

    const handleRemoveFromCart = (myPageItem) => {
        dispatch(removeFromMyPage(myPageItem))
    };

    const handleClearCart = () => {
        dispatch(clearMyPageCart());
    };

    return (
        <div className='myPage-container'>
            <h2>
                MyPage
            </h2>
            {cart.myPageItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your MyPage is empty! Purchase Projects</p>
                    <div className="start-shopping">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>) : (
                <div>
                    <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="Quantity">Description</h3>

                    </div>

                    <div className="myPage-items">
                        {cart.myPageItems?.map((myPageItem) => (
                            <div className="myPage-item" key={myPageItem.id}>
                                <div className="myPage-product">
                                    <img src={myPageItem.image} alt={myPageItem.name} />
                                    <div>
                                        <h3>{myPageItem.name}</h3>
                                        <p>{myPageItem.desc}</p>
                                        <button onClick={() => handleRemoveFromCart(myPageItem)}>Remove</button>
                                    </div>
                                </div>
                                <div className="myPage-product-price">${myPageItem.price}</div>

                                <div className="myPage-product-total-price">
                                    <p>{myPageItem.desc2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="myPage-summary">
                        <button className="clear-cart" onClick={() => handleClearCart()}>Clear Cart</button>
                    </div>
                    </div>

            )}

        </div>
    )
}

export default MyPage
