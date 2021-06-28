import { ScaleBuilder } from '../src/scale-builder';
import { majorScales } from "../src/common/constants";
import { Note } from "../src/common/types";


describe('Scale Builder Tests', () => {
    it('returns an array', function () {
        expect(Array.isArray(ScaleBuilder.majorScale('A'))).toEqual(true);
    });

    it('returns the natural root note as the first note in the array', function () {
        expect(ScaleBuilder.majorScale('A')[0]).toEqual('A');
    });

    it('returns the flatted root note as the first note in the array', function () {
        expect(ScaleBuilder.majorScale('Bb')[0]).toEqual('Bb');
    });

    it('returns the sharp root note as the first note in the array', function () {
        expect(ScaleBuilder.majorScale('F#')[0]).toEqual('F#');
    });

    describe('Major Scales', () => {
        for (const scale in majorScales) {
            it(`it returns the ${scale} major scale`, function () {
                expect(ScaleBuilder.majorScale((scale as Note))).toEqual(majorScales[scale]);
            });
        }
    });
});
