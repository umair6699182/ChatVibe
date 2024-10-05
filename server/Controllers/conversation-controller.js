import Conversation from "../Model/Conversation.js";

export const newConversation = async(request , response)=>{
    try {
        const senderId = request.body.senderId;
        const recieverId = request.body.recieverId;

        const exist = await Conversation.findOne({ members: { $all: [recieverId , senderId]  }})
       

        if(exist){
            return response.status(200).json("Conversation already exist");
        }

        const newConversation = new Conversation({
            members: [senderId , recieverId]
        });
        await newConversation.save();
        return response.status(200).json("Conversation saved Successfully");
    } catch (error) {
        return response.status(400).json(error.message);
    }
}


export const getConversation = async(request , response)=>{

    try {
        const senderId = request.body.senderId;
        const recieverId = request.body.recieverId;
        
        const conversation = await Conversation.findOne({members: {$all: [recieverId , senderId] }})
        response.status(200).json(conversation);
        
    } catch (error) {
        response.status(400).json(error)
    }
}