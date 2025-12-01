import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    UseGuards,
} from '@nestjs/common';
import { MoviesService } from '../services/movies.service';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { PaginationDto } from '../../../common/dto/pagination.dto';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { UserRole } from '../../../common/enums/user-role.enum';
import { Public } from '../../../common/decorators/public.decorator';

@Controller('movies')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { }

    @Public()
    @Get()
    async findAll(@Query() paginationDto: PaginationDto) {
        return this.moviesService.findAll(paginationDto);
    }

    @Public()
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.moviesService.findOne(id);
    }

    @Post()
    @Roles(UserRole.ADMIN, UserRole.MANAGER)
    async create(@Body() createMovieDto: CreateMovieDto) {
        return this.moviesService.create(createMovieDto);
    }

    @Put(':id')
    @Roles(UserRole.ADMIN, UserRole.MANAGER)
    async update(
        @Param('id') id: string,
        @Body() updateMovieDto: UpdateMovieDto,
    ) {
        return this.moviesService.update(id, updateMovieDto);
    }

    @Delete(':id')
    @Roles(UserRole.ADMIN)
    async delete(@Param('id') id: string) {
        return this.moviesService.delete(id);
    }
}
