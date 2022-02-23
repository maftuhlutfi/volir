import Image from "next/image";
import Link from "next/link";
import Button from "../components/shared/Button";
import LoginWithButton from "../components/shared/Button/LoginWithButton";
import Card from "../components/shared/Card";
import CustomHead from "../components/shared/CustomHead";
import TextField from "../components/shared/Input/TextField";
import MainLayout from "../layout/MainLayout";

const LoginPage = () => {
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
                    <form className="mb-8">
                        <div className="mb-8">
                            <TextField id='email' label='Email' type='email' placeholder='Masukkan alamat email yang terdaftar' className='mb-4' />
                            <TextField id='password' label='Kata Sandi' type='password' placeholder='Masukkan kata sandi' className='mb-4' />
                            <TextField id='confirm-password' label='Konfirmasi Kata Sandi' type='password' placeholder='Masukkan kata sandi' />
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
        </>
    );
}

export default LoginPage;