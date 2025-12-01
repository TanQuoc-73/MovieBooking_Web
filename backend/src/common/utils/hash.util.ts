import * as bcrypt from 'bcrypt';
import { APP_CONSTANTS } from '../constants/app.constant';

export class HashUtil {
    static async hash(password: string): Promise<string> {
        return bcrypt.hash(password, APP_CONSTANTS.BCRYPT_SALT_ROUNDS);
    }

    static async compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}
