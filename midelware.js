const myLogger = function (req, res, next) {
    console.log('LOGGED')
    const hour = new Date().getHours();
    const days = new Date().getDay();
    console.log("Today is :" + days + " The actual hour is " + hour);
    if (days > 5) {
        res.send("closed")
    }
    else if(hour < 9 && hour > 17) {
        res.send("closed")
    }
    else {
    next()
}
}
module.exports = myLogger