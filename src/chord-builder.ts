import { Note } from "./common/types";
import { majorChordPattern, minorChordPattern } from "./common/constants";
import { IntervalBuilder } from "./interval-builder";

export class ChordBuilder {
    static major(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, majorChordPattern);
    }

    static minor(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, minorChordPattern);
    }
}
