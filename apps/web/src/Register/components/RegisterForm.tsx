import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@heroui/react';
import CustomInput from '../../shared/components/form/CustomInput';
import { Field, FormikProvider, useFormik } from 'formik';
import { AtSign, Eye, EyeClosed, Lock, CircleUser } from 'lucide-react';
import { registerSchema } from '../utils/schema';
import { useAddUser } from '../hooks/useAddUsers';

const RegisterForm = () => {
  const router = useRouter();
  const { addUser, isSuccess, isPending } = useAddUser();
  const [isVisible, setIsVisible] = useState(false);

  const registerSubmit = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      const {name, lastName, email, password} = values;

      const valuesToSend = {
        name: name.trim(),
        lastName: lastName.trim(),
        email: email.toLowerCase(),
        password: password,
      };

      addUser(valuesToSend)
    }
  })

  useEffect(() => {
    if(isSuccess) {
      router.push('/login');
    }
  }, [isSuccess]);

  return (
    <form className='w-[60vw] min-w-[225px] sm:w-[38vw] sm: max-w-[350px] h-fit flex flex-col justify-center items-center gap-6' onSubmit={registerSubmit.handleSubmit}>
      <FormikProvider value={registerSubmit} >
        <div className='w-full flex gap-3 sm:flex-row flex-col'>
          <Field
            name="name"
            type="text"
            placeholder="Nombre"
            component={CustomInput}
            startContent={
              <CircleUser className="w-8 text-secondary"/>
            }
            isInvalid={
              registerSubmit.errors.name &&
              registerSubmit.touched.name
            }
            errorMessage={
              (registerSubmit.errors.name?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                ? "" 
                : registerSubmit.errors.name}
            color="secondary"
          />

          <Field
            name="lastName"
            type="text"
            placeholder="Apellido"
            component={CustomInput}
            startContent={
              <CircleUser className="w-8 text-secondary"/>
            }
            isInvalid={
              registerSubmit.errors.lastName &&
              registerSubmit.touched.lastName
            }
            errorMessage={
              (registerSubmit.errors.lastName?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                ? "" 
                : registerSubmit.errors.lastName}
            color="secondary"
          />
        </div>

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
          errorMessage={
              (registerSubmit.errors.email?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                ? "" 
                : registerSubmit.errors.email}
          color="secondary"
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
            <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
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
          errorMessage={
              (registerSubmit.errors.password?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                ? "" 
                : registerSubmit.errors.password}
          color="secondary"
        />

        <Field
          name="confirmPassword"
          type={isVisible ? "text" : "password"}
          placeholder="Confirma tu contraseña"
          component={CustomInput}
          startContent={
            <Lock className="w-6 text-secondary"/>
          }
          endContent={
            <button className="focus:outline-none " type="button" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? (
                <Eye className="w-6 text-secondary" />
              ) : (
                <EyeClosed className="w-6 text-secondary" />
              )}
            </button>
          }
          isInvalid={
            registerSubmit.errors.confirmPassword &&
            registerSubmit.touched.confirmPassword
          }
          errorMessage={
              (registerSubmit.errors.confirmPassword?.includes("La confirmación de la contraseña es obligatoria") && registerSubmit.submitCount === 0)
                ? "" 
                : registerSubmit.errors.confirmPassword}
          color="secondary"
        />

        <Button
          size="lg"
          radius="full"
          className="w-full mt-10 font-bold"
          onPress={() => registerSubmit.handleSubmit()}
          isDisabled={isPending}
          color="primary"
        >
          Crear mi cuenta
        </Button>
      </FormikProvider>
    </form>
  );
};

export default RegisterForm;