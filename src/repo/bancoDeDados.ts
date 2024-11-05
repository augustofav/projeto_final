// repo/ModeloBD.ts
import { ModelEvento } from '../models/Event';
import { ModelParticipante } from '../services/';

export class ModeloBD {
  private eventos: ModelEvento[];
  private usuarios: ModelParticipante[];

  constructor() {
    this.eventos = [];
    this.usuarios = [];
  }

  public getEventos(): ModelEvento[] {
    return this.eventos;
  }

  public setEventos(eventos: ModelEvento[]): void {
    this.eventos = eventos;
  }

  public getUsuarios(): ModelParticipante[] {
    return this.usuarios;
  }

  public setUsuarios(usuarios: ModelParticipante[]): void {
    this.usuarios = usuarios;
  }
}
