import { IsOptional, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { APP_CONSTANTS } from '../constants/app.constant';

export class PaginationDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = APP_CONSTANTS.DEFAULT_PAGE;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(APP_CONSTANTS.MAX_PAGE_SIZE)
    limit?: number = APP_CONSTANTS.DEFAULT_PAGE_SIZE;

    get skip(): number {
        return (this.page - 1) * this.limit;
    }
}

export class PaginatedResponseDto<T> {
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };

    constructor(data: T[], total: number, page: number, limit: number) {
        this.data = data;
        this.meta = {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        };
    }
}
