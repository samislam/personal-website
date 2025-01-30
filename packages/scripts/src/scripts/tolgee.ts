import { Executable } from '@/types/executable-class'

export interface TolgeeOpts {
  mode: TolgeeRunMode
}
export class Tolgee implements Executable {
  packageExecutable = 'tolgee'
  mode: TolgeeRunMode
  constructor(opts: TolgeeOpts) {
    this.mode = opts.mode
  }
  get command() {
    return [this.packageExecutable, this.modeArg].join(' ')
  }
  get modeArg() {
    return this.mode
  }
}

export type TolgeeRunMode = 'sync' | 'pull' | 'push' | 'print' | 'compare'
