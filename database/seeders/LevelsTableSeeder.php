<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LevelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('levels')->insert([
            [
                'name' => 'Administrador',
                'description' => 'Usuário com acesso total ao sistema',
            ],
            [
                'name' => 'Gerente',
                'description' => 'Usuário com permissões de gerenciamento de recursos',
            ],
            [
                'name' => 'Usuário',
                'description' => 'Usuário com permissões básicas no sistema',
            ],
        ]);
    }
}
