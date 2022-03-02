import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../components/shared/Button";
import LoginWithButton from "../components/shared/Button/LoginWithButton";
import Card from "../components/shared/Card";
import CustomHead from "../components/shared/CustomHead";
import TextField from "../components/shared/Input/TextField";
import MainLayout from "../layout/MainLayout";
import { useAuth } from "../context/AuthUserContext";
import NotAuthenticatedPage from "../components/HOC/NotAuthenticatedPage";

const LoginPage = () => {
    const router = useRouter()
    const [input, setInput] = useState({
        email: 'admin@volir.app',
        password: 'volir2022'
    })
    const { email, password } = input
    const [errMsg, setErrMsg] = useState('')

    const { signInWithEmailAndPassword, authUser, loading } = useAuth()

    const handleChange = e => {
        const { value, name } = e.target

        setInput(prev => ({
            ...prev,
            [name]: value
        }))
        setErrMsg('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
            .then(() => {
                if (authUser.role == 'admin') {
                    router.push('/admin')
                    return
                }
            })
            .catch(err => {
                setErrMsg(err.message.split('/')[1].split('-').join(' ').replace(').', ''))
            })
    }

    return (
        <>
            <CustomHead
                title='Login'
                description='Masuk ke akun volir dan ikut menyejahterakan masjid'
            />
            <MainLayout>
                <Card className='w-[420px] max-w-full relative mx-auto'>
                    <div className="mb-8 text-center">
                        <h3 className="mb-4 text-2xl font-bold">Login</h3>
                        <p className="text-gray-600">Masuk dulu untuk melanjutkan aktivitas baikmu</p>
                    </div>
                    <form onSubmit={handleSubmit} className="mb-8">
                        <div className="mb-8">
                            <TextField id='email' name='email' onChange={handleChange} value={email} label='Email' type='email' placeholder='Masukkan alamat email yang terdaftar' className='mb-4' />
                            <TextField id='password' name='password' onChange={handleChange} value={password} label='Kata Sandi' type='password' placeholder='Masukkan kata sandi' />
                        </div>
                        <Button type='secondary' label='Login' loading={loading} full />
                    </form>
                    <div className="mb-8 text-center">
                        Belum punya akun?
                        <Link href='/daftar'>
                            <a className="font-bold text-primary"> Daftar disini </a>
                        </Link>
                        atau
                    </div>
                    <LoginWithButton type='google' className='mb-5' />
                    <LoginWithButton type='facebook' />
                </Card>
            </MainLayout>
        </>
    );
}

export default NotAuthenticatedPage(LoginPage);