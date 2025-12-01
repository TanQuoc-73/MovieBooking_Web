#!/usr/bin/env ts-node

// Database seeding script
// Run with: npm run seed

import { UserSeeder } from '../src/database/seeders/user.seeder';

async function seed() {
    console.log('Starting database seeding...');

    try {
        const userSeeder = new UserSeeder();
        await userSeeder.run();

        console.log('Database seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seed();
