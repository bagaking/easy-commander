# Easy Commander

easy-commander is a framework that allows you to create clis quickly and easily, based on commander.

## Installation

`npm i --SAVE easy-commander` or `yarn add easy-commander`

## Quick Start

0. `import {cmdMaker, ICmd} from "easy-commander";`.
1. Create your **<Cmd_Blob>** of interface ICmd.
2. Using method `cmdMaker.append({`**<Cmd_Name>** `:` **<Cmd_Blob>** `})` to load it.
3. If you would like to add more, there are 3 ways:
    1. add more **<Cmd_Blob>** in the input structure
    `cmdMaker.append({ a: blob1, b: blob2, ... })`
    2. pipe the method `append`
    `cmdMaker.append({ a: blob1 }).append({ b: blob2 })`
    3. both
4. Finally, call cmdMaker.start()

## Usage Examples

- [basic usage](./example/cli.ts)
