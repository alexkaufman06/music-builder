export type NaturalNotes = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
export type Sharp = '#';
export type DoubleSharp = '##';
export type TripleSharp = '###';
export type Flat = 'b';
export type DoubleFlat = 'bb';
export type TripleFlat = 'bbb';
export type Natural = '';
export type AccidentalOptions = Sharp | Flat | Natural | DoubleSharp | DoubleFlat | TripleSharp | TripleFlat;
export type AccidentalInputOptions = Sharp | Flat | Natural | DoubleSharp | DoubleFlat;
export type Note = `${NaturalNotes}${AccidentalOptions}`;
export type NoteInput = `${NaturalNotes}${AccidentalInputOptions}`;
export type Interval = '1P' | '2m' | '2M' | '3m' | '3M' | '4P' | '4A' | '5d' | '5P' | '6m' | '6M' | '7m' | '7M' | '8P';
