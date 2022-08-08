import React from "react";
import { useFormik } from 'formik';
const Formik = () => {
    const validate = values => {
        const errors = {};
        if (!values.Name) {
            errors.Name = 'Required';
            console.log(errors.Name)
        }
        else if (values.Name.length < 10) {
            //errors.Name = 'Must Be Greater than 10 Character !'
            errors.Name = 'Must be less than 10 characters ';
            console.log(errors.Name);
        } if (!values.Email) {
            errors.Email = 'Required';
            console.log(errors.Email)
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
            errors.Email = 'Invalid Email Address!!';
            console.log(errors.Email)
        }
        if (!values.number) {
            errors.number = 'Required'
            console.log(errors.number);
        }
        else if (!/^\d{10}$/.test(values.number)) {
            errors.number = 'Please Enter the correct Mobile Number'
            console.log(errors.number)
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            Name: '',
            Email: '',
            number: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
            //alert(values)
        },
    });
    return (
        <>
            <h4>form Using Formik</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="Name">Name </label>
                <input
                    id="Name"
                    name="Name"
                    type="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Name}
                />
                {formik.errors.Name ? <div>{formik.errors.Name}</div> : null}
                <br /><br />
                <label htmlFor="Email">Email</label>
                <input
                    id="Email"
                    name="Email"
                    type="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Email}
                />
                {formik.errors.Email ? <div>{formik.errors.Email}</div> : null}
                <br /><br />
                <label htmlFor="number">Contact Number</label>
                <input
                    id="number"
                    name="number"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.number}
                />
                {formik.errors.number ? <div>{formik.errors.number}</div> : null}
                <br /><br />  <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Formik;