import 'dotenv/config'
import { ulid } from 'ulid'

export const DOMAIN = {
    user: 'user',
} as const

export const ulidGenerator = (domain: string): string => {
    return `${domain}_${ulid()}`
}
