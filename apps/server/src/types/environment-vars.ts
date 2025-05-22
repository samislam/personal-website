export interface EnvironmentVars {
  /** Service host @default "localhost" @example "192.168.1.118" */
  HOST: string
  /** Service port @default 3001 @example 5000 */
  PORT: number
  // -----------DATABASE------------
  /**
   * The database connection string
   *
   * @example
   *   - mysql://USER:PASSWORD@HOST:PORT/DATABASE
   *   - mongodb://USERNAME:PASSWORD@HOST/DATABASE
   */
  DATABASE_URL: string
  /**
   * NODEMAILER_HOST
   *
   * @example
   *   smtp.example.com
   */
  EMAIL_HOST: string
  /** SMTP client username */
  EMAIL_USERNAME: string
  /** SMTP client password */
  EMAIL_PASSWORD: string
}
