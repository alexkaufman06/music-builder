import { ChordBuilder } from "../src/chord-builder";
import { diminishedChords, major7Chords, majorChords, minor7Chords, minor7flat5Chords, minorChords } from "./fixtures/chords";
import { NoteInput } from "../src/common/types";

describe('Chord Builder Tests', () => {
    describe('Major Chords', () => {
        it('returns an array', function () {
            expect(Array.isArray(ChordBuilder.major('A'))).toEqual(true);
        });

        it('returns the natural root note as the first note in the array', function () {
            expect(ChordBuilder.major('A')[0]).toEqual('A');
        });

        it('returns the flatted root note as the first note in the array', function () {
            expect(ChordBuilder.major('Bb')[0]).toEqual('Bb');
        });

        it('returns the sharp root note as the first note in the array', function () {
            expect(ChordBuilder.major('F#')[0]).toEqual('F#');
        });

        majorChords.forEach((majorChord) => {
            it(`it returns the ${majorChord[0]} major chord`, function () {
                expect(ChordBuilder.major((majorChord[0] as NoteInput))).toEqual(majorChord);
            });
        });
    });

    describe('Major 7 Chords', () => {
        it('returns an array', function () {
            expect(Array.isArray(ChordBuilder.major7('A'))).toEqual(true);
        });

        it('returns the natural root note as the first note in the array', function () {
            expect(ChordBuilder.major7('A')[0]).toEqual('A');
        });

        it('returns the flatted root note as the first note in the array', function () {
            expect(ChordBuilder.major7('Bb')[0]).toEqual('Bb');
        });

        it('returns the sharp root note as the first note in the array', function () {
            expect(ChordBuilder.major7('F#')[0]).toEqual('F#');
        });

        major7Chords.forEach((major7Chord) => {
            it(`it returns the ${major7Chord[0]} major 7 chord`, function () {
                expect(ChordBuilder.major7((major7Chord[0] as NoteInput))).toEqual(major7Chord);
            });
        });
    });

    describe('Minor Chords', () => {
        it('returns an array', function () {
            expect(Array.isArray(ChordBuilder.minor('A'))).toEqual(true);
        });

        it('returns the natural root note as the first note in the array', function () {
            expect(ChordBuilder.minor('A')[0]).toEqual('A');
        });

        it('returns the flatted root note as the first note in the array', function () {
            expect(ChordBuilder.minor('Bb')[0]).toEqual('Bb');
        });

        it('returns the sharp root note as the first note in the array', function () {
            expect(ChordBuilder.minor('F#')[0]).toEqual('F#');
        });

        minorChords.forEach((minorChord) => {
            it(`it returns the ${minorChord[0]} minor chord`, function () {
                expect(ChordBuilder.minor((minorChord[0] as NoteInput))).toEqual(minorChord);
            });
        });
    });

    describe('Minor 7 Chords', () => {
        it('returns an array', function () {
            expect(Array.isArray(ChordBuilder.minor7('A'))).toEqual(true);
        });

        it('returns the natural root note as the first note in the array', function () {
            expect(ChordBuilder.minor7('A')[0]).toEqual('A');
        });

        it('returns the flatted root note as the first note in the array', function () {
            expect(ChordBuilder.minor7('Bb')[0]).toEqual('Bb');
        });

        it('returns the sharp root note as the first note in the array', function () {
            expect(ChordBuilder.minor7('F#')[0]).toEqual('F#');
        });

        minor7Chords.forEach((minor7chord) => {
            it(`it returns the ${minor7chord[0]} minor 7 chord`, function () {
                expect(ChordBuilder.minor7((minor7chord[0] as NoteInput))).toEqual(minor7chord);
            });
        });
    });

    describe('Diminished Chords', () => {
        it('returns an array', function () {
            expect(Array.isArray(ChordBuilder.diminished('A'))).toEqual(true);
        });

        it('returns the natural root note as the first note in the array', function () {
            expect(ChordBuilder.diminished('A')[0]).toEqual('A');
        });

        it('returns the flatted root note as the first note in the array', function () {
            expect(ChordBuilder.diminished('Bb')[0]).toEqual('Bb');
        });

        it('returns the sharp root note as the first note in the array', function () {
            expect(ChordBuilder.diminished('F#')[0]).toEqual('F#');
        });

        diminishedChords.forEach((diminishedChord) => {
            it(`it returns the ${diminishedChord[0]} diminished 7 chord`, function () {
                expect(ChordBuilder.diminished((diminishedChord[0] as NoteInput))).toEqual(diminishedChord);
            });
        });
    });

    describe('Minor7Flat5 Chords', () => {
        it('returns an array', function () {
            expect(Array.isArray(ChordBuilder.minor7flat5('A'))).toEqual(true);
        });

        it('returns the natural root note as the first note in the array', function () {
            expect(ChordBuilder.minor7flat5('A')[0]).toEqual('A');
        });

        it('returns the flatted root note as the first note in the array', function () {
            expect(ChordBuilder.minor7flat5('Bb')[0]).toEqual('Bb');
        });

        it('returns the sharp root note as the first note in the array', function () {
            expect(ChordBuilder.minor7flat5('F#')[0]).toEqual('F#');
        });

        minor7flat5Chords.forEach((minor7flat5Chord) => {
            it(`it returns the ${minor7flat5Chord[0]} minor7flat5 chord`, function () {
                expect(ChordBuilder.minor7flat5((minor7flat5Chord[0] as NoteInput))).toEqual(minor7flat5Chord);
            });
        });
    });
});