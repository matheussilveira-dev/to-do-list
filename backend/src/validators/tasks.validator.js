export function validateTaskId(req, res, next) {
    const { id } = req.params;

    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({
            error: "ID inválido"
        });
    }

    next();
}