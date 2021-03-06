const handleProfile = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users')
        .where({id})
        .then(user => {
            if(user.length){
              res.json(user[0]);  
            }
            else {
                res.status(404).json('No Such User!');
            }
        })
        .catch(err => res.status(400).json('Err getting user'))
}

module.exports = {
    handleProfile: handleProfile,
}