type AsyncTask = (...args: any[]) => Promise<any>

export const executeSequentially = async (promises: AsyncTask[]) => {
  for (const promise of promises) {
    try {
      await promise()
    } catch (error: any) {
      console.error(`Execution stopped due to error: ${error.message}`)
      break
    }
  }
}
