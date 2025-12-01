# Modules

This directory contains all feature modules of the application.

## Module Structure

Each module follows a consistent structure:

```
module-name/
├── controllers/        # HTTP request handlers
├── services/          # Business logic
├── dto/              # Data transfer objects
├── entities/         # Database entities
├── repositories/     # Data access layer (optional)
├── interfaces/       # Module-specific interfaces (optional)
├── guards/           # Module-specific guards (optional)
└── module-name.module.ts
```

## Available Modules

### Auth Module
Handles user authentication and authorization:
- User registration
- User login
- JWT token management
- Password reset

### Users Module
User management functionality:
- Get user profile
- Update user information
- User CRUD operations (admin)

### Movies Module
Movie management:
- List movies with pagination
- Get movie details
- Create/update/delete movies (admin/manager)
- Movie search and filtering

### Bookings Module
Booking management:
- Create bookings
- View user bookings
- Cancel bookings
- Booking expiration handling

### Theaters Module
Theater and showtime management:
- Theater CRUD operations
- Showtime scheduling
- Seat management

### Payments Module
Payment processing:
- Process payments
- Payment status tracking
- Refund handling

## Creating a New Module

Use NestJS CLI to generate a new module:

```bash
nest g module modules/module-name
nest g controller modules/module-name/controllers/module-name
nest g service modules/module-name/services/module-name
```

Then organize the files according to the structure above.
