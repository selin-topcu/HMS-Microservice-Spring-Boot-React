import React from 'react';
import {Button, PasswordInput, TextInput} from '@mantine/core';
import {IconHeartbeat} from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value: string) => (value ? null : 'Invalid password')
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
    };

    return (
        <div style={{background:'url("/bg.jpg")'}}
             className="h-screen w-screen !bg-cover !bg-center !bg-no-repeat flex flex-col items-center justify-center justify-center">

            <div className='py-3 text-primary-500 flex gap-1 items-center'>
                <IconHeartbeat size={45} stroke={2.5}/>
                <span className='font-heading font-semibold text-3xl'>Pulse</span>
            </div>

            <div className="w-[450px] backdrop-blur-md p-10 py-8 rounded-lg">
               <form onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-5
               [&_input]:placeholder-netural-100
               [&_.mantine-Input-input]:!border-white
               [&_.mantine-Input-input]:!border
               [&_.mantine-Input-input:focus]:!border-primary-400
               [&_input]:!pl-2
             [&_svg]:text-white
             [&_input]:!text-white'>


                    <div className= "self-center font-medium font-heading text-white text-xl">Login</div>
                    <TextInput
                        className="transition duration-300"
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Email"
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput
                        className="transition duration-300"
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Password"
                        {...form.getInputProps('password')}
                    />
                    <Button radius="md" size="md" type="submit" >Login</Button>
                    <div className="text-neutral-100 text-sm self-center">Don't have an account? <Link to="/register" className="text-primary-600">Register</Link></div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
