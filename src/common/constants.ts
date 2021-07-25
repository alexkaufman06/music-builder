import { Interval, NaturalNotes, Note } from "./types";

export const naturalNotes: NaturalNotes[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
export const majorScalePattern: Interval[] = ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '8P'];
export const minorScalePattern: Interval[] = ['1P', '2M', '3m', '4P', '5P', '6m', '7m', '8P'];
export const enharmonicEquivalentTones: Note[][] = [
    ['C', 'B#', 'Dbb'],
    ['C#', 'Bx', 'Db'],
    ['D', 'Cx', 'Ebb'],
    ['D#', 'Eb', 'Fbb'],
    ['E', 'Dx', 'Fb'],
    ['F', 'E#', 'Gbb'],
    ['F#', 'Ex', 'Gb'],
    ['G', 'Fx', 'Abb'],
    ['G#', 'Ab'],
    ['A', 'Gx', 'Bbb'],
    ['A#', 'Bb', 'Cbb'],
    ['B', 'Ax', 'Cb']
];
export const intervalStepValues: {[key in Interval]: number} = {
    '1P': 0,
    '2m': 1,
    '2M': 2,
    '3m': 3,
    '3M': 4,
    '4P': 5,
    '5d': 6,
    '5P': 7,
    '6m': 8,
    '6M': 9,
    '7m': 10,
    '7M': 11,
    '8P': 12
};
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