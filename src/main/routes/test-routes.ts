import { Router } from 'express'

export default (router: Router): void => {
  router.get('/test_cors', (req, res) => {
    res.status(200).json({
      ok: true,
      message: 'route is ready'
    })
  })
}
