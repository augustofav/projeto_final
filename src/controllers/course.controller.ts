import { Request, Response } from 'express';
import {courseService} from '../services/course.service'

const courseController = {
    createCurso: async (req: Request, res: Response): Promise<void> => {
        const {nome, startDate, endDate, workload} = req.body;
    try{
        const retorno = await courseService.createCurso(nome, startDate, endDate, workload);
        if(!retorno){
            res.status(500).send('Não foi possível cadastrar o curso.');
        } else {
            res.status(200).send(retorno);
        }
    }
    catch(error){
        console.error('Erro ao cadastrar curso:', error);
        res.status(500).send('Ocorreu um erro no servidor ao tentar cadastrar o curso.');
    }
    }
}
export default courseController;