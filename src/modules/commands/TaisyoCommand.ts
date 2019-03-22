import { Command } from "./Command";
import { Types } from "modules/constants/Types";
import { System } from "modules/systems/Sysytem";

export class TaisyoCommand extends Command {
  static readonly MAIN_OPTIONS: Readonly<Types.Options> = {};
  static readonly SUB_COMMANDS: ReadonlyArray<string> = ["order"];
  static readonly SUB_OPTIONS: Readonly<Types.Options> = {};
  public constructor(args: string[]) {
    super("taisyo", args, TaisyoCommand);
  }

  public execute(system: System) {
    system.out("hello!");
  }
}