import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});
const Yup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();


    }


    return (
        <>
            <h4>React form validation with React Hook Form and Yup</h4>
            <br />
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Enter Your Email!"
                    required
                />
                <p>{errors.email?.message}</p>
                <br /> <br />
                <input
                    {...register("password")}
                    type="password"
                    placeholder="Enter Your Password!"
                    required
                />
                <p>{errors.password?.message}</p>
                <br /> <br />
                <button type="submit">Sign In</button>
                <br /> <br />
            </form>
        </>
    )
}
export default Yup;