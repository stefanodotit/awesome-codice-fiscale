# awesome-codice-fiscale
Lightweight module for validate and decrypt Italian Tax Code (alias Codice Fiscale).<br >
:bomb: **Vanilla Javascript - No dependencies** :bomb:

## Installation
```sh
npm i awesome-codice-fiscale --save
```

## How to use
### Check if Codice Fiscale is valid
```javascript
import { isValid } from 'awesome-codice-fiscale'
isValid(CODICE_FISCALE)
```
@return `Boolean`

### Extract data from Codice Fiscale
```javascript
import { extractInfo } from 'awesome-codice-fiscale'
const info = extractInfo(CODICE_FISCALE)
```
@return 
```javascript
{
    name: 'XXX', // String{3}: only 3 character
    surname: 'RSS', // String{3}: only 3 character
    birthYear: [XXNN, YYNN], // Array<Number>: 1 or 2 years (4 digit) [Codice Fiscale gave me only the last 2 numbers of birthday Year. So the person can have 1 years old or 101 years old]
    birthMonth: 11, // Number: month of birthday
    birthDay: 9, // Number: day of birthday
    sex: 'm', // String{1}: m => male || f => female
    birthPlace: 'XXXXX' // String: name of birth place
}
```

### Check if user is adult
@input `CODICE_FISCALE`, `AGE` (default 18)
```javascript
import { isAdult } from 'awesome-codice-fiscale'
isAdult(CODICE_FISCALE, 21)
```
@return `Boolean` (Also false when multiple birthYear and one of this is under age)

## Available yarn scripts:
- `yarn run build`: build the bundle into `dist` directory.
- `yarn run test`: launch the tests.