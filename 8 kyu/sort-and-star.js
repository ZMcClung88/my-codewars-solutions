// Caution: This kata does not currently have any known supported versions for JavaScript. It may not be completable due to dependencies on out-dated libraries/language versions.
// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.
//
// The returned value must be a string, and have '***' between each of its letters.

const twoSort = s => s.sort()[0].split('').join('***');
