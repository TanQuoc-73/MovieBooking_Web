# Common Module

This directory contains reusable components used throughout the application.

## Structure

- **constants/**: Application-wide constants
- **decorators/**: Custom decorators for routes and parameters
- **dto/**: Base DTOs for common data structures
- **enums/**: Enumerations used across the app
- **exceptions/**: Custom exception classes
- **filters/**: Exception filters for error handling
- **guards/**: Authentication and authorization guards
- **interceptors/**: Request/response interceptors
- **interfaces/**: Common TypeScript interfaces
- **pipes/**: Validation and transformation pipes
- **utils/**: Utility functions

## Usage Examples

### Using Decorators
```typescript
import { Public } from '@/common/decorators/public.decorator';
import { Roles } from '@/common/decorators/roles.decorator';
import { CurrentUser } from '@/common/decorators/current-user.decorator';

@Public()
@Get('public-route')
publicRoute() {}

@Roles(UserRole.ADMIN)
@Get('admin-route')
adminRoute() {}

@Get('me')
getProfile(@CurrentUser() user) {}
```

### Using Guards
```typescript
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('protected')
export class ProtectedController {}
```

### Using Interceptors
```typescript
import { TransformInterceptor } from '@/common/interceptors/transform.interceptor';

@UseInterceptors(TransformInterceptor)
@Controller('api')
export class ApiController {}
```
