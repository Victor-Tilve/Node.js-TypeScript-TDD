import app from '../config/app'

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`server is working. Port \x1b[32m%s\x1b[0m ${process.env.PORT}`)
})