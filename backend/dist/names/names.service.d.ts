import { Repository } from 'typeorm';
import { Name } from './name.entity';
import { CreateNameDto } from './create-name.dto';
import { UpdateNameDto } from './update-name.dto';
export declare class NamesService {
    private readonly nameRepository;
    constructor(nameRepository: Repository<Name>);
    getAllNames(): Promise<Name[]>;
    createName(createNameDto: CreateNameDto): Promise<Name>;
    updateName(id: string, updateNameDto: UpdateNameDto): Promise<Name>;
    deleteName(id: string): Promise<void>;
}
