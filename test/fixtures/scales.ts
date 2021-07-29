import { Note } from "../../src/common/types";
import { convertToMode2, convertToMode6 } from "../utils";

export const majorScales: Note[][] = [
    ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab'],
    ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'],
    ['A#', 'B#', 'Cx', 'D#', 'E#', 'Fx', 'Gx', 'A#'],
    ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'],
    ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B'],
    ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#'],
    ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'Db'],
    ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
    ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb'],
    ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'],
    ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F'],
    ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'],
    ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'Gb']
];
export const minorScales: Note[][] = convertToMode6(majorScales);
export const dorianScales: Note[][] = convertToMode2(majorScales);