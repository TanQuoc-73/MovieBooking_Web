import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateBookingDto {
    @IsString({ message: 'ID suất chiếu không hợp lệ' })
    @IsNotEmpty({ message: 'ID suất chiếu không được để trống' })
    showtimeId: string;

    @IsArray({ message: 'Danh sách ghế phải là mảng' })
    @IsNotEmpty({ message: 'Danh sách ghế không được để trống' })
    seatIds: string[];
}
