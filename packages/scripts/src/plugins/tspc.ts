import { Executable } from '@/types/executable-class'

export interface TspcOpts {
  tsconfigPath?: string
  watch?: boolean
}
export class Tspc implements Executable {
  packageExecutable = 'tspc'
  tsconfigPath?: string
  watch?: boolean
  constructor(opts: TspcOpts = {}) {
    this.tsconfigPath = opts.tsconfigPath
    this.watch = opts.watch
  }
  get tsconfigPathArg() {
    return `-p ${this.tsconfigPath}`
  }
  get watchArg() {
    return this.watch ? `--watch` : ''
  }
  get command() {
    return [this.packageExecutable, this.tsconfigPathArg, this.watchArg].join(' ')
  }
}
