import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
    constructor(message: string = 'Resource not found') {
        super(message, HttpStatus.NOT_FOUND);
    }
}

export class UnauthorizedException extends HttpException {
    constructor(message: string = 'Unauthorized') {
        super(message, HttpStatus.UNAUTHORIZED);
    }
}

export class ForbiddenException extends HttpException {
    constructor(message: string = 'Forbidden') {
        super(message, HttpStatus.FORBIDDEN);
    }
}

export class ConflictException extends HttpException {
    constructor(message: string = 'Conflict') {
        super(message, HttpStatus.CONFLICT);
    }
}

export class BadRequestException extends HttpException {
    constructor(message: string = 'Bad request') {
        super(message, HttpStatus.BAD_REQUEST);
    }
}
