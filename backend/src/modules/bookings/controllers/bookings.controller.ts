import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    UseGuards,
} from '@nestjs/common';
import { BookingsService } from '../services/bookings.service';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';

@Controller('bookings')
@UseGuards(JwtAuthGuard)
export class BookingsController {
    constructor(private readonly bookingsService: BookingsService) { }

    @Get()
    async findUserBookings(@CurrentUser('id') userId: string) {
        return this.bookingsService.findUserBookings(userId);
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @CurrentUser('id') userId: string) {
        return this.bookingsService.findOne(id, userId);
    }

    @Post()
    async create(
        @Body() createBookingDto: CreateBookingDto,
        @CurrentUser('id') userId: string,
    ) {
        return this.bookingsService.create(createBookingDto, userId);
    }

    @Delete(':id')
    async cancel(@Param('id') id: string, @CurrentUser('id') userId: string) {
        return this.bookingsService.cancel(id, userId);
    }
}
