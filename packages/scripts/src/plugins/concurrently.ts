import { Executable } from '@/types/executable-class'

export interface ConcurrentlyOpts {
  names: string[]
  prefixColors: string[]
  args: string[]
  killOthers: boolean
}

export class Concurrently implements Executable {
  names: string[]
  prefixColors: string[]
  args: string[]
  packageExecutable = 'concurrently'
  constructor(opts: ConcurrentlyOpts) {
    this.names = opts.names
    this.prefixColors = opts.prefixColors
    this.args = opts.args
  }
  get command() {
    return [this.packageExecutable, this.namesArg, this.prefixColorsArg, this.argsFields].join(' ')
  }
  get namesArg() {
    return `--names ${this.names}`
  }
  get prefixColorsArg() {
    return `--prefix-colors ${this.prefixColors}`
  }
  get argsFields(): string {
    return this.args.map((arg) => `"${arg}"`).join(' ')
  }
}
