import { otherModel } from "../model/othersModel.js";


export const createOther = async(req, res, next)=>{
    const otherContent = await otherModel.create({
        hobbit : !req.body.hobbit ? "NA" : req.body.hobbit,
        target : !req.body.targer ? "NA" : req.body.targer,
    })
    res.status(201).send({
        data: otherContent,
        status : 'successfull',
        mes : 'experience has created completely'
    })
}