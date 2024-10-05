import message from "../Model/Message.js"
import Conversation from "../Model/Conversation.js";

export const newMessage = async(request , response)=>{
    try {
        const newMsg = new message(request.body);
        await newMsg.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, {message: request.body.text})
        response.status(200).json("message has been sent successfully");
    } catch (error) {
        response.status(400).json(error.message);
    }
}

export const getMessage = async(request , response)=>{
    try {
        const newMessage = await message.find({conversationId: request.params.id});
        return response.status(200).json(newMessage);
    } catch (error) {
        response.status(400).json(error.message);
    }
}