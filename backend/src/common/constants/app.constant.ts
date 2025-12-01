export const APP_CONSTANTS = {
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 100,
    DEFAULT_PAGE: 1,

    JWT_EXPIRATION: '7d',
    REFRESH_TOKEN_EXPIRATION: '30d',

    BCRYPT_SALT_ROUNDS: 10,

    FILE_UPLOAD_MAX_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],

    BOOKING_EXPIRATION_MINUTES: 15,

    CACHE_TTL: 300, // 5 minutes
} as const;
