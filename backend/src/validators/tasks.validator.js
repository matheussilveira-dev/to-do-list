export function validateId(req, res, next) {
    const { id } = req.params;

    if (!id || isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({
            error: "ID inválido"
        });
    }

    next();
}