"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const names_controller_1 = require("./names.controller");
const names_service_1 = require("./names.service");
const name_entity_1 = require("./name.entity");
let NamesModule = class NamesModule {
};
exports.NamesModule = NamesModule;
exports.NamesModule = NamesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([name_entity_1.Name]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: 'example',
                database: 'names',
                entities: [name_entity_1.Name],
                synchronize: true,
            }),
        ],
        controllers: [names_controller_1.NamesController],
        providers: [names_service_1.NamesService],
    })
], NamesModule);
//# sourceMappingURL=names.module.js.map