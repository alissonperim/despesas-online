import { MaritalStatus } from '@packages/types'
import { BaseDomain } from '@shared/domain'
import { DOMAIN, ulidGenerator } from '@shared/utils'
import { BeforeInsert, Column, Entity } from 'typeorm'

@Entity('users')
export class User extends BaseDomain {
    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    name!: string

    @Column(
        {
            name: 'last_name',
            type: 'varchar',
            length: 120,
        }
    )
    lastName!: string

    @Column(
        {
            name: 'phone_number',
            type: 'varchar',
            length: 14,
            unique: true,
        }
    )
    phoneNumber!: string

    @Column(
        {
            name: 'email',
            type: 'varchar',
            length: 120,
            unique: true,
        },
    )
    email!: string

    @Column(
        {
            type: 'varchar',
            length: 11,
            unique: true,
        }
    )
    document!: string

    @Column(
        {
            type: 'enum',
            enum: MaritalStatus
        }
    )
    maritalStatus!: MaritalStatus

    @Column(
        {
            name: 'birth_date',
            type: 'timestamp without time zone',
            nullable: true,
        }
    )
    birthDate!: Date

    @BeforeInsert()
    protected generateId() {
        this.id = ulidGenerator(DOMAIN.user)
    }
}
