import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTotals } from "../features/cartSlice";
const NavBar = () => {

    const dispatch = useDispatch()
    const { cartTotalQuantity } = useSelector(state => state.cart)



    return (
        <nav className="nav-bar">
            <Link to="/">
                <h2>JaeYong&apos; Portfolio</h2>
            </Link>
            <div className="nav-container">
            <Link to="/cart">
                <div className="nav-bag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span className="bag-quantity">
                        <span>
                            {cartTotalQuantity}
                        </span>
                    </span>
                </div>
            </Link>
            <Link to="/MyPage">
            <div className="nav-myPage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                    </svg>
                </div>
            </Link>
            </div>
        </nav>
    );
}

export default NavBar;