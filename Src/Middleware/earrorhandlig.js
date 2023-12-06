export const asyncMiddleware = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res);
        } catch (error) {
            return res.json({ message: "catch error", error: error.stack });
        }
    };
};
