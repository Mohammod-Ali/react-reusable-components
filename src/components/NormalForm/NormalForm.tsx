import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import Button from '../ui/Button';
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema, TNormalForm } from './validation';
import InputField from './InputField';



const NormalForm = () => {

    const methods = useForm<TNormalForm>({
        resolver: zodResolver(SignUpSchema)
    });

    const {
         register, 
         handleSubmit, 
         watch,
         formState: {errors} 
    } = methods

    console.log(watch('name'))

    const onSubmit = (data : FieldValues) => {
        // e.preventDefault()
        console.log(data)
    }
  
    return (
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
               <InputField ></InputField>
            </div>
            <div>
                <label className='block' htmlFor="email">Email </label>
                <input type="email" id="email" {...register('email', {required: true})} />
                {errors.email && <span className='text-xs text-red-500'>{errors.email?.message}</span>}
            </div>
            <div>
                <label className='block' htmlFor="password">Password </label>
                <input type="password" id="password" {...register('password', {minLength: 8})} />
                {errors.password && <span className='text-xs text-red-500'>{errors.password.message}</span>}
            </div>
            {/* <div>
                <label className='block' htmlFor="textarea">Textarea </label>
                <input type="textarea" id="textarea" {...register('textarea')} />
            </div> */}
            {/* <div>
                <label className='block' htmlFor="checkbox">Checkbox </label>
                <input type="checkbox" id="checkbox" {...register('checkbox')} />
            </div> */}
            
            {/* <select name="" id="">
                <option value="">one</option>
                <option value="">two</option>
                <option value="">three</option>
                <option value="">four</option>
            </select> */}
            <div className='text-center mt-8'>
            <Button type='submit'>Submit</Button>
            </div>
        </form>
        </FormProvider>
    );
};

export default NormalForm; 