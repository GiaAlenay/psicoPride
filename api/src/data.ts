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
    GenderIdentityId?:number;
    SexualOrientationId?:number;
    SexoId?:number;
}

export interface TemaChatAttributes{
    id?:number;
    pregunta:string;
    respuesta:string;
    sexos?: number[];
    generos?:number[];
    orientaciones?:number[]
}

export interface TemaBibliotecaAttributes{
    id?:number;
    titulo: string;
    contenido:string;
    mainImagen:string;
}

export const chatArray:TemaChatAttributes[]=[
    {pregunta:'¿Por qué no tengo ganas de sexo?',
        sexos:[1],generos:[1],
        respuesta:'Las estadísticas no son optimistas: estamos perdiendo las ganas de mantener relaciones sexuales. La ausencia de deseo sexual ha aumentado del 8% al 13% entre 2005 y 2016, señala una investigación publicada en The Journal of Sexual Medicine que analiza diferentes estudios en la materia. Un problema que acusan principalmente las mujeres,'},
    {pregunta:'¿Qué me impide llegar al orgasmo?',
        generos:[1,3],
        
        respuesta:'“Principalmente sucede por falta de deseo. Otro tipo de problema tras esta anorgasmia puede ser el dolor en la penetración. Lo tratamos con terapia, con o sin pareja”, dice. “Explicamos técnicas de masturbación o hablamos de cómo probar cosas con la pareja sexaul, afinando hacia dónde va la duda.'},
    {pregunta:' ¿El tamaño de mi pene es normal?',
        generos:[2],
        
    respuesta:'Según la web erótica Platanomelón, el 25% de las dudas recibidas en su plataforma están relacionadas con dudas sobre el tamaño del miembro masculino. Carme Sánchez lo corrobora matizando que no es una cuestión que surja tanto en consultas, sino más a través de consultorios en los que generalmente no se muestra la identidad de quien pregunta.'},
    {pregunta:'Soy eyaculador precoz: ¿Qué puedo hacer?',
    respuesta:'Laura Oliveros. ¡Ojo! El hecho de acabar antes de lo que deseo no significa siempre que sea eyaculación precoz. Bien porque pierden la erección o porque eyaculan antes es una de las cuestiones que más se abordan en consulta con los hombres.'},
    {pregunta:'¿Cómo combatir la disfunción eréctil?',
    generos:[3],
    respuesta:'“Las disfunciones pueden aparecer a cualquier edad, pero se observa que los jóvenes, de entre 18 y 30 años, acuden antes a un profesional que personas de más de 35, que vienen cuando llevan mucho tiempo con el problema”, cuenta Laura Oliveros. '},
    {pregunta:'¿Existe la mujer multiorgásmica?',
    respuesta:'En su libro, Carme Sánchez apunta: «Existe porque las mujeres no necesitamos un tiempo de reposo demasiado largo entre orgasmos. Pero eso no significa que cada relación sexual se convierta en una competición con nuestra pareja sexual o con nosotras mismas.'},
    {pregunta:'¿Eyaculan las mujeres?',
    respuesta:'Algunas mujeres emiten un líquido bioquímicamente parecido al semen en el momento del orgasmo. En la mayoría de los casos la cantidad es tan pequeña que ni la mujer ni la pareja sexual se percatan del fenómeno, pero a veces la cantidad es bastante abundante.'},
    {pregunta:'¿Por qué las mujeres tardan más en llegar al orgasmo?',
    generos:[2,3],
    respuesta:'El tiempo que se tarde en llegar al orgasmo depende del grado de deseo, de la capacidad de excitación y también de la adecuada estimulación, y no tanto de ser hombre o mujer. '},
    {pregunta:'¿Qué edad es la ideal para comenzar a tener relaciones sexuales?',
    respuesta:'todo depende de que la persona esté dispuesta a experimentar porque verdaderamente lo desea, no porque lo imponga su pareja o su grupo de amistades.'},
    {pregunta:'¿Qué son exactamente los preliminares?',
    respuesta:'Pregunta errónea, apunta Carme Sánchez en su libro: «Esa expresión o la de ‘juegos sexuales previos’ representan que todo lo que no sea el coito vaginal en una relación sexual heterosexual es una relación sexual ‘secundaria’, ¡cuánto prejuicio!.'},
    {pregunta:'¿Es normal tener fantasías sexuales que me generen malestar?',
    respuesta:'Carme Sánchez. Hay fantasías que pueden perturbarnos porque no encajan en nuestra escala de valores sexuales. Si es así, mejor no obsesionarse con ellas, hay dejarlas pasar y sustituirlas por otras que hagan sentir mejor.'},
    {pregunta:'¿Puede la orientación sexual variar con la edad?',
    respuesta:'Carme Sánchez. La orientación sexual no es una construcción estática, sino que evoluciona con las vivencias. Tampoco es tan dicotómica como pensamos. Hay personas que pueden ser predominantemente heterosexuales y ocasionalmente homosexuales y otras que se sienten atraídas sexual y afectivamente por hombres y mujeres.'},   
    {pregunta:'¿Se acaba el sexo para las mujeres con la menopausia?',
    respuesta:'¡No! “Se acaba la posibilidad de ser madres, pero no la capacidad de dar y recibir placer”, dice la sexóloga Sánchez.'},
    {pregunta:'¿Masturbarse puede provocar disfunciones sexuales?',
    respuesta:'Carme Sánchez. La masturbación sigue siendo el pariente pobre de la sexualidad y, por lo tanto, arrastra una aureola de tabú y muchas connotaciones negativas. Masturbarse no predispone a tener ninguna disfunción sexual ni problemas de salud.'},
    {pregunta:'¿Qué significa diversidad sexual o de género?',
    respuesta:'Cuando hablamos de diversidad sexual o de género, nos referimos a todas las maneras en que los seres humanos deciden comunicar su sexualidad.'},
]

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