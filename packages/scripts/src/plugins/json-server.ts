import { Executable } from '@/types/executable-class'

export interface JsonServerOpts {
  serveFrom: string
  port: number
}
export class JsonServer implements Executable {
  packageExecutable = 'json-server'
  serveFrom: string
  port: number
  constructor(opts: JsonServerOpts) {
    this.serveFrom = opts.serveFrom
    this.port = opts.port
  }
  get command() {
    return [this.packageExecutable, this.serveFromArg, this.portArg].join(' ')
  }
  get portArg() {
    return `--port ${this.port}`
  }
  get serveFromArg() {
    return this.serveFrom
  }
}
