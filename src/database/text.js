const DataBase = require('./db')
const createProffy = require('./createProffy')


DataBase.then(async (db) => {
    // put datas

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp:"970521612", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passsaram por uma das minhas explosões.<", 
    }

    classValue = {
        subject: 1, 
        cost:"20", 
        // proffy id will come for database
    }

    classScheduleValues = [
        //class_id will come for database,
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220    
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220    
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consult datas 

    // all proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consult classes of a only professor and brought with profesor's datas
    const selectedClassAndProffys = await db.all(`
        SELECT classes.* , proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //onsole.log(selectedClassAndProffys)

    // the schedule that a person work, example, 8h - 12h
    // the schedule of time_from (8h) needs be before or same to the requested time 
    // the time_to needs be above
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    
    //console.log(selectClassesSchedules)
})