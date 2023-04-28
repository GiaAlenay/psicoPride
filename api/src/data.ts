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
    {titulo:'Masturbación',
    contenido:`La masturbación es una práctica sexual común y saludable que muchas personas disfrutan en solitario o en pareja. A pesar de su estigma social y de la falta de información en algunos contextos culturales, es una forma natural y segura de explorar la sexualidad y el placer propio.  <hr/> Esta práctica implica la estimulación de los genitales con las manos, juguetes sexuales u otros objetos para producir orgasmos y aliviar la tensión sexual acumulada. De esta forma, se pueden obtener los siguientes beneficios para la salud sexual y emocional de una persona:  <hr/>
    	Reducción del estrés. <s>
    	Mejora en el sueño.  <s>
    	Aumento de la autoestima. <s>
    	Mejora de la función sexual. <s>
    	Mayor comprensión del propio cuerpo. <s>
    	Aprender las preferencias y necesidades sexuales propias. <s>
    	Mejora las relaciones sexuales con la(s) pareja(s). <s>
    	Explorar la sexualidad sin riesgo de contraer enfermedades de transmisión sexual (ETS) o embarazos no deseados  <hr/>
    Para disfrutar esta práctica de manera segura, es importante lavarse las manos y los juguetes sexuales antes y después de la masturbación para evitar infecciones, así como no usar objetos puntiagudos o afilados para evitar lesiones.  <hr/>
    En conclusión, aunque algunas personas pueden sentir culpa o vergüenza por masturbarse, la mayoría de los expertos en sexualidad consideran que es una práctica saludable y normal. 
    `
    ,mainImagen:'Masturbacion.png'},
    {titulo:'Higiene Sexual',
    contenido:`La higiene sexual es un aspecto importante para mantener una buena salud sexual y prevenir infecciones de transmisión sexual (ITS). <hr/> A continuación, se presentan algunos consejos para una buena higiene sexual: <hr/>
    	Para practicar sexo seguro, hay que utilizar preservativos o barreras de látex durante el sexo vaginal, anal y oral. <s>
    	Lavarse las manos y los genitales con agua y jabón antes y después de tener relaciones sexuales. <s>
    	se utilizan juguetes sexuales, es importante limpiarlos antes y después de cada uso con agua y jabón, o utilizar productos específicos para su limpieza. <s>
    	Orinar después de tener relaciones sexuales ayuda a limpiar la uretra y eliminar cualquier bacteria que pueda haber ingresado al cuerpo. <s>
    	adecuadamente la zona genital, evitar el uso de jabones perfumados, y usar ropa interior de algodón pueden ayudar a prevenir infecciones vaginales y urinarias. <s>
    	Realizar chequeos médicos regulares para detectar y tratar cualquier ITS o problema de salud sexual. <hr/>
    Es importante recordar que la higiene sexual no sólo implica prevenir las ITS, sino también mantener una buena salud sexual y mejorar la calidad de vida sexual. Hablar abierta y honestamente con la pareja sobre la higiene sexual y cualquier preocupación relacionada con la salud sexual puede ayudar a tener relaciones sexuales más seguras y satisfactorias.
    `,
    mainImagen:'HigieneSexual.jpg'},
    {titulo:'Autoestima Sexual',
    contenido:`La autoestima sexual es la forma en que las personas perciben y valoran su sexualidad y su capacidad para disfrutar y experimentar satisfacción sexual. Tener una autoestima sexual positiva puede mejorar la calidad de vida sexual y aumentar el bienestar emocional en general.  <hr/> A continuación, se presentan algunos consejos para fortalecerla: <hr/>
    	Conócete a ti mismx: Explorar y conocer tu cuerpo, preferencias y límites mediante la masturbación te permitirá aprender a disfrutar del propio cuerpo. <s>
    	Habla abiertamente sobre tus necesidades sexuales: Comunicar honestamente con la pareja sobre tus necesidades, deseos y límites sexuales puede ayudar a sentirte más cómodx y segurx en la relación. <s>
    	Practica la aceptación y el amor propio: Aprender a aceptar y amar tu cuerpo y tu sexualidad tal como son, sin juzgarte o compararte con otrxs. <s>
    	Experimenta con nuevas formas de placer: Como la estimulación del punto G o el uso de juguetes sexuales, y así descubrir nuevas sensaciones. <s>
    	Evita compararte: Tu autoestima sexual puede verse afectada negativamente si te comparas en términos de desempeño sexual o atractivo. Recuerda, cada persona es única y tiene su propio ritmo y preferencias sexuales. <s>
    	Aceptar los cambios: Durante la vida, es normal experimentar altibajos en la confianza sexual, sé paciente contigo mismx. 
    `,
    mainImagen:'Autoestimasexual.jpg'},
    {titulo:'Sexo Anal',
    contenido:`El sexo anal es una práctica sexual que consiste en la penetración del ano. Si se realiza correctamente, puede ser una experiencia placentera y satisfactoria para todas las personas involucradas. Sin embargo, es importante tener en cuenta la higiene y seguridad para prevenir posibles infecciones o lesiones. <hr/> A continuación, te compartimos algunos consejos para tener sexo anal higiénico y placentero:  <hr/>
    	Comunicación abierta: Es importante hablar con la pareja antes de intentar esta práctica. Asegurarse de que ambxs estén cómodxs y dispuestxs a participar es esencial para tener una experiencia agradable y satisfactoria. <s>
    	Lubricación: El ano no se lubrica naturalmente como la vagina, por lo que es importante usar suficiente lubricante para evitar lesiones y aumentar el placer. Se recomienda usar un lubricante a base de agua o silicona, ya que los aceites pueden causar daño al condón. <s>
    	Higiene: Es importante lavar el ano y los alrededores con agua tibia y jabón antes del sexo anal. También se recomienda usar un enema para limpiar el interior del ano, aunque no es necesario hacerlo cada vez que se tiene sexo anal. <s>
    	Condones: Es importante usar un condón durante el sexo anal para prevenir la transmisión de enfermedades de transmisión sexual (ETS) y reducir el riesgo de infecciones. Además, cambiar el condón si se cambia de actividad sexual (de anal a vaginal, por ejemplo) también es importante. <s>
    	Posiciones: Existen diferentes posiciones sexuales que pueden ser más cómodas o placenteras para el sexo anal, dependiendo de la comodidad y preferencias de cada persona. Algunas posiciones comunes incluyen de lado, a cuatro patas o sentadxs. <hr/>
    En resumen, el sexo anal puede ser una experiencia placentera y satisfactoria si se realiza correctamente y con precaución. Hablar abiertamente con la pareja, usar suficiente lubricante, mantener una buena higiene, usar condones y experimentar con diferentes posiciones pueden ayudar a tener una experiencia más placentera y segura.
    `,
    mainImagen:'SexoAnal.png'},
    {titulo:'Consentimiento Sexual',
    contenido:`El consentimiento sexual se refiere al acuerdo explícito, libre y mutuo que se da entre las personas involucradas en una actividad sexual. Así, se garantiza que todxs se sientan cómodxs, segurxs y respetadxs. <hr/> A continuación, te presentamos cómo debería verse el consentimiento: <hr/>
    	Debe ser libre y entusiasta: No puede ser dado si alguien se encuentra bajo los efectos del alcohol o las drogas, es presionadx o se siente amenazadx de alguna manera. <s>
    	Debe ser pedido en todo momento: Cada experiencia sexual es única y debe ser consentida individualmente. No se debe dar por sentado que alguien quiere tener relaciones sexuales porque lo han hecho en el pasado. <s>
    	Debe ser claro: Si una persona no está segura de si la(s) otra(s) quiere(n) tener relaciones sexuales, es importante preguntar y esperar una respuesta clara antes de continuar. <s>
    	Puede retirarse en cualquier momento: Si alguien cambia de opinión durante la actividad sexual, tiene derecho a detenerla y comunicarlo a lxs demás. <s>
    	Es una responsabilidad compartida: Cada persona debe asegurarse que todxs estén cómodxs e informadxs previamente de las medidas de protección y actividades sexuales que se realizarán. 
    <hr/> Si se considera que el consentimiento ha sido violado, es importante buscar ayuda de inmediato. Puede ser necesario hablar con un profesional de la salud, un consejero o un asesor jurídico para obtener asesoramiento y apoyo. <hr/> En conclusión, el consentimiento debe ser libre, entusiasta, informado y reversible. El respeto por esta decisión es fundamental en cualquier relación íntima. De esta forma, se garantiza la salud, seguridad y disfrute de todxs lxs participantes.
    `,
    mainImagen:'ConsentimientoSexual.png'},
    
]



