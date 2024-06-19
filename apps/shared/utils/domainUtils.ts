import 'dotenv/config'
import { ulid } from 'ulid'

export const DOMAIN = {
    USER: 'user',
    ADDRESS: 'addr'
} as const

export const ulidGenerator = (domain: string): string => {
    return `${domain}_${ulid()}`
}
