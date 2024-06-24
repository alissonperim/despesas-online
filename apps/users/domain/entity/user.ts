import { BaseDomain } from '@shared/domain'
import { MaritalStatus } from '@shared/enums'
import { ulidGenerator } from '@shared/utils'
import { BeforeInsert, BeforeUpdate, Column } from 'typeorm'


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
            type: 'date',
            nullable: true,
        }
    )
    birthDate!: Date

    @BeforeInsert()
    generateId() {
        this.id = ulidGenerator('user_')
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.updatedAt = new Date()
    }
}