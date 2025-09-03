import {deleteVideoGame} from "../services/deleteVideoGame";
import {useMutation} from "@tanstack/react-query";
import {useSnack} from "../../shared/hooks/useSnack";

export const useDeleteVideoGame = () => {
    const {enqueueSnack} = useSnack();

    const {mutate: deleteGame, isSuccess, isPending, error}=useMutation({
        mutationFn: deleteVideoGame,
        onSuccess: () => {
            enqueueSnack(`Videojuego eliminado exitosamente!`, "success");
        },
        onError: (error: Error) => {
            enqueueSnack(error.message, "error");
        }
    });

    return {
        deleteGame,
        isSuccess,
        isPending,
        error
    }
}