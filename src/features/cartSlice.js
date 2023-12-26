import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    myPageItems: localStorage.getItem("myPageItems") ? JSON.parse(localStorage.getItem("myPageItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex =
                state.cartItems.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`increased ${state.cartItems[itemIndex].name} quantity`, {
                    position: "bottom-left",
                });
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} is added to cart`, {
                    position: "bottom-left",
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            toast.error(`${action.payload.name} is removed to cart`, {
                position: "bottom-left",
            });
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

                toast.info(`decreased ${action.payload.name} cart quantity`, {
                    position: "bottom-left",
                });
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {

                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                )

                state.cartItems = nextCartItems


                toast.error(`${action.payload.name} is removed to cart`, {
                    position: "bottom-left",
                });


            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        clearCart(state, action){
            state.cartItems = [];
            toast.error(`Cart Cleared`, {
                position: "bottom-left",
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        getTotals(state, action){
           let{total, quantity} =  state.cartItems.reduce(
            (cartTotal, cartItem) =>{
                const {price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;
            },
             {
                total: 0,
                quantity:0
            }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        moveItemsToMyPage(state, action) {
            // Clear existing items in myPageItems
            state.myPageItems = [];
        
            // Concatenate the moved items to myPageItems
            state.myPageItems = state.myPageItems.concat(action.payload);
        
            // You might want to remove the moved items from the cart
            state.cartItems = state.cartItems.filter(
                (cartItem) => !action.payload.find((movedItem) => movedItem.id === cartItem.id)
            );
        
            toast.info('Items moved to MyPage', {
                position: 'bottom-left',
            });
        
            // Update localStorage
            localStorage.setItem('myPageItems', JSON.stringify(state.myPageItems));
        },
        clearMyPageCart(state, action){
            state.myPageItems = [];
            toast.error(`myPage Cleared`, {
                position: "bottom-left",
            });
            localStorage.setItem("myPageItems", JSON.stringify(state.myPageItems))
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromMyPage(state, action) {
            const nextCartItems = state.myPageItems.filter(
                (myPageItem) => myPageItem.id !== action.payload.id
            )

            state.myPageItems = nextCartItems
            localStorage.setItem("myPageItems", JSON.stringify(state.myPageItems))

            toast.error(`${action.payload.name} is removed to myPage`, {
                position: "bottom-left",
            });
        },
    },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals, moveItemsToMyPage, clearMyPageCart, removeFromMyPage } = cartSlice.actions;

export default cartSlice.reducer;