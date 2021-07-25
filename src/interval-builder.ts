import { Interval, NaturalNotes, Note } from "./common/types";
import { enharmonicEquivalentTones, intervalStepValues, naturalNotes } from "./common/constants";

export class IntervalBuilder {
    static getNotes(key: Note, intervals: Interval[]): Note[] {
        let notes: Note[] = [];
        intervals.forEach(interval => {
            notes.push(
                this.getNoteFromInterval(key, interval)
            );
        });

        return notes;
    }

    private static getNoteFromInterval(key: Note, interval: Interval): Note {
        const naturalNotePosition = naturalNotes.indexOf(key[0] as NaturalNotes);
        let intervalPosition = naturalNotePosition + Number(interval[0]) - 1;
        if (intervalPosition > naturalNotes.length - 1) {
            intervalPosition -= naturalNotes.length;
        }
        let newNote: Note = naturalNotes[intervalPosition];
        enharmonicEquivalentTones.forEach(enharmonicArray => {
           if (key === enharmonicArray[enharmonicArray.indexOf(key)]) {
               const enharmonicEquivalentPosition = enharmonicEquivalentTones.indexOf(enharmonicArray);
               let enharmonicIntervalPosition = enharmonicEquivalentPosition + intervalStepValues[interval];
               if (enharmonicIntervalPosition > enharmonicEquivalentTones.length - 1) {
                   enharmonicIntervalPosition -= enharmonicEquivalentTones.length;
               }
               enharmonicEquivalentTones[enharmonicIntervalPosition].forEach(note => {
                   if (note.includes(newNote)) {
                       newNote = note;
                   }
               });
           }
        });

        return newNote;
    }
}