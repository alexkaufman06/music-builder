import { Note } from "./common/types";
import { dorianScalePattern, majorScalePattern, minorScalePattern } from "./common/constants";
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