export const chatArray:TemaChatAttributes[]=[
    {pregunta:'Mi entorno no acepta que sea LGBT+. ¿ Qué puedo hacer ?',
        sexos:[1,3],generos:[1,3,5,6],orientaciones:[1,2,3,4,5,7],
        respuesta:'Descubrir nuestra identidad es un proceso para cada unx, y también lo puede ser para las personas en nuestra vida. Debemos ser empáticxs y respetar los tiempos de aprendizaje de todxs, pero no permitamos los actos agresivos. Si tu seguridad no está en peligro, puedes ayudarles a entenderte mejor con fuentes confiables sobre la diversidad, invitándoles a participar de talleres o asistir a grupos de apoyo de familiares LGBT+.'
    },
    {pregunta:'¿ Tengo que salir del clóset para ser LGBT+ ?',
    sexos:[1,3],generos:[1,3,5,6],orientaciones:[1,2,3,4,5,7],
    respuesta:'Si eres LGBT+, lo eres independientemente de si otras personas conocen tu identidad sexual o no. Hay muchas razones por las que algunas personas LGBT+ no salen del clóset, como vivir en un contexto violento. Si bien tener personas que te validen es beneficioso para tu salud mental, salir del clóset no es el punto de inicio de tu diversidad, ¡naciste así!'
    },
    {pregunta:'¿ Cómo puedo decirle a mi familia que soy LGBT+ ?',
    sexos:[1,3],generos:[1,3,5,6],orientaciones:[1,2,3,4,5,7],
    respuesta:'Antes de tener la conversación, piensa en los posibles escenarios que ocurrirían si les compartes tu identidad: ¿cómo reaccionarían ellxs? ¿Qué emociones sentirías tú? Imagínate teniendo la conversación, ensaya en tu mente cómo afrontarlo asertivamente y practica relajarte después del ejercicio. Considera siempre tu seguridad y condiciones actuales cuando decidas compartirles tu identidad sexual.'
    },
    {pregunta:'¿ Cómo sé qué pronombres debo usar cuando conozco a alguien ?',
    generos:[1,3,5,6],
    respuesta:'El primer paso es no asumir su pronombre, así que vas por buen camino :) Lo siguiente que puedes hacer es presentarte con tus pronombres, y así invitarle a que pueda compartirlo contigo. Recuerda, algunas personas pueden estar en el proceso de descubrir los pronombres con los que se sientan más cómodxs, o ¡tal vez no usan ninguno!'
    },
    {pregunta:'¿ Las personas asexuales no pueden tener sexo ?',
    orientaciones:[5,7],
    respuesta:'La asexualidad es una orientación tan diversa como las demás, y abarca un gran espectro de vivencias, desde la total asexualidad y la sexualidad normativa. Entonces, puede haber asexuales que disfrutan las caricias físicas, sin un encuentro sexual; practicar la masturbación o no; desear tener relaciones sexuales en algunos momentos, etc.'
    },
    {pregunta:'¿ Cómo puedo saber mi orientación sexual si no soy sexualmente activx ?',
    orientaciones:[1,2,3,4,5,7],
    respuesta:'No necesitas tener relaciones sexuales para descubrir quién eres. La orientación sexual comprende un conjunto de atracciones físicas, sexuales y emocionales hacia uno o más géneros. Para descubrir el tuyo, podrías empezar preguntándote: ¿de quiénes me he sentido atraídx en el pasado? ¿Qué personas me atraen ahora? ¿Con quién me veo en un futuro?'
    },
    {pregunta:'¿ Si soy un hombre trans me pueden gustar los hombres ?',
    generos:[3,6],orientaciones:[1],
    respuesta:'¡Sí! Tu identidad de género no restringe la atracción que puedas sentir por alguien.'
    },
    {pregunta:'¿ Tengo que odiar mi cuerpo para ser trans ?',
    generos:[1,3,5,6],
    respuesta:'Algunas personas trans sienten angustia, incomodidad o desconexión con las características sexuales (genitales, vello, senos, etc.) relacionadas al género que les asignaron al nacer, pero no es una experiencia universal. Las vivencias trans no deben partir del odio a sí mismas para ser válidas.'
    },
    {pregunta:'¿ Qué es ser no binarie ? ',
    generos:[5,6],
    respuesta:'Una persona no binarie es alguien cuya identidad de género se encuentra fuera del binario tradicional hombre-mujer. Tal vez es un término nuevo para algunxs, pero muchas culturas han reconocido la diversidad de género a lo largo de la historia. Por ejemplo, lxs Qariwarmi en el Imperio Incaico, y lxs Muxe en el pueblo zapoteco de México.'
    },
    {pregunta:'¿ Qué puedo hacer si estoy cuestionando ser intersexual ?',
    sexos:[1,3],
    respuesta:'Si sospechas que alguna característica sexual tuya no encaja por completo en lo tradicionalmente catalogado como masculino o femenino, podrías consultar tu historia clínica, realizar exámenes médicos, leer investigaciones sobre esta diversidad corporal y seguir a organizaciones intersexuales. Pregúntale a tu familia siempre y cuando tu seguridad no esté en peligro.'
    },
    {pregunta:'¿ Si soy intersexual tengo que identificarme así ?',
    sexos:[1,3],
    respuesta:'La intersexualidad es una condición natural del cuerpo, y reconocerte como tal puede ayudarte a conectar con una comunidad que comparte tus vivencias. Pero no es una identidad, una orientación ni un tercer sexo. Ellxs pueden tener una identidad de género u orientación sexual específica como cualquier otra persona. Por ejemplo, puede identificarse como cisgénero y sentirse más cómodx usando la etiqueta pansexual.'
    },
    ]

export const sexArray:SexoAttributes[]=[
    {name:'Sí'},{name:'No'},{name:'Lo estoy cuestionando'},{name:'Prefiero no decirlo'}
]
export const genderArray:GenderIdentityAttributes[]=[
    {name:'Mujer trans'},{name:'Mujer cis'},{name:'Hombre trans'},{name:'Hombre cis'},{name:'No binarie'},{name:'Otro'},
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