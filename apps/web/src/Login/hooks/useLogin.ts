import { useSnack } from "../../shared/hooks/useSnack";
import { useMutation } from '@tanstack/react-query'
import { simpleLogin } from "../services/simpleLogin";
import { useUserStore } from "../../shared/store/useUser";

export const useLogin = () => {
  const { enqueueSnack } = useSnack();
  const setUserInfo = useUserStore(state => state.setUserInfo);

  const { mutate: userLogin, isSuccess, isPending, error} = useMutation({
    mutationFn: simpleLogin,
    onSuccess: (data) => {
      enqueueSnack(`Bienvenido 🎉`, "success");
      if (data){
        setUserInfo({
          id: data.id,
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          avatar: "",
        })
      }
    },
    onError: (error: Error) => {
      enqueueSnack(error.message, "error");
    }
  })

  return {
    userLogin,
    isSuccess,
    isPending,
    error
  }
}