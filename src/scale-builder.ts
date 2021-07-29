import { dorianScalePattern, majorScalePattern, minorScalePattern } from "./common/scales";
import { Note, NoteInput } from "./common/types";
import { IntervalBuilder } from "./interval-builder";
export class ScaleBuilder {
    static major(note: NoteInput): Note[] {
        return IntervalBuilder.getNotes(note, majorScalePattern);
    }

    static minor(note: NoteInput): Note[] {
        return IntervalBuilder.getNotes(note, minorScalePattern);
    }

    static dorian(note: NoteInput): Note[] {
        return IntervalBuilder.getNotes(note, dorianScalePattern);
    }
}
