import { Executable } from '@/types/executable-class'

export interface TailwindcssOpts {
  ignore: string[]
  outputFilePath: string
  watch?: boolean
}
export class Tailwindcss implements Executable {
  packageExecutable = 'tailwindcss'
  ignore: string[]
  outputFilePath: string
  watch?: boolean
  constructor(opts: TailwindcssOpts) {
    this.ignore = opts.ignore
    this.outputFilePath = opts.outputFilePath
    this.watch = opts.watch
  }
  get command() {
    return [this.packageExecutable, this.outputFilePathArg, this.watchArg].join(' ')
  }
  get ignoreArgs() {
    return this.ignore.map((path) => `-i ${path}`).join(' ')
  }
  get outputFilePathArg() {
    return `-o ${this.outputFilePath}`
  }
  get watchArg() {
    return this.watch ? '--watch' : ''
  }
}
