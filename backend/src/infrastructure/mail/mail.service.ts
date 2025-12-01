import { Injectable } from '@nestjs/common';

export interface EmailOptions {
    to: string;
    subject: string;
    template: string;
    context?: Record<string, any>;
}

@Injectable()
export class MailService {
    async sendEmail(options: EmailOptions): Promise<void> {
        // TODO: Implement email sending logic using nodemailer or similar
        console.log('Sending email:', options);
    }

    async sendWelcomeEmail(email: string, name: string): Promise<void> {
        await this.sendEmail({
            to: email,
            subject: 'Chào mừng đến với Movie Booking',
            template: 'welcome',
            context: { name },
        });
    }

    async sendBookingConfirmation(
        email: string,
        bookingDetails: any,
    ): Promise<void> {
        await this.sendEmail({
            to: email,
            subject: 'Xác nhận đặt vé',
            template: 'booking-confirmation',
            context: bookingDetails,
        });
    }

    async sendPasswordReset(email: string, resetToken: string): Promise<void> {
        await this.sendEmail({
            to: email,
            subject: 'Đặt lại mật khẩu',
            template: 'password-reset',
            context: { resetToken },
        });
    }
}
