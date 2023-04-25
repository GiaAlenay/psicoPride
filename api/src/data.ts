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
    pregunta:string;
    respuesta:string;
    id?:number;
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

export const BibliotecaArray:TemaBibliotecaAttributes[]=[
    {titulo:'Identidades de género',contenido:`Los tiempos han cambiado, y si antes se entendía el género desde una posición binaria de masculino y femenino, hoy son múltiples las identidades de género que cada persona puede asumir de forma personal y voluntaria. En líneas generales, encontramos personas cisgénero, que se refiere a una persona cuya identidad de género corresponde con el sexo asignado al nacer, es decir, naciste con los órganos reproductivos de una mujer y te identificas a ti misma como mujer. Por su parte, las personas transgénero no se identifican o reconocen dentro del género que les fue asignado al nacer y, por tanto, deciden transformarse y construirse de forma diferente a lo establecido socialmente.

    Por eso, podrás encontrarte personas transgénero que se definen así mismas de las siguientes maneras:
    
    Transexual: persona cuya identidad de género difiere del género asignado al nacer, por lo que replantean su género y su sexo de manera definitiva. Generalmente, aunque no siempre, se sienten inconformes con su cuerpo y recurren a tratamiento hormonales o a cirugías de cambio de sexo.
    
    Transformista: persona que ocasionalmente asume roles del género opuesto al de nacimiento. Hombres de nacimiento que eventualmente tienen conductas, atuendos y estilos que se consideran culturalmente como femeninos; mujeres que adoptan conductas, atuendos y estilos que culturalmente se interpretan como masculinos.
    
    Travesti: persona que expresa su género, de manera permanente, a través de la utilización de prendas de vestir y actitudes que culturalmente se consideran propias del otro género. También es importante que sepas que no todas las personas travestis son necesariamente homosexuales. El género no va ligado a la orientación sexual, como te explicaremos más adelante.`,mainImagen:'https://images.ctfassets.net/o65uf8qogksw/7dIbFicM3K2nGchmSK2oLP/b2c7a9ce7e7d337c9dfcacfc3f630724/identidad-de-genero-mobile.jpg'},
    {titulo:'que es la asexualidad',contenido:`La asexualidad se suele considerar una orientación sexual, pero, en realidad, es todo lo contrario, porque es una no-orientación sexual. Son personas que no sienten deseo sexual de ningún tipo, ni frente a hombres, ni frente a mujeres, ni frente a ningún otro género o parafilia que pudiéramos imaginar.

    Es importante señalar que no se trata ni de una ideología ni de una orientación sexual, sino que es una condición en la que una persona no se siente movida a tener relaciones sexuales de ningún tipo.
    
    Pero esta motivación no puede provenir de sentimientos religiosos o culturales. Es decir, no es un celibato. Simplemente, son personas que, de forma natural, no sienten ningún interés por el sexo.
    
    Eso sí, hay que señalar que aunque no se trate de una ideología ni de una orientación sexual, los asexuales y las organizaciones a las que pertenecen sí han establecido vínculos políticos para mejorar su visibilidad y ser mejor considerados en la sociedad. Es por ello que, en muchas ocasiones, van de la mano del movimiento LGTB.
    
    Y es que, de un tiempo a esta parte, son muchos los asexuales que se han unido para reivindicar que la sociedad no esté tan centrada en el deseo sexual, y que no sea necesario tener sexo para recibir aprobación social por parte de las demás personas.
    
    Es por ello que existen asociaciones y comunidades como la Asexual Visibility and Education Network (AVEN), centrada en dar a conocer los conocimientos y experiencias relacionados con la asexualidad y dar voz a las personas asexuales. Y no es una asociación pequeña, precisamente, puesto que cuenta con más de 10.000 socios.`,mainImagen:'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/10/19081648/asexual-sexo-sexualidad.jpeg'},
    {titulo:'que es ser no binario',contenido:`Demi Lovato, Ezra Miller y Elliot Page son personas del medio artístico que han comunicado ser de género no binario. Te contamos sobre el significado y de qué va identificarse con ello.

    “Hoy es un día en el que estoy muy feliz de compartir más de mi vida con todos ustedes. Me enorgullece hacerles saber que me identifico como no binarie y que oficialmente cambiaré mi pronombre a elle”, indicó en su cuenta de Twitter Lovato en días recientes.
    
    Ser no binario se designa a las identidades de género que se reconocen con aspectos femeninos y masculinos, no son hombres o mujeres.
    
    Además, las personas que se identifican como no binarias, usan pronombres neutros, y piden que se les identifique como tal. Por ejemplo, ‘elle’.
    
    Al respecto, Hola amigue, un colectivo mexicano, explica que las personas no binarias no deben tener siempre un aspecto andrógino, sino que viven fuera de ser hombre o mujer, de lo masculino y lo femenino.
    
    El Día Internacional de la Visibilidad No Binaria se celebra el 14 de julio.`,mainImagen:'https://cdn.lesbicanarias.es/wp-content/uploads/2018/02/No-binario.jpg'},
    {titulo:'Los métodos anticonceptivos',contenido:`Existen multitud de maneras de clasificar los métodos anticonceptivos. Por ejemplo, se pueden tener en cuenta los diferentes a los parámetros que se comentan a continuación:

    Masculinos o femeninos
    en función de si lo usa el hombre o la mujer.
    Orales o no orales
    hace referencia a si los anticonceptivos se toman en forma de pastillas o se colocan en otro lugar del cuerpo.
    Hormonales o no hormonales
    en base a si incluyen hormonas en su composición.
    Temporales o permanentes
    en función de la duración del método anticonceptivo.
    Reversibles o irreversibles
    hace referencia a la esterilización total del hombre o la mujer.Un mismo anticonceptivo puede incluirse en varios de estos grupos que hemos descrito. Por tanto, para una comprensión más clara de cómo funciona cada uno, nos basaremos en su mecanismo de acción para describirlos a lo largo de este artículo, así como las principales indicaciones.`,mainImagen:'https://www.huesped.org.ar/wp-content/uploads/2017/04/acceso-a-mac-660x330.png'},
    {titulo:'orientaciones sexuales',contenido:`¿Sabes que existen muchas más sexualidades de las que conoces? Estamos acostumbrados a términos como bisexual, transexual o heterosexual, pero con el pasar del tiempo cada vez se conocen nuevas orientaciones sexuales, con diferentes características que hacen a la conducta de la atracción, y el amor en los seres humanos.

    La forma en la que nos identificamos sexualmente es conocida como orientación sexual y esta tiene diferentes aspectos, ya que una orientación no define solamente quién es el fruto de tu atracción, sino también con qué tipo de personas mantienes relaciones. Mediante esta podemos definir el interés, la atracción sexual y romántica, así como también el comportamiento y las distintas formas en la que se experimenta precisamente la sexualidad.
    
    Se suele confundir a la orientación sexual con la identidad de género y estas tienen aspectos que se diferencian bastante entre sí.
    
    Como mencionamos, por quién sientes atracción, tanto emocional como romántica y sexual, forma parte de lo que es la orientación, mientras que en la identidad de género no importa con qué otro tipo de persona te relacionas, sino más bien en quién eres tú mismo.
    
    Esto quiere decir que mientras el género responde al tipo de persona que eres, que puede ser hombre, mujer, la orientación sexual remite al tipo de personas con las que puedes o podrías mantener una relación, sin que esto tenga que ver con quién eres en realidad.
    
    Es muy importante para las personas llegar a la comprensión del tipo de experiencias que cada persona cercana tiene y cómo identifican su propia sexualidad, esto puede ser muy importante para conocernos mejor, interpretar a cada uno y convivir en un mundo en total tolerancia y respeto hacia el tipo de atracción sexual que tenga cualquier persona.`,mainImagen:'https://previews.123rf.com/images/naidzionysheva/naidzionysheva2011/naidzionysheva201100016/159733148-un-conjunto-de-ilustraciones-vectoriales-con-parejas-j%C3%B3venes-de-diferentes-orientaciones-sexuales-de.jpg'},
]



