import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Router from "next/router";
import toast, { Toaster } from 'react-hot-toast';
const schema = yup.object({
    email: yup.string().email().required(" email is a required "),
    senha: yup.number().typeError(" password is a required ").positive().integer().required(),
}).required();
type FormData = yup.InferType<typeof schema>;
const dataAuth = {
    email: 'lipe@eu.com',
    senha: 123456
}
const notify = () => toast.success('Conectado com sucesso');

export const FormLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        //console.log(data)
        notify()
        setTimeout(() => {
            Router.push('/logged/')
        }, 1000);

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full text-gray-200 h-full flex flex-col justify-around items-center">
            <div className="relative w-full min-w-[200px] h-10 m-6">
                <input
                    {...register("email")}
                    className="peer w-3/4 h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-indigo-500"
                    placeholder="" />
                <label className="flex w-3/4 h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-indigo-500 before:border-blue-gray-200 peer-focus:before:!border-indigo-500 after:border-blue-gray-200 peer-focus:after:!border-indigo-500">
                    Email
                </label>
                <p className="text-red-500">{errors.email?.message}</p>
            </div>

            <div className="relative w-full min-w-[200px] h-10 m-6">
                <input
                    type="password"
                    {...register("senha")}
                    className="peer w-3/4 h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-indigo-500"
                    placeholder=" " />
                <label className="flex w-3/4 h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-indigo-500 before:border-blue-gray-200 peer-focus:before:!border-indigo-500 after:border-blue-gray-200 peer-focus:after:!border-indigo-500">
                    Senha
                </label>
                <p className="text-red-500">{errors.senha?.message}</p>
            </div>

            <div className="min-w-[200px] h-10 mt-6">
                <button type='submit' className="px-8 py-2 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                    Login
                </button>
            </div>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: 'green',
                        color: '#fff'
                    },
                    success: {
                        duration: 5000,
                    }
                }}
            />
        </form>
    );
}
