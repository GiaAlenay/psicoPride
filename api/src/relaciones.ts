import TemaChat from "./models/temaChat";
import Sexo from "./models/sexo";
import User from "./models/user";
import GenderIdentity from "./models/genderIdentity";
import SexualOrientation from "./models/sexualOrientation";
import TemaBiblioteca from "./models/temaBiblioteca";

GenderIdentity.hasMany(User);
User.belongsTo(GenderIdentity);

Sexo.hasMany(User);
User.belongsTo(Sexo);

SexualOrientation.hasMany(User);
User.belongsTo(SexualOrientation);

TemaChat.belongsToMany(Sexo, { through: 'chat_sexo' });
Sexo.belongsToMany(TemaChat, { through: 'chat_sexo' });

TemaChat.belongsToMany(GenderIdentity, { through: 'chat_gender' });
GenderIdentity.belongsToMany(TemaChat, { through: 'chat_gender' });

TemaChat.belongsToMany(SexualOrientation, { through: 'chat_orientation' });
SexualOrientation.belongsToMany(TemaChat, { through: 'chat_orientation' });

// Profesor.belongsToMany(Materias, { through:  });
// Materias.belongsToMany(Profesor, { through:  });