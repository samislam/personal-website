import { from, numberToString } from '@repo/common'
import { CreateDateColumn, Generated, PrimaryColumn, UpdateDateColumn } from 'typeorm'

export class BaseTable {
  @Generated()
  @PrimaryColumn({
    type: 'int',
    transformer: from(numberToString),
  })
  id: string

  @CreateDateColumn()
  createTime: Date

  @UpdateDateColumn()
  lastUpdated: Date
}
