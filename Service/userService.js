import { UserModel } from "../model/userModel.js"

export const createUser = async(req, res, next)=>{
    const {fullName, birthday, birthPlace, education, Skills} = req.body; 
    const user = await UserModel.create({
        fullName,
        birthday,
        birthPlace,
        education,
        Skills,
    })
    res.status(201).send({
        data: user,
        status : 'successfull',
        mes : 'User has created completely'
    })
}