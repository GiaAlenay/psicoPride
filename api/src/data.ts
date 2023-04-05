export interface SexoAttributes{
    id?:number;
    name:string;
};
export interface GenderIdentityAttributes{
    id?:number;
    name:string;
}
export interface SexualOrientationAttributes{
    id?:number;
    name:string;
    flag:string;
}
export interface UserAttributes {
    id?: number;
    age: number;
    
}

export const sexArray:SexoAttributes[]=[
    {name:'mujer'},{name:'hombre'},{name:'intersex'}
]