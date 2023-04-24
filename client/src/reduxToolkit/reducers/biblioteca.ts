import { AppThunk } from "../store";
import { PayloadAction,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BibliotecaTema } from "../../interfaces";

export interface ResponseTema{
    status?:number;
    message?:string;
    data?:BibliotecaTema | BibliotecaTema[];
  }

export interface TemaGlobalState{
    loadingTemas:boolean;
    loadingContenido:boolean;
    temas:ResponseTema;
    contenido:ResponseTema;
}

const initialState:TemaGlobalState={
    loadingTemas:false,
    loadingContenido:false,
    temas:{},
    contenido:{}
}

const bibliotecaSlice=createSlice({
    name:'biblioteca',
    initialState,
    reducers:{
        getTemasLoad:(state)=>{
            state.loadingTemas=true;
        },
        getTemasSuccess:(state,action:PayloadAction<any>)=>{
            state.temas=action.payload;
            state.loadingTemas=false;
        },
        getTemasError:(state,action:PayloadAction<any>)=>{
            state.temas=action.payload;
            state.loadingTemas=false;
        },

        getContenidoLoad:(state)=>{
            state.loadingContenido=true;
        },
        getContenidoSuccess:(state,action:PayloadAction<any>)=>{
            state.contenido= action.payload;
            state.loadingContenido=false;
        },
        getContenidoError:(state,action:PayloadAction<any>)=>{
            state.contenido= action.payload;
            state.loadingContenido=false;
        },
        vaciarContenido:(state)=>{
            state.contenido={}
        }
    }
})

export const {getTemasLoad,getTemasError,getTemasSuccess,getContenidoError,getContenidoLoad,getContenidoSuccess,vaciarContenido}=bibliotecaSlice.actions

export const getTemas=():AppThunk=>async(dispatch)=>{
    dispatch(getTemasLoad())
    try {
        const response=await axios.get(`/temaBiblioteca`)
        dispatch(getTemasSuccess({status:response.status,data:response.data}))
    } catch (error:any) {
        dispatch(getTemasError({status:error.response.status ,message:error.response.data.message}))
    }
}


export const getContenido=(id:number):AppThunk=>async(dispatch)=>{
    dispatch(getContenidoLoad())
    try {
        const response=await axios.get(`/temaBiblioteca/${id}`);
        dispatch(getContenidoSuccess({status:response.status,data:response.data}))
    } catch (error:any) {
        dispatch(getContenidoError({status:error.response.status ,message:error.response.data.message}))
    }
}

export default bibliotecaSlice.reducer