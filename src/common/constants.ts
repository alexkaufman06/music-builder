import { Interval, NaturalNotes, Note } from "./types";

export const naturalNotes: NaturalNotes[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
export const majorScalePattern: Interval[] = ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '8P'];
export const minorScalePattern: Interval[] = ['1P', '2M', '3m', '4P', '5P', '6m', '7m', '8P'];
export const dorianScalePattern: Interval[] = ['1P', '2M', '3m', '4P', '5P', '6M', '7m', '8P'];
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