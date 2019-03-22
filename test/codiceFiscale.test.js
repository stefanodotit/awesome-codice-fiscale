import { isValid, extractInfo } from '../src/index'

const VALID_CF = 'RSSMRC86S09F205L'
const NOT_VALID_CF = 'RSSMRC86S09F205L0'

it('check is valid', () => {
    expect(isValid(VALID_CF)).toBe(true)
    expect(isValid(NOT_VALID_CF)).toBe(false)
})

it('extract info', () => {
    expect(extractInfo(VALID_CF)).toEqual({
        name: 'MRC',
        surname: 'RSS',
        birthYear: [1986],
        birthMonth: 11,
        birthDay: 9,
        sex: 'm',
        birthPlace: 'MILANO'
    })
    expect(extractInfo(NOT_VALID_CF)).toBe(false)
})