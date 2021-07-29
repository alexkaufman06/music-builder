import { major7ChordPattern, majorChordPattern, minor7ChordPattern, minorChordPattern } from "./common/chords";
import { Note } from "./common/types";
import { IntervalBuilder } from "./interval-builder";

export class ChordBuilder {
    static major(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, majorChordPattern);
    }

    static major7(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, major7ChordPattern);
    }

    static minor(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, minorChordPattern);
    }

    static minor7(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, minor7ChordPattern);
    }
}
