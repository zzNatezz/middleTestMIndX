export const validateCreateUser = (req, res, next) =>{
    const {fullName, birthday, birthPlace, education} = req.body;
    if(!fullName)throw new Error('full name is required');
    if(!birthday)throw new Error('birthday is required');
    if(!birthPlace)throw new Error('birthPlaceis required');
    if(!education)throw new Error('education is required');
    next()
}