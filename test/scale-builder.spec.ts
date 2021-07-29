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
        for (const scale in majorScales) {
            it(`it returns the ${scale} major scale`, function () {
                expect(ScaleBuilder.major((scale as Note))).toEqual(majorScales[scale]);
            });
        }
    });

    describe('Minor Scales', () => {
        for (const scale in minorScales) {
            it(`it returns the ${scale} minor scale`, function () {
                expect(ScaleBuilder.minor((scale as Note))).toEqual(minorScales[scale]);
            });
        }
    });

    describe('Dorian Scales', () => {
        for (const scale in dorianScales) {
            it(`it returns the ${scale} dorian scale`, function () {
                expect(ScaleBuilder.dorian((scale as Note))).toEqual(dorianScales[scale]);
            });
        }
    });
});
