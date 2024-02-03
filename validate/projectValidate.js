export const validateCreateProject = (req, res, next) =>{
    const {userId, name, content, purpose, start, end} = req.body;
    if(!userId)throw new Error('userId is required');
    if(!name)throw new Error('name is required');
    if(!content)throw new Error('content is required');
    if(!purpose)throw new Error('purpose is required');
    if(!start)throw new Error('if no project, please fill NA');
    if(!end)throw new Error('if no project, please fill NA');
    next()
}