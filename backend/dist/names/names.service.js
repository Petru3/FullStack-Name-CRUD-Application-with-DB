"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const name_entity_1 = require("./name.entity");
let NamesService = class NamesService {
    constructor(nameRepository) {
        this.nameRepository = nameRepository;
    }
    async getAllNames() {
        return this.nameRepository.find();
    }
    async createName(createNameDto) {
        const newName = this.nameRepository.create(createNameDto);
        return this.nameRepository.save(newName);
    }
    async updateName(id, updateNameDto) {
        const existingName = await this.nameRepository.findOne({ where: { id: id } });
        if (!existingName) {
            throw new common_1.NotFoundException(`Name with id ${id} not found`);
        }
        const updatedName = { ...existingName, ...updateNameDto };
        return this.nameRepository.save(updatedName);
    }
    async deleteName(id) {
        const result = await this.nameRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Name with id ${id} not found`);
        }
    }
};
exports.NamesService = NamesService;
exports.NamesService = NamesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(name_entity_1.Name)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NamesService);
//# sourceMappingURL=names.service.js.map