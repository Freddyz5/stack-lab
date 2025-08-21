'use client'
import { Image } from '@heroui/react';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <main
      className='w-screen min-h-[1000px] sm:min-h-[700px] h-screen flex flex-col sm:flex-row justify-center items-center p-[40px] gap-[8.125vw] text-default'
      style={{background: "linear-gradient(63.36deg, #F72585 0%, #7209B7 25%, #3A0CA3 50%, #4361EE 75%, #4CC9F0 100%)"}}
    >
      <Image
        src='/register.png'
        className='sm:w-[35.156vw] sm:h-[35.156vw] w-[50vw] h-[50vw]'
      />
      <section className='flex flex-col justify-center items-center gap-8'>
        <div className='w-full flex flex-col items-center sm:items-start'>
          <p className='font-extrabold'>
            Crea tu cuenta
          </p>
          <p className='font-thin'>
            Y administra tu dinero
          </p>
        </div>
        <RegisterForm />
        <p className='font-thin text-sm'>
          Ya tienes una cuenta?
          <a href="/login" className='font-extrabold decoration-solid hover:underline'> Inicia session</a>
        </p>
      </section>
    </main>
  );
};

export default Register;