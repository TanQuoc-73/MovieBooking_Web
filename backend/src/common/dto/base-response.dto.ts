export class BaseResponseDto<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    timestamp: string;

    constructor(data?: T, message?: string) {
        this.success = true;
        this.data = data;
        this.message = message;
        this.timestamp = new Date().toISOString();
    }
}

export class ErrorResponseDto {
    success: boolean;
    statusCode: number;
    message: string;
    error?: string;
    timestamp: string;

    constructor(statusCode: number, message: string, error?: string) {
        this.success = false;
        this.statusCode = statusCode;
        this.message = message;
        this.error = error;
        this.timestamp = new Date().toISOString();
    }
}