export const chatArray:TemaChatAttributes[]=[
    {pregunta:'¿Por qué no tengo ganas de sexo?',
        sexos:[1],generos:[1],orientaciones:[1,2,4],
        respuesta:'Las estadísticas no son optimistas: estamos perdiendo las ganas de mantener relaciones sexuales. La ausencia de deseo sexual ha aumentado del 8% al 13% entre 2005 y 2016, señala una investigación publicada en The Journal of Sexual Medicine que analiza diferentes estudios en la materia. Un problema que acusan principalmente las mujeres,'},
    {pregunta:'¿Qué me impide llegar al orgasmo?',
        generos:[1,3],orientaciones:[5],
        
        respuesta:'“Principalmente sucede por falta de deseo. Otro tipo de problema tras esta anorgasmia puede ser el dolor en la penetración. Lo tratamos con terapia, con o sin pareja”, dice. “Explicamos técnicas de masturbación o hablamos de cómo probar cosas con la pareja sexaul, afinando hacia dónde va la duda.'},
    {pregunta:' ¿El tamaño de mi pene es normal?',
        generos:[2],orientaciones:[3],
        
    respuesta:'Según la web erótica Platanomelón, el 25% de las dudas recibidas en su plataforma están relacionadas con dudas sobre el tamaño del miembro masculino. Carme Sánchez lo corrobora matizando que no es una cuestión que surja tanto en consultas, sino más a través de consultorios en los que generalmente no se muestra la identidad de quien pregunta.'},
    {pregunta:'Soy eyaculador precoz: ¿Qué puedo hacer?',
    respuesta:'Laura Oliveros. ¡Ojo! El hecho de acabar antes de lo que deseo no significa siempre que sea eyaculación precoz. Bien porque pierden la erección o porque eyaculan antes es una de las cuestiones que más se abordan en consulta con los hombres.'},
    {pregunta:'¿Cómo combatir la disfunción eréctil?',
    generos:[3],
    respuesta:'“Las disfunciones pueden aparecer a cualquier edad, pero se observa que los jóvenes, de entre 18 y 30 años, acuden antes a un profesional que personas de más de 35, que vienen cuando llevan mucho tiempo con el problema”, cuenta Laura Oliveros. '},
    {pregunta:'¿Existe la mujer multiorgásmica?',orientaciones:[3,4],
    respuesta:'En su libro, Carme Sánchez apunta: «Existe porque las mujeres no necesitamos un tiempo de reposo demasiado largo entre orgasmos. Pero eso no significa que cada relación sexual se convierta en una competición con nuestra pareja sexual o con nosotras mismas.'},
    {pregunta:'¿Eyaculan las mujeres?',
    respuesta:'Algunas mujeres emiten un líquido bioquímicamente parecido al semen en el momento del orgasmo. En la mayoría de los casos la cantidad es tan pequeña que ni la mujer ni la pareja sexual se percatan del fenómeno, pero a veces la cantidad es bastante abundante.'},
    {pregunta:'¿Por qué las mujeres tardan más en llegar al orgasmo?',
    generos:[2,3],
    respuesta:'El tiempo que se tarde en llegar al orgasmo depende del grado de deseo, de la capacidad de excitación y también de la adecuada estimulación, y no tanto de ser hombre o mujer. '},
    {pregunta:'¿Qué edad es la ideal para comenzar a tener relaciones sexuales?',
    respuesta:'todo depende de que la persona esté dispuesta a experimentar porque verdaderamente lo desea, no porque lo imponga su pareja o su grupo de amistades.'},
    {pregunta:'¿Qué son exactamente los preliminares?',orientaciones:[1,2,4],
    respuesta:'Pregunta errónea, apunta Carme Sánchez en su libro: «Esa expresión o la de ‘juegos sexuales previos’ representan que todo lo que no sea el coito vaginal en una relación sexual heterosexual es una relación sexual ‘secundaria’, ¡cuánto prejuicio!.'},
    {pregunta:'¿Es normal tener fantasías sexuales que me generen malestar?',
    respuesta:'Carme Sánchez. Hay fantasías que pueden perturbarnos porque no encajan en nuestra escala de valores sexuales. Si es así, mejor no obsesionarse con ellas, hay dejarlas pasar y sustituirlas por otras que hagan sentir mejor.'},
    {pregunta:'¿Puede la orientación sexual variar con la edad?',
    respuesta:'Carme Sánchez. La orientación sexual no es una construcción estática, sino que evoluciona con las vivencias. Tampoco es tan dicotómica como pensamos. Hay personas que pueden ser predominantemente heterosexuales y ocasionalmente homosexuales y otras que se sienten atraídas sexual y afectivamente por hombres y mujeres.'},   
    {pregunta:'¿Se acaba el sexo para las mujeres con la menopausia?',orientaciones:[1],
    respuesta:'¡No! “Se acaba la posibilidad de ser madres, pero no la capacidad de dar y recibir placer”, dice la sexóloga Sánchez.'},
    {pregunta:'¿Masturbarse puede provocar disfunciones sexuales?',
    respuesta:'Carme Sánchez. La masturbación sigue siendo el pariente pobre de la sexualidad y, por lo tanto, arrastra una aureola de tabú y muchas connotaciones negativas. Masturbarse no predispone a tener ninguna disfunción sexual ni problemas de salud.'},
    {pregunta:'¿Qué significa diversidad sexual o de género?',orientaciones:[2,3],
    respuesta:'Cuando hablamos de diversidad sexual o de género, nos referimos a todas las maneras en que los seres humanos deciden comunicar su sexualidad.'},
]

