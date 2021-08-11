import { Note } from '../../src/common/types';
import { convertToChords } from '../utils';
import { locrianScales, majorScales, minorScales, mixolydianScales } from './scales';

const triad = [1, 3, 5];
const sevenChord = [1, 3, 5, 7];

export const majorChords: Note[][] = convertToChords(majorScales, triad);
export const major7Chords: Note[][] = convertToChords(majorScales, sevenChord);
export const minorChords: Note[][] = convertToChords(minorScales, triad);
export const minor7Chords: Note[][] = convertToChords(minorScales, sevenChord);
export const dominant7Chords: Note[][] = convertToChords(mixolydianScales, sevenChord);
export const diminishedChords: Note[][] = convertToChords(locrianScales, triad);
export const minor7flat5Chords: Note[][] = convertToChords(locrianScales, sevenChord);
