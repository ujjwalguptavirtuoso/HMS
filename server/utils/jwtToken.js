export const generateToken=(user,message,statusCode,res)=>{
    const token=user.generateJWT();
    const cookieName=`${(user.role).toLowerCase()}-token`
    res.status(statusCode).cookie(cookieName, token, {
        expireIn: new Date(Date.now()+process.env.COOKIE_EXPIRES*24*60*60*1000)
    }).json({
        success: true,
        message,
        user,
        token
    })
}