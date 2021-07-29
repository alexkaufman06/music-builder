import { ScaleBuilder } from '../src/scale-builder';
import { dorianScales, majorScales, minorScales } from "./fixtures/scales";
import { Note } from "../src/common/types";


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
                expect(ScaleBuilder.major((majorScale[0] as Note))).toEqual(majorScale);
            });
        });
    });

    describe('Minor Scales', () => {
        minorScales.forEach((minorScale) => {
            it(`it returns the ${minorScale[0]} minor scale`, function () {
                expect(ScaleBuilder.minor((minorScale[0] as Note))).toEqual(minorScale);
            });
        });
    });

    describe('Dorian Scales', () => {
        dorianScales.forEach((dorianScale) => {
            it(`it returns the ${dorianScale[0]} dorian scale`, function () {
                expect(ScaleBuilder.dorian((dorianScale[0] as Note))).toEqual(dorianScale);
            });
        });
    });
});
