import joi, { object, boolean, ref } from "joi";

export const signupSchema = joi.object({
    userName: joi.string().alphanum().required(),
    email: joi.string().email().required(),
    gender: joi.string(),
    password: joi.string().required(),
    cpassword: joi.string().valid(ref('password')).required(),
});

export const querySchema = joi.object({
    test: joi.boolean().required(),
});

export const loginSchema = joi.object({
    email: joi.string().email().required().min(5).messages({
        'string.empty': "Email is required",
        'string.email': "Please enter a valid email",
    }),
    password: joi.string().required().min(3).messages({
        'string.empty': "Password is required",
    }),
});

export const signinSchema = joi.object({
    email: loginSchema.email,
    password: loginSchema.password,
});
