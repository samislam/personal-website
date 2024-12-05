import { IsOptional, IsString, Length, MaxLength } from 'class-validator'

export class ExampleDto {
  @IsString()
  @Length(3, 255)
  name: string

  @IsString()
  @IsOptional()
  @MaxLength(15000)
  description: string
}
