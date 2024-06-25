import { DataSourceSingleton } from '@infra/datasource-singleton'
import { NextFunction, Request, Response } from 'express'

export const openDbConnection = async (_: Request, __: Response, next: NextFunction) => {

    const instance = await DataSourceSingleton.getInstance().initiate()
    console.log('INSTANCEEEEEEED', instance)
    next()
}
