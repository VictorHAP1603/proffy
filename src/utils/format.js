
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-Feira",
    "Sábado",
]

//funcionalitys

function getSubject(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}