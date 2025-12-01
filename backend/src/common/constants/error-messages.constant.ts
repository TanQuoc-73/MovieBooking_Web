export const ERROR_MESSAGES = {
    // Authentication
    INVALID_CREDENTIALS: 'Email hoặc mật khẩu không đúng',
    UNAUTHORIZED: 'Bạn cần đăng nhập để thực hiện hành động này',
    FORBIDDEN: 'Bạn không có quyền truy cập tài nguyên này',
    TOKEN_EXPIRED: 'Phiên đăng nhập đã hết hạn',

    // User
    USER_NOT_FOUND: 'Không tìm thấy người dùng',
    USER_ALREADY_EXISTS: 'Email đã được sử dụng',
    USER_INACTIVE: 'Tài khoản đã bị vô hiệu hóa',

    // Movie
    MOVIE_NOT_FOUND: 'Không tìm thấy phim',
    MOVIE_ALREADY_EXISTS: 'Phim đã tồn tại',

    // Booking
    BOOKING_NOT_FOUND: 'Không tìm thấy đặt vé',
    SEAT_ALREADY_BOOKED: 'Ghế đã được đặt',
    BOOKING_EXPIRED: 'Đặt vé đã hết hạn',

    // Theater
    THEATER_NOT_FOUND: 'Không tìm thấy rạp chiếu',
    SHOWTIME_NOT_FOUND: 'Không tìm thấy suất chiếu',

    // Payment
    PAYMENT_FAILED: 'Thanh toán thất bại',
    PAYMENT_NOT_FOUND: 'Không tìm thấy giao dịch',

    // General
    INTERNAL_SERVER_ERROR: 'Đã xảy ra lỗi, vui lòng thử lại sau',
    VALIDATION_ERROR: 'Dữ liệu không hợp lệ',
    NOT_FOUND: 'Không tìm thấy tài nguyên',
} as const;
