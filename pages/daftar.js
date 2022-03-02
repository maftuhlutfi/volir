import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NotAuthenticatedPage from "../components/HOC/NotAuthenticatedPage";
import Button from "../components/shared/Button";
import LoginWithButton from "../components/shared/Button/LoginWithButton";
import Card from "../components/shared/Card";
import CustomHead from "../components/shared/CustomHead";
import TextField from "../components/shared/Input/TextField";
import Message from "../components/shared/Message";
import { useAuth } from "../context/AuthUserContext";
import MainLayout from "../layout/MainLayout";
import formatErrorMessage from "../utils/formatErrorMessage";

const DaftarPage = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [message, setMessage] = useState(null)

    const { email, password, confirmPassword } = input

    const { createUserWithEmailAndPassword, authUser } = useAuth()
    const router = useRouter()

    const handleChange = e => {
        const { value, name } = e.target

        setInput(p => ({
            ...p,
            [name]: value
        }))
        setMessage(null)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage({
                type: 'error',
                message: 'Password dan konfirmasi password tidak sama'
            })
            return
        }

        createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                if (userCredentials) {
                    setMessage({
                        type: 'success',
                        message: 'Daftar berhasil'
                    })
                    router.push('/profil')
                }
            })
            .catch(err => {
                setMessage({
                    type: 'error',
                    message: formatErrorMessage(err.message)
                })
            })
    }

    console.log(authUser)

    return (
        <>
            <CustomHead
                title='Daftar'
                description='Yuk daftar untuk ikut kegiatan dan melakukan banyak kebaikan lain.'
            />
            <MainLayout>
                <Card className='w-[420px] max-w-full relative mx-auto'>
                    <div className="mb-8 text-center">
                        <h3 className="mb-4 text-2xl font-bold">Daftar</h3>
                        <p className="text-gray-600">Yuk daftar untuk ikut kegiatan dan melakukan banyak kebaikan lain.</p>
                    </div>
                    <form className="mb-8" onSubmit={handleSubmit}>
                        <div className="mb-8">
                            <TextField id='email' name='email' value={email} onChange={handleChange} label='Email' type='email' placeholder='Masukkan alamat email yang terdaftar' className='mb-4' required />
                            <TextField id='password' name='password' value={password} onChange={handleChange} label='Kata Sandi' type='password' placeholder='Masukkan kata sandi' className='mb-4' required />
                            <TextField id='confirm-password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Konfirmasi Kata Sandi' type='password' placeholder='Masukkan kata sandi' required />
                        </div>
                        <Button type='secondary' label='Daftar' full />
                    </form>
                    <div className="mb-8 text-center">
                        Sudah punya akun?
                        <Link href='/login'>
                            <a className="font-bold text-primary"> Masuk </a>
                        </Link>
                        atau
                    </div>
                    <LoginWithButton type='google' className='mb-5' />
                    <LoginWithButton type='facebook' />
                </Card>
            </MainLayout>
            {message && <Message {...message} />}
        </>
    );
}

export default NotAuthenticatedPage(DaftarPage);