import { Note } from "../../src/common/types";
import { convertToMode2, convertToMode6 } from "../utils";

export const majorScales: Note[][] = [
    ['Abb', 'Bbb', 'Cb', 'Dbb', 'Ebb', 'Fb', 'Gb', 'Abb'],
    ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab'],
    ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'],
    ['A#', 'B#', 'C##', 'D#', 'E#', 'F##', 'G##', 'A#'],
    ['A##', 'B##', 'C###', 'D##', 'E##', 'F###', 'G###', 'A##'],
    ['Bbb', 'Cb', 'Db', 'Ebb', 'Fb', 'Gb', 'Ab', 'Bbb'],
    ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'],
    ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B'],
    ['B#', 'C##', 'D##', 'E#', 'F##', 'G##', 'A##', 'B#'],
    ['Cbb', 'Dbb', 'Ebb', 'Fbb', 'Gbb', 'Abb', 'Bbb', 'Cbb'],
    ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb', 'Cb'],
    ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#'],
    ['C##', 'D##', 'E##', 'F##', 'G##', 'A##', 'B##', 'C##'],
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