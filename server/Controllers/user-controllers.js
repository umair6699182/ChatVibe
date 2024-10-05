import user from "../Model/User.js";

export const AddUser = async(request , response)=>{
    try {
       let exist = await user.findOne({sub: request.body.sub});

       if(exist){
        response.status(200).json({msg: 'user already exist'});
        return;
       }

       const newUser = new user(request.body);
       await newUser.save();
       response.status(200).json(newUser);
        
    } catch (error) {
        response.status(400).json("Soemthing error in backend add API" , error.message)
    }
}

export const getUsers = async(request , response)=>{
    try {
        const person = await user.find({});
        return response.status(200).json(person);
    } catch (error) {
        response.status(400).json(error);
    }
}