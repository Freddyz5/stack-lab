import {createVideoGame} from "../services/createVideoGame";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useSnack} from "../../shared/hooks/useSnack";

export const useAddVideoGame = () => {
    const {enqueueSnack} = useSnack();
    const queryClient = useQueryClient();

    const {mutate: addVideoGame, isSuccess, isPending, error}=useMutation({
        mutationFn: createVideoGame,
        onSuccess: () => {
            enqueueSnack(`Videojuego creado exitosamente!`, "success");
            queryClient.invalidateQueries({ queryKey: ['videoGames'] });
        },
        onError: (error: Error) => {
            enqueueSnack(error.message, "error");
        }
    });

    return {
        addVideoGame,
        isSuccess,
        isPending,
        error
    }
}