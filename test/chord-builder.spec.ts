import { ChordBuilder } from "../src/chord-builder";
import { major7Chords, majorChords, minor7Chords, minorChords } from "./utils/test-constants";
import { Note } from "../src/common/types";

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

        for (const chord in majorChords) {
            it(`it returns the ${chord} major chord`, function () {
                expect(ChordBuilder.major((chord as Note))).toEqual(majorChords[chord]);
            });
        }
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

        for (const chord in major7Chords) {
            it(`it returns the ${chord} major 7 chord`, function () {
                expect(ChordBuilder.major7((chord as Note))).toEqual(major7Chords[chord]);
            });
        }
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

        for (const chord in minorChords) {
            it(`it returns the ${chord} minor chord`, function () {
                expect(ChordBuilder.minor((chord as Note))).toEqual(minorChords[chord]);
            });
        }
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

        for (const chord in minor7Chords) {
            it(`it returns the ${chord} minor 7 chord`, function () {
                expect(ChordBuilder.minor7((chord as Note))).toEqual(minor7Chords[chord]);
            });
        }
    });
});