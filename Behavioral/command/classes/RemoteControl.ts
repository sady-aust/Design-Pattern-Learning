import {Command} from "../interfaces/Command";

export class RemoteControl {
    submit(command: Command) {
        command.execute();
    }
}
