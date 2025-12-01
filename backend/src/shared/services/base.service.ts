export abstract class BaseService<T> {
    abstract findAll(query?: any): Promise<T[]>;
    abstract findOne(id: string): Promise<T>;
    abstract create(data: any): Promise<T>;
    abstract update(id: string, data: any): Promise<T>;
    abstract delete(id: string): Promise<void>;
}
