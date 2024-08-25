import { NamesService } from './names.service';
import { Name } from './name.entity';
import { CreateNameDto } from './create-name.dto';
import { UpdateNameDto } from './update-name.dto';
export declare class NamesController {
    private readonly nameService;
    constructor(nameService: NamesService);
    getAllNames(): Promise<Name[]>;
    createName(createNameDto: CreateNameDto): Promise<Name>;
    updateName(id: string, updateNameDto: UpdateNameDto): Promise<Name>;
    deleteName(id: string): Promise<{
        message: string;
    }>;
}
