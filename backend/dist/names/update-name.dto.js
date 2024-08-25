"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNameDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_name_dto_1 = require("./create-name.dto");
class UpdateNameDto extends (0, mapped_types_1.PartialType)(create_name_dto_1.CreateNameDto) {
}
exports.UpdateNameDto = UpdateNameDto;
//# sourceMappingURL=update-name.dto.js.map