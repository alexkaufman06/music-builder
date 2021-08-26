import {
  dorianScalePattern,
  locrianScalePattern,
  lydianScalePattern,
  majorPentatonicScalePattern,
  majorScalePattern,
  minorPentatonicScalePattern,
  minorScalePattern,
  mixolydianScalePattern,
  phrygianScalePattern,
} from './common/scales';
import { Note, NoteInput } from './common/types';
import { IntervalBuilder } from './interval-builder';
export class ScaleBuilder {
  static major(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, majorScalePattern);
  }

  static majorPentatonic(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, majorPentatonicScalePattern);
  }

  static minor(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, minorScalePattern);
  }

  static minorPentatonic(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, minorPentatonicScalePattern);
  }

  // TODO: Add ionian

  static dorian(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, dorianScalePattern);
  }

  static phrygian(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, phrygianScalePattern);
  }

  static lydian(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, lydianScalePattern);
  }

  static mixolydian(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, mixolydianScalePattern);
  }

  static aeolian(note: NoteInput): Note[] {
    return this.minor(note);
  }

  static locrian(note: NoteInput): Note[] {
    return IntervalBuilder.getNotes(note, locrianScalePattern);
  }
}
