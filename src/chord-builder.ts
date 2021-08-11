import {
  diminishedChordPattern,
  dominant7ChordPattern,
  major7ChordPattern,
  majorChordPattern,
  minor7ChordPattern,
  minor7flat5ChordPattern,
  minorChordPattern,
} from './common/chords';
import { Note, NoteInput } from './common/types';
import { IntervalBuilder } from './interval-builder';

export class ChordBuilder {
  static major(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, majorChordPattern);
  }

  static major7(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, major7ChordPattern);
  }

  static minor(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, minorChordPattern);
  }

  static minor7(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, minor7ChordPattern);
  }

  static dominant7(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, dominant7ChordPattern);
  }

  static diminished(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, diminishedChordPattern);
  }

  static minor7flat5(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, minor7flat5ChordPattern);
  }
}
