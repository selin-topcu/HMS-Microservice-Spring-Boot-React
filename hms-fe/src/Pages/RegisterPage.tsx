import React from 'react';
import {Button, PasswordInput, SegmentedControl, TextInput} from '@mantine/core';
import {IconHeartbeat} from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    const form = useForm({
        initialValues: {
            type: "PATIENT",
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: {
            email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value: string) => (value ? null : 'Invalid password'),
            confirmPassword: (value: string, values: {
                password: string;
            }) => (value === values.password ? null : 'Passwords do not match')
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
    };

    return (
        <div style={{background: 'url("/bg.jpg")'}}
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


                    <div className="self-center font-medium font-heading text-white text-xl">Register</div>

                    <SegmentedControl {...form.getInputProps('type')} fullWidth size="md" radius="md" color="primary" bg="none"
                                      className="[&_*]:!text-white border border-white"
                                      data={[{label: "Patient", value: "PATIENT"}, {label: "Doctor", value: "DOCTOR"}, {label: "Admin", value: "ADMIN"}]}/>

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

                    <PasswordInput
                        className="transition duration-300"
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Confirm Password"
                        {...form.getInputProps('confirmPassword')}
                    />
                    <Button radius="md" size="md" type="submit">Register</Button>
                    <div className="text-neutral-100 text-sm self-center">Have an account? <Link to="/login"
                                                                                                 className="text-primary-600">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
