//TODO

const logger = (req, res, next) => {
    const date = new Date().toLocaleString();
    console.log(date)
    return next();
}

const auth = (req, res, next) => {
    if(req.cookies?.logged_in === 'true'){
       return next()
    }else{
        // res.redirect('/login') 
        res.redirect('/notloggedin');
    }
}


module.exports = {
    logger,
    auth
}
