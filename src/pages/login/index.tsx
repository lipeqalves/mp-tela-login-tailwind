import { DM_Sans } from 'next/font/google'
import { FormLogin } from '@/components/formLogin'

const dmSans = DM_Sans({ subsets: ['latin'] })
import img from '../../assets/image_3.jpg'
export default function Login() {
    return (
        <main
            className={`bg-gray-900 flex min-h-screen h-screen items-center justify-center ${dmSans.className}`}
        >
            <div className='flex w-[854px] h-3/4 bg-g-950 rounded-2xl'>
                <div className='flex-col justify-between items-center w-1/2 h-full '>
                    <h1 className='w-3/4 h-16 m-6 text-gray-200 text-4xl font-bold' >Faça seu login<span className='text-indigo-500'>.</span></h1>
                    <div className='w-full h-1/2 mx-6'><FormLogin /></div>
                </div>
                <div
                    className='w-3/4 h-full rounded-r-2xl bg-g-950 shadow-[inset_50px_0px_40px_60px_#070709] bg-cover'
                    style={{ backgroundImage: `url(${img.src})` }}
                >
                </div>
            </div>
        </main>
    )
}