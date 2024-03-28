import axios from 'axios';

const baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user";

export const signupUser = async (userDetails) => {
    try {
        const response = await axios.post(`${baseUrl}/registration`, userDetails);
        const data = response.data; 
        if (data) {
            console.log(data.accessToken)
            window.localStorage.setItem("token", data.accessToken);
            alert('You have been signed up successfully, login now');
        } else {
            console.log(response.data.message);
            alert(response.data.message);
        }
        return response;
    } catch (error) {
        console.error('Signup error:', error);
        throw error; 
    }
};
export const loginUser = async (userDetails) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, userDetails);
        const data = response.data.result;
        if (data){
            console.log(data.accessToken)
            window.localStorage.setItem("token", data.accessToken);
            alert('you have been logged in successfully')
             
        }
        else{
            console.log(response.data.message)
            alert(response.data.message)
        }
        return response
    } catch (error) {
        console.error('Login error:', error);
    }
};
