export abstract class Executable {
  abstract packageExecutable: string
  abstract get command(): string

  constructor(opts: object) {}
}
