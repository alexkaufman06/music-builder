import { ChordBuilder } from "../src/chord-builder";
import { majorChords, minorChords } from "./utils/test-constants";
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
            it(`it returns the ${chord} major scale`, function () {
                expect(ChordBuilder.major((chord as Note))).toEqual(majorChords[chord]);
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
            it(`it returns the ${chord} minor scale`, function () {
                expect(ChordBuilder.minor((chord as Note))).toEqual(minorChords[chord]);
            });
        }
    });
});