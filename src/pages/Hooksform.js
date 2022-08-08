import React from "react";
import { useForm } from 'react-hook-form';
const Hooksform = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert(JSON.stringify(data));
    }
    //console.log(watch("First Name")); 
    return (
        <>
            <h3>form using Hooksform!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="Name" {...register("firstName", { required: true , maxLength: 10 })} />
                {errors.firstName && <span>Enter The Your Name</span>}
                <br /><br />
                <input {...register("lastName", { required: true ,maxLength: 10 })} />
                {errors.lastName && <span>Enter Your Last Name</span>}
                <br /><br />
                <input {...register("Email", { required: true ,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                {errors.Email && <span>Enter Your Email</span>}
                <br /><br />
                <input type="number" {...register("ContactNo", { required:true , pattern:/^\d{10}$/ })} />
                {errors.ContactNo && <span>Enter Your Valid Contact Number!</span>}
                <br /><br />
                <input type="number" {...register("Age", { required:true ,min: 18, max: 99 })} />
                {errors.Age && <span>Enter Your Valid Age!</span>}
                <br /><br />
                <select {...register("Gender", { required: true })}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <br /><br />
                <input type="submit" />
                <br /><br />
            </form>
        </>
    )
}
export default Hooksform