import {deleteVideoGame} from "../services/deleteVideoGame";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useSnack} from "../../shared/hooks/useSnack";

export const useDeleteVideoGame = () => {
    const {enqueueSnack} = useSnack();
        const queryClient = useQueryClient();

    const {mutate: deleteGame, isSuccess, isPending, error}=useMutation({
        mutationFn: deleteVideoGame,
        onSuccess: () => {
            enqueueSnack(`Videojuego eliminado exitosamente!`, "success");
            queryClient.invalidateQueries({ queryKey: ['videoGames'] });
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