// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Body,
//   Param,
//   HttpCode,
//   HttpStatus,
// } from '@nestjs/common';
// import { UsersService } from '../services/users.service';
// import { CreateUserDto } from '../dto/create-user.dto';
// import { UpdateUserDto } from '../dto/update-user.dto';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   /**
//    * GET /api/users
//    * Lấy danh sách tất cả users
//    */
//   @Get()
//   async findAll() {
//     return this.usersService.findAll();
//   }

//   /**
//    * GET /api/users/:id
//    * Lấy thông tin user theo ID
//    */
//   @Get(':id')
//   async findOne(@Param('id') id: string) {
//     return this.usersService.findOne(id);
//   }

//   /**
//    * POST /api/users
//    * Tạo user mới
//    */
//   @Post()
//   @HttpCode(HttpStatus.CREATED)
//   async create(@Body() createUserDto: CreateUserDto) {
//     return this.usersService.create(createUserDto);
//   }

//   /**
//    * PUT /api/users/:id
//    * Cập nhật thông tin user
//    */
//   @Put(':id')
//   async update(
//     @Param('id') id: string,
//     @Body() updateUserDto: UpdateUserDto,
//   ) {
//     return this.usersService.update(id, updateUserDto);
//   }

//   /**
//    * DELETE /api/users/:id
//    * Xóa user
//    */
//   @Delete(':id')
//   @HttpCode(HttpStatus.NO_CONTENT)
//   async remove(@Param('id') id: string) {
//     return this.usersService.remove(id);
//   }
// }
