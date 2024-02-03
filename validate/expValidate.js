export const validateCreateExp = (req, res, next) =>{
    const {userId, timeserving, companyName, roles} = req.body;
    if(!userId)throw new Error('userId is required');
    if(!timeserving)throw new Error('timeserving is required');
    if(!companyName)throw new Error('companyName is required');
    if(!roles)throw new Error('roles is required');
    next()
}