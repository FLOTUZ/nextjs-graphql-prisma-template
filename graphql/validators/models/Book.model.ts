import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import "./";

export class Book {
    @IsDefined()
    @IsInt()
    id!: number;

    @IsOptional()
    @IsString()
    name?: string;
}
