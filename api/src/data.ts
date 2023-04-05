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
export const genderArray:GenderIdentityAttributes[]=[
    {name:'femenino'},{name:'masculino'},{name:'no binario'},{name:'otro'},{name:'prefiero no decirlo'},
]

export const orientationArray:SexualOrientationAttributes[]=[
    {
        name:'gay',
        flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Trans-inclusive_Gay_Men%27s_Flag.png/1200px-Trans-inclusive_Gay_Men%27s_Flag.png'
    },
    {
        name:'lesbiana',
        flag:'https://plumasatomicas.com/wp-content/uploads/2021/06/Bandera-Lesbi-2021-Como-es-y-que-significan-sus-colores-1.jpg'
    },
    {
        name:'bisexual',
        flag:'https://flags-world.com/wp-content/uploads/2021/08/bisexual-pride_2.png'
    },
    {
        name:'pansexual',
        flag:'https://www.banderasvdk.com/blog/wp-content/uploads/Bandera-orgullo-pansexual.jpg'
    },
    {
        name:'asexual',
        flag:'https://64.media.tumblr.com/08e721bc63d7ab06b2ebb17511ff9767/tumblr_inline_nxrxs1vTU11tbdzcw_400.png'
    },
]   