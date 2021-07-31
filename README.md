# Music Builder

The Music Builder returns musical notes provided a key and an array of intervals. This allows it to return chords, scales, or any musical idea using the 12 tones of Western music. It is highly recommended that you use TypeScript when working with this library.

## Installation

Use `npm` to install the dependencies:

```
npm i music-builder
```

## Usage

```typescript
import { ChordBuilder, IntervalBuilder, ScaleBuilder } from "music-builder";

// Use the IntervalBuilder for generating any musical idea/pattern you like
IntervalBuilder.getNotes('C', ['1P', '5P']); // returns ['C', 'G']

ScaleBuilder.major('A'); // returns ['A', 'B', 'C#', 'D',  'E', 'F#', 'G#', 'A']
// Other scale methods include minor, dorian, phrygian, lydian, mixolydian, aeolian, and locrian

ChordBuilder.major('C'); // returns ['C', 'E', 'G']
// Other chord methods include major7, minor, minor7, diminished, and minor7flat5
```

## Contributing

The `music-builder` is a pet project currently but contributions and ideas for improvement are welcome! Feel free to report any bugs or suggestions on the project's [issues page](https://github.com/alexkaufman06/music-builder/issues). Before sending a pull request with a new feature, check if it's already been discussed on the issues page and ask yourself two questions:

  1. Are you sure that this new feature is important enough to justify its presence in the `music-builder` core?
  2. Is it written in a simple, concise way that doesn't add bulk to the codebase?

## Code of Conduct

Everyone is invited to participate in the `music-builder` community and related projects:
we want to create a welcoming and friendly environment.
Harassment of participants or other unethical and unprofessional behavior will not be tolerated in our spaces.
The [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/)
applies to all projects utilizing `music-builder`.

## Thank You

Thanks for taking the time to view this project and I hope it proves itself useful/interesting for you!