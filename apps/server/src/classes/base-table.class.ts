import { from, numberToString } from '@repo/common'
import { CreateDateColumn, Generated, PrimaryColumn } from 'typeorm'

export class BaseTable {
  @Generated()
  @PrimaryColumn({
    type: 'int',
    transformer: from(numberToString),
  })
  id: string

  @CreateDateColumn()
  createTime: Date
}
