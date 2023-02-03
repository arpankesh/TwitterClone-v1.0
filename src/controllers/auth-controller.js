import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
        });
        return res.status(201).json({
            data: response,
            message: "Successfully created an user",
            error: {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Unable to create an user",
            error: error,
            success: false
        })
    }
};
