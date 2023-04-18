export interface UserAtributtes{
    age?: number;
    GenderIdentityId?:number;
    SexualOrientationId?:number;
    SexoId?:number;
}

export interface ChatPreguntaRespuesta{
    id?:number;
    pregunta?:string;
    respuesta?:string;
}

export interface MensajeObj {
    tipo: string;
    contenido: string;
  }
