async function createCurso(nome: string, startDate: Date, endDate: Date, workload: string): Promise<string> {
   try{
    let resposta = "";
    if(!nome || !startDate || !endDate || !workload){
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



export const courseService = {
    createCurso: (nome: string, startDate: Date, endDate: Date, workload: string) => createCurso(nome, startDate, endDate, workload)
 };