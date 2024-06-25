import { AppDataSource } from '@infra/data/datasource'
import { DataSource, EntityTarget, Repository } from 'typeorm'

export class DataSourceSingleton {
    private static instance: DataSourceSingleton
    dataSource: DataSource 
    private constructor() {
        this.dataSource = null
    }
    
    public static getInstance(): DataSourceSingleton {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance;
    }

    public static getRepositoy<T>(E: EntityTarget<T>): Repository<T> {
        return this.getInstance().dataSource.getRepository(E)
    }

    public async initiate(): Promise<DataSource> {
        this.dataSource = AppDataSource()
        console.log('Database connected', this.dataSource.isInitialized)
        if (!this.dataSource.isInitialized) {
            await this.dataSource.initialize().then(() => console.log('Database connected')).catch((err) => console.error('BUAHEUHAUEHUAEIUAIEU', {meme: err, msg: err.msg}))
        }

        return this.dataSource
    }
}
