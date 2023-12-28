import Router from 'next/router';
import { DM_Sans } from 'next/font/google'
import toast, { Toaster } from 'react-hot-toast';
const dmSans = DM_Sans({ subsets: ['latin'] })
import img from '../../assets/image_3.jpg'
const notify = () => toast.success('Desconectado com sucesso');
export default function Logged() {

    const handleLogout = () => {
        notify()
        Router.push('/')
    }

    return (
        <div className={`relative bg-gray-900 flex min-h-screen h-screen items-center justify-center ${dmSans.className}`}>

            <div className="min-w-[200px] text-center h-10 absolute">
                <h1 className='text-4xl text-gray-400 mb-6' >Seja Bem Vindo</h1>
                <button type='button' onClick={handleLogout} className="px-8 py-2 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                    Logout
                </button>

            </div>
            <div
                className='w-full h-full rounded-r-2xl bg-g-950 shadow-[inset_50px_0px_40px_30px_#070709] bg-cover'
                style={{ backgroundImage: `url(${img.src})` }}
            >
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
        </div>

    )
};