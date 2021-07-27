import { Note } from "./common/types";
import { dorianScalePattern, majorScalePattern, minorScalePattern } from "./common/constants";
import { IntervalBuilder } from "./interval-builder";

export class ScaleBuilder {
    static majorScale(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, majorScalePattern);
    }

    static minorScale(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, minorScalePattern);
    }

    static dorianScale(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, dorianScalePattern);
    }
}
