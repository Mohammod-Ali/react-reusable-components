import React from 'react';
import { useForm } from 'react-hook-form';

const NormalForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className='block' htmlFor="name">Name </label>
                <input type="text" id="name" {...register('name')} />
            </div>
            <div>
                <label className='block' htmlFor="email">Email </label>
                <input type="email" id="email" {...register('email')} />
            </div>
            <div>
                <label className='block' htmlFor="password">Password </label>
                <input type="password" id="password" {...register('password')} />
            </div>
            
            <select name="" id="">
                <option value="">one</option>
                <option value="">two</option>
                <option value="">three</option>
                <option value="">four</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default NormalForm; 