# Music Builder

The Music Builder returns the musical notes for a chord, scale, or any array of intervals. It works in any key up to a double flat or sharp within the 12 tones of western music. It is highly recommended that you use TypeScript when working with this library.

## Installation

Use `npm` to install the dependencies:

```
npm i music-builder
```

## Usage

### Interval Builder
The `IntervalBuilder` is the heart of the music builder and is utilized in both the chord and scale builders. It allows you to generate any musical idea or pattern you like provided a key and array of intervals.

```typescript
import { IntervalBuilder } from 'music-builder';

IntervalBuilder.getNotes('C', ['1P', '5P']);
// returns ['C', 'G']
```
Intervals include:
  - Perfect unison: `'1P'`
  - Minor second: `'2m'`
  - Major second: `'2M'`
  - Minor third: `'3m'`
  - Major third: `'3M'`
  - Perfect fourth: `'4P'`
  - Augmented fourth: `'4A'`
  - Diminished fifth: `'5d'`
  - Perfect fifth: `'5P'`
  - Minor sixth: `'6m'`
  - Major sixth: `'6M'`
  - Minor seventh: `'7m'`
  - Major seventh: `'7M'`
  - Perfect octave: `'8P'`

### Scale Builder
The `ScaleBuilder` returns a scale provided a key.

```typescript
import { ScaleBuilder } from 'music-builder';

ScaleBuilder.major('A');
// returns ['A', 'B', 'C#', 'D',  'E', 'F#', 'G#', 'A']
```

Scales include:
  - Major
  - Minor
  - Major Pentatonic
  - Minor Pentatonic
  - Dorian
  - Phrygian
  - Lydian
  - Mixolydian
  - Aeolian
  - Locrian

### Chord Builder
The `ChordBuilder` returns a chord provided a key.

```typescript
import { ChordBuilder } from 'music-builder';

ChordBuilder.major('C');
// returns ['C', 'E', 'G']
```

Chords include:
  - major
  - major7
  - minor
  - minor7
  - dominant
  - diminished
  - minor7flat5

## Contributing

The `music-builder` is a pet project currently but contributions and ideas for improvement are welcome! Feel free to report any bugs or suggestions on the project's [issues page](https://github.com/alexkaufman06/music-builder/issues). Before sending a pull request with a new feature, check if it's already been discussed on the issues page and ask yourself three questions:

1. Are you sure that this new feature is important enough to justify its presence in the `music-builder` core?
2. Is it written in a simple, concise way that doesn't add bulk to the codebase?
3. Is it tested sufficiently?

## Code of Conduct

Everyone is invited to participate in the `music-builder` community and related projects:
we want to create a welcoming and friendly environment.
Harassment of participants or other unethical and unprofessional behavior will not be tolerated in our spaces.
The [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/)
applies to all projects utilizing `music-builder`.

## Thank You

Thanks for taking the time to view this project and I hope it proves itself useful/interesting for you!
