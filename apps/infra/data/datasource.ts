import { User } from '@users/domain/entity/user'
import { DataSource } from 'typeorm'

export const AppDataSource = () => {
    return new DataSource({
        type: 'postgres',
        host: 'database',
        port: 5432,
        username: 'db_rent_safe',
        password: '',
        database: 'rent_safe',
        entities: [
            User
        ],
        migrations: [
            `${'apps/infra/migrations/*.ts'}`
        ],
        poolSize: 20
    })
}


export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'db_rent_safe',
    password: '',
    database: 'rent_safe',
    entities: [
        User
    ],
    migrations: [
        'apps/infra/migrations/*.ts'
    ]
})
