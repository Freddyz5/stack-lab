import { createUser } from '../services/createUser';
import { useSnack } from "../../shared/hooks/useSnack";
import { useMutation } from '@tanstack/react-query'

export const useAddUser = () => {
  const { enqueueSnack } = useSnack();

  const { mutate: addUser, isSuccess, isPending, error} = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      enqueueSnack(`Registro exitoso, Bienvenido a la app! 🎉`, "success");
      enqueueSnack(`Verifica tu correo para activar tu cuenta y acceder.`, "info");
    },
    onError: (error: Error) => {
      enqueueSnack(error.message, "error");
    }
  })

  return {
    addUser,
    isSuccess,
    isPending,
    error
  }
}