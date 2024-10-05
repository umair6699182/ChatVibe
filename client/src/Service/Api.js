import axios from 'axios';


const URL = 'http://localhost:8000'


export const AddUser = async(data)=>{
    try {
        await axios.post(`${URL}/add` , data);
    } catch (error) {
        console.log("Error while calling adduser" , error.message)
    }
}


export const GetUser = async()=>{
    try {
       let response = await axios.get(`${URL}/users`);
       return response.data;
    } catch (error) {
        console.log('Error while calling get users', error)
    }
}

export const SetConversation = async(data)=>{
    try {
        await axios.post(`${URL}/conversation/add` , data)
    } catch (error) {
        console.log('Error while calling setConversation API', error)
    }
}

export const getConversation = async(data)=>{
    try {
       let response = await axios.post(`${URL}/conversation/get` , data)
       return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API', error)
    }
}


export const newMesasge = async(data)=>{
    try {
        await axios.post(`${URL}/message/add` , data)
    } catch (error) {
        console.log('Error while calling newMessage API', error)
    }
}

export const getMessage = async(id)=>{
    try {
        let response = await axios.get(`${URL}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getMessage API', error)
    }
}

export const uploadFile = async(data)=>{
    try {
        return await axios.post(`${URL}/file/upload` , data)
    } catch (error) {
        console.log("Error while calling uploadFile api" , error.message)
    }
}