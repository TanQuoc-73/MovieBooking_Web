import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { PaginationDto, PaginatedResponseDto } from '../../../common/dto/pagination.dto';

@Injectable()
export class MoviesService {
    async findAll(paginationDto: PaginationDto) {
        // TODO: Implement database query with pagination
        const movies = [];
        const total = 0;
        return new PaginatedResponseDto(
            movies,
            total,
            paginationDto.page,
            paginationDto.limit,
        );
    }

    async findOne(id: string) {
        // TODO: Implement find by ID
        return { id, title: 'Sample Movie' };
    }

    async create(createMovieDto: CreateMovieDto) {
        // TODO: Implement create movie
        return { id: 'new-id', ...createMovieDto };
    }

    async update(id: string, updateMovieDto: UpdateMovieDto) {
        // TODO: Implement update movie
        return { id, ...updateMovieDto };
    }

    async delete(id: string) {
        // TODO: Implement delete movie
        return { message: 'Movie deleted successfully' };
    }
}
