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



TemaChat.belongsToMany(SexualOrientation, { through: 'chat_orientation' });
SexualOrientation.belongsToMany(TemaChat, { through: 'chat_orientation' });

