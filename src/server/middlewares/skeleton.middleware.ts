import express, { Request, Response, NextFunction, Router } from 'express';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const skeletonRoutes = [
  {
    routeRegex: /.*\/movie\/.*/,
    pathToFile: 'skeleton/movie',
  },
];

const skeletonHandleFactory = (pathToFile: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const serverDistFolder = dirname(fileURLToPath(import.meta.url));
    const fullPathToFile = join(resolve(serverDistFolder, '../browser'), pathToFile, 'index.html');
    express.static(fullPathToFile)(req, res, next);
  };
};
const router = Router();

skeletonRoutes.forEach(({ routeRegex, pathToFile }) => {
  router.use(routeRegex, skeletonHandleFactory(pathToFile));
});

export const skeletonRouter = router;
