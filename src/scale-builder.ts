import { dorianScalePattern, majorScalePattern, minorScalePattern } from "./common/scales";
import { Note } from "./common/types";
import { IntervalBuilder } from "./interval-builder";
export class ScaleBuilder {
    static major(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, majorScalePattern);
    }

    static minor(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, minorScalePattern);
    }

    static dorian(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, dorianScalePattern);
    }
}
