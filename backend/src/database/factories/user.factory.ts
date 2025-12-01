// Example factory file
// TODO: Implement data factory logic

export class UserFactory {
    static create(overrides?: Partial<any>) {
        return {
            name: 'Test User',
            email: 'test@example.com',
            password: 'password123',
            ...overrides,
        };
    }
}
