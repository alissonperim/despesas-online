import { User } from '@entities/user'
import { DataSource } from 'typeorm'

export const AppDataSource = () => {
    return new DataSource({
        type: 'postgres',
        host: 'database',
        port: 5432,
        username: 'db_rent_safe',
        password: 'Oficial1@3',
        database: 'rent_safe',
        entities: [
            User
        ],
        migrations: [
            'infra/migrations/*.ts'
        ],
        poolSize: 20
    })
}


export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'db_rent_safe',
    password: 'Oficial1@3',
    database: 'rent_safe',
    entities: [
        User
    ],
    migrations: [
        'infra/migrations/*.ts'
    ]
})
