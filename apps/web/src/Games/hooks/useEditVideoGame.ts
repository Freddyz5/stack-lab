import {editVideoGame} from "../services/editVideoGame";
import {useMutation} from "@tanstack/react-query";
import {useSnack} from "../../shared/hooks/useSnack";

export const useEditVideoGame = () => {
    const {enqueueSnack} = useSnack();

    const {mutate: editGame, isSuccess, isPending, error}=useMutation({
        mutationFn: editVideoGame,
        onSuccess: () => {
            enqueueSnack(`Videojuego editado exitosamente!`, "success");
        },
        onError: (error: Error) => {
            enqueueSnack(error.message, "error");       
        }
});

return{
    editGame,
    isSuccess,
    isPending,
    error
}
}