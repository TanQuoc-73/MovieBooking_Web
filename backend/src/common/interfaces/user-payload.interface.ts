import { UserRole } from '../enums/user-role.enum';

export interface UserPayload {
    id: string;
    email: string;
    role: UserRole;
}
