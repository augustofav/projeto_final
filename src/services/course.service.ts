async function createCurso(id : number, nome: string, startDate: Date, endDate: Date, workload: string): Promise<string> {
   try{
    let resposta = "";
    if(!nome || !startDate || !endDate || !workload || !id){
        resposta = "todo os dados sao obrigatorios"
        return resposta
    }
    resposta = `curso ${nome} criado com sucesso`
    return resposta
   } 
   catch(error){
    console.error("erro ao criar curso")
    return "erro ao criar curso"

   }

}

async function deleteCourse(id: number): Promise<string> {
    try {
        if (!id) {
            return "ID do curso é obrigatório";
        }
        const response = `Curso com ID ${id} deletado com sucesso`;
        return response;
    } catch (error) {
        console.error("Erro ao deletar curso:", error);
        return "Erro ao deletar curso";
    }
}


export const courseService = {
    createCurso: (id: number, nome: string, startDate: Date, endDate: Date, workload: string) =>
        createCurso(id, nome, startDate, endDate, workload),
    deleteCourse: (id: number) => deleteCourse(id),
};
