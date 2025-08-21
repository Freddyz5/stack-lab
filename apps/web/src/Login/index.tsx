'use client'
import React, { useEffect, useState } from 'react';
import { Button, Image, Link } from '@heroui/react';
import CustomInput from '../shared/components/form/CustomInput';
import { AtSign, Eye, EyeClosed, Lock } from 'lucide-react';
import { Field, FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { loginSchema } from './utils/schema';
import { useLogin } from './hooks/useLogin';

const Login = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const { userLogin, isSuccess, isPending } = useLogin();

  const registerSubmit = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      const valuesToSend = {
        email: email.trim(),
        password
      };

      userLogin(valuesToSend)
    }
  })

  useEffect(() => {
    if(isSuccess) {
      router.push('/dashboard');
    }
  }, [isSuccess]);

  return (
    <main
      className='w-screen min-h-[1000px] sm:min-h-[700px] h-screen flex flex-col-reverse sm:flex-row justify-center items-center p-[40px] gap-[8.125vw] text-default'
      style={{background: "linear-gradient(63.36deg, #F72585 0%, #7209B7 25%, #3A0CA3 50%, #4361EE 75%, #4CC9F0 100%)"}}
    >
      <section className='flex flex-col justify-center items-center gap-8'>
        <div className='w-full flex flex-col items-center sm:items-start'>
          <p className='font-extrabold'>
            Iniciar session
          </p>
          <p className='font-thin'>
            Bienvenido de nuevo
          </p>
        </div>
        <form className='w-[60vw] min-w-[225px] sm:w-[38vw] sm: max-w-[350px] h-fit flex flex-col justify-center items-center gap-6'>
          <FormikProvider value={registerSubmit} >
            <Field
              name="email"
              type="email"
              placeholder="Email"
              component={CustomInput}
              
              startContent={
                <AtSign className="w-6 text-secondary"/>
              }
              isInvalid={
                registerSubmit.errors.email &&
                registerSubmit.touched.email
              }
              errorMessage={registerSubmit.errors.email}
              color='secondary'
            />

            <Field
              name="password"
              type={isVisible ? "text" : "password"}
              placeholder="Contraseña"
              component={CustomInput}
              startContent={
                <Lock className="w-6 text-secondary"/>
              }
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <Eye className="w-6 text-secondary" />
                  ) : (
                    <EyeClosed className="w-6 text-secondary" />
                  )}
                </button>
              }
              isInvalid={
                registerSubmit.errors.password &&
                registerSubmit.touched.password
              }
              errorMessage={registerSubmit.errors.password}
              color='secondary'
            />
            <div className='w-full flex justify-center font-thin text-sm'>
              <Link
                href="/passwordRecovery"
                size="md"
                color="foreground"
                underline="hover"
                className='hover:text-default'
                isDisabled
              >
                Olvidaste la contraseña
              </Link>
            </div>

            <Button
              size="lg"
              radius="full"
              color='primary'
              className="w-full mt-10 font-bold"
              onPress={() => registerSubmit.handleSubmit()}
              isDisabled={isPending}
            >
              Iniciar session
            </Button>
          </FormikProvider>
        </form>
        <p className='font-thin text-sm'>
          No tienes una cuenta aun? &nbsp;
          <Link
            href="/register"
            size="sm"
            color="foreground"
            underline="hover"
            className='font-extrabold text-default'
          >
            Regístrate
          </Link>
        </p>
      </section>
      <Image
        src='/login.png'
        className='sm:w-[35.156vw] sm:h-[35.156vw] w-[50vw] h-[50vw]'
      />
    </main>
  );
};

export default Login;