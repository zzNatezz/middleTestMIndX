import { expModel } from "../model/ExpModel.js";

export const createExp = async(req, res, next)=>{
    const body = req.body;
    const experience = await expModel.create({
        userId  : body.userId,
        timeserving  : body.timeserving === "" ? null : body.timeserving,
        companyName  : body.companyName,
        roles  : body.roles,
    })
    res.status(201).send({
        data: experience,
        status : 'successfull',
        mes : 'experience has created completely'
    })
}