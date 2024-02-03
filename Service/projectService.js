import { projectModel } from "../model/projectModel.js"

export const createProject = async(req, res, next)=>{
    const body = req.body;
    const project = await projectModel.create({
        userId  : body.userId,
        name  : body.name,
        content  : body.content,
        purpose  : body.purpose,
        start  : body.start,
        end  : body.end,
    })
    res.status(201).send({
        data: project,
        status : 'successfull',
        mes : 'project has created completely'
    })
}