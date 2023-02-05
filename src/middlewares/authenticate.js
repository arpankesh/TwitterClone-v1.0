import passport from "passport";

export const authenticate = (req, res, next) => {
    console.log("Inside here");
    passport.authenticate("jwt", (err, user) => {
        if (err) next(err);
        if (!user) {
            return res.status(401).json({
                message: "Unauthorised access"
            })
        }
        req.user = user;
        next();
    })(req, res, next)
}