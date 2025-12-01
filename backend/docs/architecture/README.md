# Architecture Overview

## Project Structure

```
backend/
├── src/
│   ├── common/              # Shared components
│   ├── config/              # Configuration files
│   ├── database/            # Database related
│   ├── modules/             # Feature modules
│   ├── shared/              # Shared resources
│   └── infrastructure/      # Infrastructure layer
```

## Layers

### Common Layer
Contains reusable components used across the application:
- **Constants**: Application-wide constants
- **Decorators**: Custom decorators
- **Guards**: Authentication and authorization guards
- **Interceptors**: Request/response interceptors
- **Filters**: Exception filters
- **Pipes**: Validation pipes
- **DTOs**: Base DTOs
- **Interfaces**: Common interfaces
- **Utils**: Utility functions

### Config Layer
Configuration files for different services:
- Database configuration
- JWT configuration
- Mail configuration
- Swagger configuration

### Module Layer
Feature-specific modules following the same structure:
- **Controllers**: Handle HTTP requests
- **Services**: Business logic
- **DTOs**: Data transfer objects
- **Entities**: Database entities
- **Repositories**: Data access layer (if needed)

### Infrastructure Layer
External service integrations:
- Mail service
- Storage service
- Queue service
- Cache service
- Logger service

### Shared Layer
Shared utilities and helpers:
- Base services
- Helper functions
- Common types

## Design Patterns

### Dependency Injection
NestJS uses dependency injection for loose coupling and testability.

### Repository Pattern
Data access is abstracted through repositories.

### DTO Pattern
Data transfer objects validate and transform data.

### Guard Pattern
Guards handle authentication and authorization.

### Interceptor Pattern
Interceptors transform requests and responses.

## Best Practices

1. **Separation of Concerns**: Each layer has a specific responsibility
2. **DRY Principle**: Reusable code in common and shared folders
3. **Type Safety**: TypeScript for type checking
4. **Validation**: DTOs with class-validator
5. **Error Handling**: Centralized exception filters
6. **Logging**: Structured logging with custom logger
7. **Documentation**: Swagger for API documentation
