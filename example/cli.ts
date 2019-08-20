import {cmdMaker, ICmd} from "../src";

import * as fs from "fs";

const lsBlob: ICmd = {
    desc: "ls <path>",
    args: {
        to_upper: {
            alias: "u",
            desc: "print toUpper",
            input: false
        }
    },
    exec: (path: string, cmd: { to_upper: boolean }): Promise<void> => {
        if (!cmd) {
            cmd = path as any;
            path = undefined;
        }
        const paths = fs.readdirSync(path || ".");
        console.log(paths.reduce((a, b) => `${a}\n${cmd.to_upper ? b.toUpperCase() : b}`, "files:"));

        return;
    }
};

cmdMaker
    .append({ls: lsBlob})
    .start();

