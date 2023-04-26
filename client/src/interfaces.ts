export interface UserAtributtes{
    age?: string;
    GenderIdentityId?:number[];
    SexualOrientationId?:number[];
    SexoId?:number[];
    [key: string]: any;
}

export interface sendUserAttributes{
  GenderIdentityId?:string;
    SexualOrientationId?:string;
    SexoId?:string;
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

  export interface BibliotecaTema{
    id:number;
    titulo:string;
    mainImagen:string;
    contenio?:string;
  }