import { ScaleBuilder } from '../src/scale-builder';
import { aeolianScales, dorianScales, locrianScales, lydianScales, majorScales, minorScales, mixolydianScales, phyrgianScales } from "./fixtures/scales";
import { NoteInput } from "../src/common/types";


describe('Scale Builder Tests', () => {
    it('returns an array', function () {
        expect(Array.isArray(ScaleBuilder.major('A'))).toEqual(true);
    });

    it('returns the natural root note as the first note in the array', function () {
        expect(ScaleBuilder.major('A')[0]).toEqual('A');
    });

    it('returns the flatted root note as the first note in the array', function () {
        expect(ScaleBuilder.major('Bb')[0]).toEqual('Bb');
    });

    it('returns the sharp root note as the first note in the array', function () {
        expect(ScaleBuilder.major('F#')[0]).toEqual('F#');
    });

    describe('Major Scales', () => {
        majorScales.forEach((majorScale) => {
            it(`it returns the ${majorScale[0]} major scale`, function () {
                expect(ScaleBuilder.major((majorScale[0] as NoteInput))).toEqual(majorScale);
            });
        });
    });

    describe('Minor Scales', () => {
        minorScales.forEach((minorScale) => {
            it(`it returns the ${minorScale[0]} minor scale`, function () {
                expect(ScaleBuilder.minor((minorScale[0] as NoteInput))).toEqual(minorScale);
            });
        });
    });

    describe('Dorian Scales', () => {
        dorianScales.forEach((dorianScale) => {
            it(`it returns the ${dorianScale[0]} dorian scale`, function () {
                expect(ScaleBuilder.dorian((dorianScale[0] as NoteInput))).toEqual(dorianScale);
            });
        });
    });

    describe('Phrygian Scales', () => {
        phyrgianScales.forEach((phrygianScale) => {
            it(`it returns the ${phrygianScale[0]} phrygian scale`, function () {
                expect(ScaleBuilder.phrygian((phrygianScale[0] as NoteInput))).toEqual(phrygianScale);
            });
        });
    });

    describe('Lydian Scales', () => {
        lydianScales.forEach((lydianScale) => {
            it(`it returns the ${lydianScale[0]} lydian scale`, function () {
                expect(ScaleBuilder.lydian((lydianScale[0] as NoteInput))).toEqual(lydianScale);
            });
        });
    });

    describe('Mixolydian Scales', () => {
        mixolydianScales.forEach((mixolydianScale) => {
            it(`it returns the ${mixolydianScale[0]} mixolydian scale`, function () {
                expect(ScaleBuilder.mixolydian((mixolydianScale[0] as NoteInput))).toEqual(mixolydianScale);
            });
        });
    });

    describe('Aeolian Scales', () => {
        aeolianScales.forEach((aeolianScale) => {
            it(`it returns the ${aeolianScale[0]} aeolian scale`, function () {
                expect(ScaleBuilder.aeolian((aeolianScale[0] as NoteInput))).toEqual(aeolianScale);
            });
        });
    });

    describe('Locrian Scales', () => {
        locrianScales.forEach((locrianScale) => {
            it(`it returns the ${locrianScale[0]} locrian scale`, function () {
                expect(ScaleBuilder.locrian((locrianScale[0] as NoteInput))).toEqual(locrianScale);
            });
        });
    });
});
