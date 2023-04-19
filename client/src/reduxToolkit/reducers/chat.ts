import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import axios from "axios";
import { ChatPreguntaRespuesta,UserAtributtes } from "../../interfaces";

export interface Response{
    status?:number;
    message?:string;
    data?:ChatPreguntaRespuesta | ChatPreguntaRespuesta[];
  }

export interface ChatGlobalState{
    preguntas:Response;
    respuesta:Response;
    loadingPreguntas:boolean;
    loadingRespuesta:boolean;

}

const initialState:ChatGlobalState={
    preguntas:{},
    respuesta:{},
    loadingPreguntas:false,
    loadingRespuesta:false,
}
const chatSlice=createSlice({
    name: 'chat',
    initialState,
    reducers: {
  
      getPreguntasLoad: (state) => {
        state.loadingPreguntas = true;
      },
      getPreguntasSuccess: (state, action: PayloadAction<any>) => {
        state.preguntas = action.payload;
        state.loadingPreguntas = false;
      },
      getPreguntasError: (state, action: PayloadAction<any>) => {
        state.loadingPreguntas = false;
        state.preguntas = action.payload;
      },

      getRespuestaLoad: (state) => {
        state.loadingRespuesta = true;
      },
      getRespuestaSuccess: (state, action: PayloadAction<any>) => {
        state.respuesta = action.payload;
        state.loadingRespuesta = false;
      },
      getRespuestaError: (state, action: PayloadAction<any>) => {
        state.loadingRespuesta = false;
        state.respuesta = action.payload;
      },
    },
  })

export const {getPreguntasError,getPreguntasSuccess,getPreguntasLoad,getRespuestaError,getRespuestaLoad,getRespuestaSuccess}=chatSlice.actions

export const getPreguntas=(query:UserAtributtes):AppThunk=>async(dispatch)=>{
    dispatch(getPreguntasLoad())
    try {
      const response = await axios.get(`/usuarios/temaschat?sexo=${query.SexoId}&genero=${query.GenderIdentityId}&orientacion=${query.SexualOrientationId}`);
      dispatch(getPreguntasSuccess({status:response.status,data:response.data}))
    } catch (error:any) {
      dispatch(getPreguntasError({status:error.response.status ,message:error.response.data.message}))
    }
  }
  export const getRespuesta=(id:number|string):AppThunk=>async(dispatch)=>{
    dispatch(getRespuestaLoad())
    try {
      const response = await axios.get(`/temachat/respuesta/${id}`);
      dispatch(getRespuestaSuccess({status:response.status,data:response.data}))
    } catch (error:any) {
      dispatch(getRespuestaError({status:error.response.status ,message:error.response.data}))
    }
  }

export default chatSlice.reducer