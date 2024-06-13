<?php

namespace Database\Seeders;

use Database\Seeders\DatabaseSeeder;
use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Mohamed Osman',
            'email' => 'sifosman@gmail.com',
            'password' => bcrypt('Thierry14247'),
            'email_verified_at' => time()
        ]);

        Project::factory()
        ->count(30)
        ->hasTasks(30)
        ->create();
    }
}
