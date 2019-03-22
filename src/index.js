import {cadastralCodes} from './cadastralCodes'

const REGEX = /^(?:(?:[B-DF-HJ-NP-TV-Z]|[AEIOU])[AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[1256LMRS][\dLMNP-V])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i

export function isValid(code){
    return REGEX.test(code)
}

export function extractInfo(code){
    if(!isValid(code)){
        return false
    }
    code = code.toUpperCase()
    let year = code.substr(6, 2)
    const alphabetMonth = ['A','B','C','D','E','H','L','M','P','R','S','T']
    const currentYear = new Date().getFullYear().toString()
    const currentYearL1 = parseInt(currentYear.substr(0,2))
    const currentYearL2 = parseInt(currentYear.substr(2,2))
    year = [parseInt(`${currentYearL1-1}${year}`)]

    if(year <= currentYearL2){
        year.push(parseInt(`${currentYearL1}${year}`))
    }

    let day = parseInt(code.substr(9,2))
    let sex = 'm'
    if(day-40 > 0){
        day-=40
        sex='f'
    }

    return {
        name: code.substr(3,3),
        surname: code.substr(0,3),
        birthYear: year,
        birthMonth: alphabetMonth.indexOf(code.substr(8,1))+1,
        birthDay: day,
        sex,
        birthPlace: cadastralCodes[code.substr(11,4)]
    }
}