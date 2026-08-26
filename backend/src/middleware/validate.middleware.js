export const validate = (schema, location) => {
    return (req, res, next) => {

        const data = req[location]

        const result = schema.safeParse(data)

        console.log(result)

        if(!result.success){
            return res.status(400).json({
                error: result.error.issues.map(issue => issue.message)
            })
        }

        req.body = result.data

        next()
    }
}