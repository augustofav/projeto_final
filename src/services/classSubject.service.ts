async function addTeachersSubject(idTeachers : string, idSubject: string): Promise<void> {
    try{
        if(!idTeachers ||!idSubject){
            console.log('Todos os campos são obrigatórios')
    }
    console.log(`Professor ${idTeachers} adicionado à disciplina ${idSubject}`)
    }catch(error){
        console.log('Erro ao tentar cadastrar professor')
    

    }
}


