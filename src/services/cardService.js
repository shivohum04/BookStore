import axios from 'axios';

const baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user";

const configForBooks = () => {
    const accessToken = localStorage.getItem("token")
    console.log('access token:',accessToken)
    const header = {
        headers: {
            "x-access-token":`${accessToken}`,
            "Content-Type": "application/json"  
        }
    }
    return header
}  
export const addToCart = async ({ product_id }) => {
    try {
        const requestBody = {product_id}; 
        console.log(requestBody)
        const response = await axios.post(`${baseUrl}/add_cart_item/${product_id}`, requestBody, configForBooks());
        const data = response.data; 
        if (data) {
            alert('Added to cart successfully');
        } else {
            console.log(response.data.message);
            alert(response.data.message);
        }
        return response;
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error; 
    }
};

export const getCartItems = async () => {
    try {
        const response = await axios.get(`${baseUrl}/get_cart_items`, configForBooks());
        console.log(response.data)
        return response.data; 

    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

export const removeCartItem = async ({cart_id})=>{
    try{
        const requestBody={cart_id};
        console.log(requestBody)
        console.log('selected cart item:',cart_id)
        const response = await axios.delete(`${baseUrl}/remove_cart_item/${cart_id}`,configForBooks());
        console.log(response.data)
        return response.data;

    }catch(error){
        console.error('error removing cart item',error)
        throw error;
    }
}

export const updateCartItem = async ({count,cart_id})=>{
    try{
        const requestBody={quantityToBuy:{count}};
        console.log(requestBody)
        console.log('selected cart item:',cart_id)
        const response = await axios.put(`${baseUrl}/cart_item_quantity/${cart_id}`,configForBooks());
        console.log(response.data)
        return response.data;

    }catch(error){
        console.error('error removing cart item',error)
        throw error;
    }
}
