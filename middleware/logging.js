const timeLog = (req, res, next) => {
    console.log(`[Time: ${Date.now().toLocaleString()}] ${req.method} ${req.url}`)
    next()
}

export default timeLog;