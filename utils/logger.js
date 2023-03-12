const logger = (req, res, next)=>{
    console.log(`${rq.method} ${req.protocol}://${req.hostname}${req.originalUrl}`);
    next();
}