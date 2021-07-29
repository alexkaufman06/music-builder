import { Note } from "../src/main";

function convertToMode(scale: readonly Note[], relativeTonic: number): Note[] {
    const tonic = scale[relativeTonic - 1];
    let mode: Note[] = [...scale];

    while (mode[0] !== tonic) {
        mode.push(mode.shift() as Note);
    }

    mode = [...new Set(mode)]; // remove duplicates
    mode.push(mode[0]);

    return mode;
}

export function convertToMode2(scales:  Note[][]): Note[][] {
    const modes: Note[][] = [];
    scales.forEach((scale) => {
        modes.push(convertToMode(scale, 2));
    });

    return modes;
}

export function convertToMode6(scales:  Note[][]): Note[][] {
    const modes: Note[][] = [];
    scales.forEach((scale) => {
        modes.push(convertToMode(scale, 6));
    });

    return modes;
}