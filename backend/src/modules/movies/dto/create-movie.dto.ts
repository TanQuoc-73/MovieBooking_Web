import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsArray,
    Min,
} from 'class-validator';

export class CreateMovieDto {
    @IsString({ message: 'Tiêu đề phải là chuỗi ký tự' })
    @IsNotEmpty({ message: 'Tiêu đề không được để trống' })
    title: string;

    @IsString({ message: 'Mô tả phải là chuỗi ký tự' })
    @IsNotEmpty({ message: 'Mô tả không được để trống' })
    description: string;

    @IsNumber({}, { message: 'Thời lượng phải là số' })
    @Min(1, { message: 'Thời lượng phải lớn hơn 0' })
    duration: number;

    @IsString({ message: 'Đạo diễn phải là chuỗi ký tự' })
    @IsNotEmpty({ message: 'Đạo diễn không được để trống' })
    director: string;

    @IsArray({ message: 'Diễn viên phải là mảng' })
    @IsOptional()
    cast?: string[];

    @IsArray({ message: 'Thể loại phải là mảng' })
    @IsOptional()
    genres?: string[];

    @IsString({ message: 'Poster phải là chuỗi ký tự' })
    @IsOptional()
    poster?: string;

    @IsString({ message: 'Trailer phải là chuỗi ký tự' })
    @IsOptional()
    trailer?: string;
}
