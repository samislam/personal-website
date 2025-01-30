import { Executable } from '@/types/executable-class'

export interface BarrelOpts {
  directory: string
  delete: boolean
  /** Defaults to index.ts */
  name?: string
}
export class Barrel implements Executable {
  packageExecutable = 'barrelsby'
  directory: string
  delete: boolean
  name?: string
  constructor(opts: BarrelOpts) {
    this.directory = opts.directory
    this.delete = opts.delete
    this.name = opts.name
  }
  get command() {
    return [this.packageExecutable, this.nameArg, this.directoryArg, this.deleteArg].join(' ')
  }
  get directoryArg() {
    return `--directory ${this.directory}`
  }
  get deleteArg() {
    return this.delete ? '--delete' : ''
  }
  get nameArg() {
    return this.name ? `--name ${this.name}` : ''
  }
}
