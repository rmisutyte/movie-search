import express, { Request, Response, NextFunction, Router } from 'express';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const carcassRoutes = [
  {
    routeRegex: /.*\/movie\/.*/,
    pathToFile: 'carcass/movie',
  },
];

const carcassHandleFactory = (pathToFile: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const serverDistFolder = dirname(fileURLToPath(import.meta.url));
    const fullPathToFile = join(resolve(serverDistFolder, '../browser'), pathToFile, 'index.html');
    express.static(fullPathToFile)(req, res, next);
  };
};
const router = Router();

carcassRoutes.forEach(({ routeRegex, pathToFile }) => {
  router.use(routeRegex, carcassHandleFactory(pathToFile));
});

export const carcassRouter = router;