export const sexArray:SexoAttributes[]=[
    {name:'Sí'},{name:'No'},{name:'Lo estoy cuestionando'},{name:'Prefiero no decirlo'}
]
export const genderArray:GenderIdentityAttributes[]=[
    {name:'Mujer trans'},{name:'Mujer cis'},{name:'Hombre trans'},{name:'Hombre cis'},{name:'Otro'},
]

export const orientationArray:SexualOrientationAttributes[]=[
    {
        name:'Gay',
        flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Trans-inclusive_Gay_Men%27s_Flag.png/1200px-Trans-inclusive_Gay_Men%27s_Flag.png'
    },
    {
        name:'Lesbiana',
        flag:'https://plumasatomicas.com/wp-content/uploads/2021/06/Bandera-Lesbi-2021-Como-es-y-que-significan-sus-colores-1.jpg'
    },
    {
        name:'Bisexual',
        flag:'https://flags-world.com/wp-content/uploads/2021/08/bisexual-pride_2.png'
    },
    {
        name:'Pansexual',
        flag:'https://www.banderasvdk.com/blog/wp-content/uploads/Bandera-orgullo-pansexual.jpg'
    },
    {
        name:'Asexual',
        flag:'https://64.media.tumblr.com/08e721bc63d7ab06b2ebb17511ff9767/tumblr_inline_nxrxs1vTU11tbdzcw_400.png'
    },
    {   name:'Heterosexual',
        flag:''
    },
    {   name:'Otro',
        flag:''
    }
    
]   