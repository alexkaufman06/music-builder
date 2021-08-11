import { Note } from '../../src/common/types';
import { convertToMajorPentatonic, convertToModes } from '../utils';

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
  ['B##', 'C###', 'D###', 'E##', 'F###', 'G###', 'A###', 'B##'],
  ['Cbb', 'Dbb', 'Ebb', 'Fbb', 'Gbb', 'Abb', 'Bbb', 'Cbb'],
  ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb', 'Cb'],
  ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
  ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#'],
  ['C##', 'D##', 'E##', 'F##', 'G##', 'A##', 'B##', 'C##'],
  ['Dbb', 'Ebb', 'Fb', 'Gbb', 'Abb', 'Bbb', 'Cb', 'Dbb'],
  ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'Db'],
  ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
  ['D#', 'E#', 'F##', 'G#', 'A#', 'B#', 'C##', 'D#'],
  ['D##', 'E##', 'F###', 'G##', 'A##', 'B##', 'C###', 'D##'],
  ['Ebb', 'Fb', 'Gb', 'Abb', 'Bbb', 'Cb', 'Db', 'Ebb'],
  ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb'],
  ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'],
  ['E#', 'F##', 'G##', 'A#', 'B#', 'C##', 'D##', 'E#'],
  ['E##', 'F###', 'G###', 'A##', 'B##', 'C###', 'D###', 'E##'],
  ['Fbb', 'Gbb', 'Abb', 'Bbbb', 'Cbb', 'Dbb', 'Ebb', 'Fbb'],
  ['Fb', 'Gb', 'Ab', 'Bbb', 'Cb', 'Db', 'Eb', 'Fb'],
  ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F'],
  ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#', 'F#'],
  ['F##', 'G##', 'A##', 'B#', 'C##', 'D##', 'E##', 'F##'],
  ['Gbb', 'Abb', 'Bbb', 'Cbb', 'Dbb', 'Ebb', 'Fb', 'Gbb'],
  ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'Gb'],
  ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'],
  ['G#', 'A#', 'B#', 'C#', 'D#', 'E#', 'F##', 'G#'],
  ['G##', 'A##', 'B##', 'C##', 'D##', 'E##', 'F###', 'G##'],
];
export const minorScales: Note[][] = convertToModes(majorScales, 6);
export const dorianScales: Note[][] = convertToModes(majorScales, 2);
export const phyrgianScales: Note[][] = convertToModes(majorScales, 3);
export const lydianScales: Note[][] = convertToModes(majorScales, 4);
export const mixolydianScales: Note[][] = convertToModes(majorScales, 5);
export const aeolianScales: Note[][] = convertToModes(majorScales, 6);
export const locrianScales: Note[][] = convertToModes(majorScales, 7);
export const majorPentatonicScales: Note[][] = convertToMajorPentatonic(majorScales);
export const minorPentatonicScales: Note[][] = convertToModes(majorPentatonicScales, 5);
