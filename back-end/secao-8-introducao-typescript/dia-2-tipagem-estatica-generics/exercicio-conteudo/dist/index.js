"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const centralizar_1 = require("./centralizar");
const dog1 = new centralizar_1.Dog('Brutus', 'Pitbull', 40);
const dog2 = new centralizar_1.Dog('Ghost', 'Rusk', 60);
dog2.dormir();
dog1.latir('Segundo teste\n');
const casa1 = new centralizar_1.Casa('Cajueiros', 19, 'Duque de Caxias');
const casa2 = new centralizar_1.Casa('Alameda', 20, 'Duque de Caxias');
casa1.chegar();
casa2.test('\n');