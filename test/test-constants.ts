import { Note } from "../src/common/types";

export const majorScales: {[key: string]: Note[]} = {
    'Ab': ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab'],
    'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'],
    'A#': ['A#', 'B#', 'Cx', 'D#', 'E#', 'Fx', 'Gx', 'A#'],
    'Bb': ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'],
    'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B'],
    'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#'],
    'Db': ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'Db'],
    'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
    'Eb': ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb'],
    'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'],
    'F': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F'],
    'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'],
    'Gb': ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'Gb']
};
export const minorScales: {[key: string]: Note[]} = {
    'A': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A']
}
export const dorianScales: {[key: string]: Note[]} = {
    'D': ['D', 'E', 'F', 'G', 'A', 'B', 'C', 'D']
}