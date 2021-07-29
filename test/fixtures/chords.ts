import { Note } from "../../src/common/types";

export const majorChords: {[key: string]: Note[]} = {
    'C': ['C', 'E', 'G'],
    'D': ['D', 'F#', 'A']
}
export const major7Chords: {[key: string]: Note[]} = {
    'C': ['C', 'E', 'G', 'B'],
    'D': ['D', 'F#', 'A', 'C#']
}
export const minorChords: {[key: string]: Note[]} = {
    'C': ['C', 'Eb', 'G'],
    'D': ['D', 'F', 'A']
}
export const minor7Chords: {[key: string]: Note[]} = {
    'C': ['C', 'Eb', 'G', 'Bb'],
    'D': ['D', 'F', 'A', 'C']
}