import { Executable } from '@/types/executable-class'

export interface TypeORMOpts {
  dataSrcFile: string
  mode: TypeORMRunMode
}
export class TypeORM implements Executable {
  packageExecutable = 'typeorm-ts-node-commonjs'
  dataSrcFile: string
  mode: TypeORMRunMode
  constructor(opts: TypeORMOpts) {
    this.mode = opts.mode
    this.dataSrcFile = opts.dataSrcFile
  }
  get command() {
    return [this.packageExecutable, this.modeArg, this.dataSrcFileArg].join(' ')
  }
  get modeArg() {
    return this.mode
  }
  get dataSrcFileArg() {
    return `-d ${this.dataSrcFile}`
  }
}

export type TypeORMRunMode =
  | 'migration:generate'
  | 'migration:run'
  | 'migration:revert'
  | 'migration:show'
