import { VideoGameCreate } from "core";
import { VideoGameDrizzleRepository } from "core";

export class CreateVideoGameMutation{
    private creator: VideoGameCreate;

    constructor() {
        const repository = new VideoGameDrizzleRepository();
        this.creator = new VideoGameCreate(repository);
    }

    async run(args: any) {
        await this.creator.run(args);
    }
}

export const createVideoGame = async (_: any, args: any, context: any) => {

    const mutation = new CreateVideoGameMutation();
    await mutation.run(args.input);

    return true;
};