import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
    private cache: Map<string, { value: any; expiry: number }> = new Map();

    async get<T>(key: string): Promise<T | null> {
        const item = this.cache.get(key);
        if (!item) return null;

        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return null;
        }

        return item.value as T;
    }

    async set(key: string, value: any, ttl: number = 300): Promise<void> {
        const expiry = Date.now() + ttl * 1000;
        this.cache.set(key, { value, expiry });
    }

    async delete(key: string): Promise<void> {
        this.cache.delete(key);
    }

    async clear(): Promise<void> {
        this.cache.clear();
    }

    async has(key: string): Promise<boolean> {
        const item = this.cache.get(key);
        if (!item) return false;

        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return false;
        }

        return true;
    }
}
