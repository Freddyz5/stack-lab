import {createVideoGame} from "../services/createVideoGame";
import {useMutation} from "@tanstack/react-query";
import {useSnack} from "../../shared/hooks/useSnack";

export const useAddVideoGame = () => {
    const {enqueueSnack} = useSnack();

    const {mutate: addVideoGame, isSuccess, isPending, error}=useMutation({
        mutationFn: createVideoGame,
        onSuccess: () => {
            enqueueSnack(`Videojuego creado exitosamente!`, "success");
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