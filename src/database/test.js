const Database = require('./db');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async (db) => {
    //inserir dados na tableLayout
    await saveOrphanage(db ,{
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Lar das meninas",
        about: "Preste assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"434343",   
        images: [

            "https://images.unsplash.com/photo-1574559854225-4349f0fda8cd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1574559854225-4349f0fda8cd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: " Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"

    })

    //consultar dados da tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    //deletar dado da tabela
    
  
    //console.log (await db.run("DELETE FROM orphanages"))
    
})