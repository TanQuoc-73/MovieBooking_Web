# Infrastructure

This directory contains infrastructure-level services for external integrations.

## Services

### Mail Service
Email sending functionality:
- Welcome emails
- Booking confirmations
- Password reset emails
- Custom email templates

### Storage Service
File upload and management:
- Upload files (images, videos)
- Delete files
- Get file URLs
- Support for local storage or cloud storage (S3, etc.)

### Queue Service
Background job processing:
- Email sending jobs
- Booking expiration jobs
- Payment processing jobs
- Custom job queues

### Cache Service
Data caching:
- In-memory caching
- Redis integration (optional)
- Cache invalidation
- TTL management

### Logger Service
Application logging:
- Structured logging
- Log levels (error, warn, info, debug)
- Context-aware logging
- Integration with logging services

## Usage

### Mail Service
```typescript
import { MailService } from '@/infrastructure/mail/mail.service';

constructor(private mailService: MailService) {}

await this.mailService.sendWelcomeEmail(user.email, user.name);
```

### Storage Service
```typescript
import { StorageService } from '@/infrastructure/storage/storage.service';

const url = await this.storageService.uploadFile(file);
```

### Queue Service
```typescript
import { QueueService } from '@/infrastructure/queue/queue.service';

await this.queueService.sendEmailJob({ to, subject, body });
```

### Cache Service
```typescript
import { CacheService } from '@/infrastructure/cache/cache.service';

await this.cacheService.set('key', data, 300); // 5 minutes TTL
const data = await this.cacheService.get('key');
```
