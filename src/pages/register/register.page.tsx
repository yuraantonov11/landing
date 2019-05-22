import {StyledRegister} from './register.styled';
import React, {useState}  from "react";

export const RegisterPage = () => {
    const [formData, setFormdata] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    function validateForm(): boolean {
        return (
            formData.email.length > 0 &&
            formData.password.length > 0 &&
            formData.password === formData.confirmPassword
        );
    }


    function handleChange(event: React.ChangeEvent<HTMLInputElement>):void {
        console.log(formData);

        setFormdata({
            ...formData,
            [event.target.id]: event.target.value
        });
        console.log(formData);
        console.log({[event.target.id]: event.target.value});
    }

    async function handleSubmit (event: React.FormEvent<HTMLFormElement>):Promise<void> {
        event.preventDefault();
        if(validateForm()){
            console.log(formData);
        }
    }

    return <StyledRegister onSubmit={handleSubmit}>
        <fieldset>
            <p>Email</p>
            <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
            />
        </fieldset>
        <fieldset>
            <p>Password</p>
            <input
                id="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
            />
        </fieldset>
        <fieldset>
            <p>Confirm Password</p>
            <input
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password"
            />
        </fieldset>
        <button type="submit">Submit</button>
    </StyledRegister>
};
