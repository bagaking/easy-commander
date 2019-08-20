#!/usr/bin/env node

import * as commander from "commander";
import {Command} from "commander";

export interface IArg {
    alias?: string;
    desc?: string;
    input?: boolean;
}

export interface ICmd {
    desc: string;
    args: {
        [argName: string]: IArg
    };
    exec: (...args: any[]) => Promise<void>;
}

export class CmdMaker {

    version = process.env.npm_package_version || "0.0.1";

    constructor(){
        commander.version(this.version);
    }

    get commander(){
        return commander;
    }

    append(blob: { [key: string]: ICmd }): this {
        for (let cmdName in blob) {
            const cmd = commander.command(cmdName)
                .description(blob[cmdName].desc)
                .action((...args: string[]) => blob[cmdName].exec(...args));
            for (let argName in blob[cmdName].args) {
                const arg: IArg = blob[cmdName].args[argName];
                cmd.option(`${arg.alias ? "-" + arg.alias + "," : ""} --${argName} ${arg.input ? "<" + argName + ">" : ""}`, arg.desc);
            }
        }
        return this;
    }

    custom(cb: (cmd : Command) => void): this {
        cb(this.commander);
        return this;
    }

    start() {
        commander.parse(process.argv);
    }
}

export const cmdMaker = new CmdMaker();

