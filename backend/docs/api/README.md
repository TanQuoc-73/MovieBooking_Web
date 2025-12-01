# Movie Booking API Documentation

## Overview
This is the API documentation for the Movie Booking System.

## Base URL
```
http://localhost:3000/api
```

## Swagger Documentation
Interactive API documentation is available at:
```
http://localhost:3000/api/docs
```

## Authentication
Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and get JWT token
- `POST /auth/refresh` - Refresh JWT token

### Movies
- `GET /movies` - Get all movies (public)
- `GET /movies/:id` - Get movie by ID (public)
- `POST /movies` - Create new movie (admin/manager only)
- `PUT /movies/:id` - Update movie (admin/manager only)
- `DELETE /movies/:id` - Delete movie (admin only)

### Bookings
- `GET /bookings` - Get user's bookings
- `GET /bookings/:id` - Get booking by ID
- `POST /bookings` - Create new booking
- `DELETE /bookings/:id` - Cancel booking

## Response Format
All responses follow this format:
```json
{
  "success": true,
  "data": {},
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Error Format
Error responses follow this format:
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error message",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```
