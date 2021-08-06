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

export function convertToModes(scales:  Note[][], mode: number): Note[][] {
    const modes: Note[][] = [];
    scales.forEach((scale) => {
        modes.push(convertToMode(scale, mode));
    });

    return modes;
}

export function convertToMajorPentatonic(scales: readonly Note[][]): Note[][] {
    const majorPentatonicScales: Note[][] = [];
    scales.forEach((scale) => {
        majorPentatonicScales.push([
            scale[0] as Note,
            scale[1] as Note,
            scale[2] as Note,
            scale[4] as Note,
            scale[5] as Note,
            scale[7] as Note
        ]);
    });

    return majorPentatonicScales;
}

export function convertToChords(scales: Note[][], pattern: number[]): Note[][] {
    const chords: Note[][] = [];
    scales.forEach((scale) => {
        let chord: Note[] = [];
        pattern.forEach((chordScaleDegree) => {
            chord.push(scale[chordScaleDegree - 1]);
        });
        chords.push(chord);
    });

    return chords;
}