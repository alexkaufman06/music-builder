import { Note } from "./common/types";
import { majorScalePattern } from "./common/constants";
import { IntervalBuilder } from "./interval-builder";

export class ScaleBuilder {
    static majorScale(note: Note): Note[] {
        return IntervalBuilder.getNotes(note, majorScalePattern);
    }
}
