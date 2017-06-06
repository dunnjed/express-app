import { Router, Request, Response } from 'express';

const router: Router = Router();

// middleware
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// });

// define the home page route
router.get('/main', function (req: Request, res: Response) {
  res.send('My home page')
});
// define the about route
router.get('/about', function (req: Request, res: Response) {
  res.send('About me')
});

export function parse(data: any[]) {
    let [a, b, c] = data;
    return a;
}



export const routes: Router = router;