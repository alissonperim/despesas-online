import { DataSourceSingleton } from '@infra/datasource-singleton'
import { NextFunction, Request, Response } from 'express'

export const openDbConnection = async (_: Request, __: Response, next: NextFunction) => {
    try {
        await DataSourceSingleton.getInstance().initialize()
        next()
    } catch (error) {
        next(error)
    }

}
