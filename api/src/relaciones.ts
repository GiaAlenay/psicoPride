import TemaChat from "./models/temaChat";
import Sexo from "./models/sexo";
import User from "./models/user";
import GenderIdentity from "./models/genderIdentity";
import SexualOrientation from "./models/sexualOrientation";
import TemaBiblioteca from "./models/temaBiblioteca";
import TemaChatSexo from "./models/temaChatSexo";

GenderIdentity.hasMany(User);
User.belongsTo(GenderIdentity);

Sexo.hasMany(User);
User.belongsTo(Sexo);

SexualOrientation.hasMany(User);
User.belongsTo(SexualOrientation);

// User.belongsToMany(Group, {
//     through: UserGroup,
//     as: 'groups',
//     foreignKey: 'userId',
//   });
//   Group.belongsToMany(User, {
//     through: UserGroup,
//     as: 'users',
//     foreignKey: 'groupId',});

TemaChat.belongsToMany(Sexo, { through: TemaChatSexo, as:'sexos',foreignKey:'TemaChatId' });
Sexo.belongsToMany(TemaChat, { through: TemaChatSexo, as:'temachat',foreignKey:'SexoId' });

TemaChat.belongsToMany(GenderIdentity, { through: 'chat_gender' });
GenderIdentity.belongsToMany(TemaChat, { through: 'chat_gender' });

TemaChat.belongsToMany(SexualOrientation, { through: 'chat_orientation' });
SexualOrientation.belongsToMany(TemaChat, { through: 'chat_orientation' });

// Profesor.belongsToMany(Materias, { through:  });
// Materias.belongsToMany(Profesor, { through:  });