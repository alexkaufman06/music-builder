import { Note } from "../../src/common/types";
import { convertToChords } from "../utils";
import { majorScales, minorScales } from "./scales";

const triad = [1,3,5];
const sevenChord = [1,3,5,7]

export const majorChords: Note[][] = convertToChords(majorScales, triad);
export const major7Chords: Note[][] = convertToChords(majorScales, sevenChord);
export const minorChords: Note[][] = convertToChords(minorScales, triad);
export const minor7Chords: Note[][] = convertToChords(minorScales, sevenChord);