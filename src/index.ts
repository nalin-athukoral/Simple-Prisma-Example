
import express, { Request, Response } from 'express';

import exp from 'constants';
import { PrismaClient } from 'prisma/prisma-client';

const prisma = new PrismaClient();

const app =  express();

app.use(express.json());

app.get('/', async(req: Request, res: Response) => {
  const params = req.params;
  const posts = await prisma.categories.findMany({
  })
  res.json(posts)
});

app.get('/:id', async(req: Request, res: Response) => {
  const params = req.params;
  const posts = await prisma.categories.findUnique({
    where: {
      id: Number(params.id),
    },
  })
  res.json(posts)
});

app.post('/', async(req: Request, res: Response) => {
  const { name } = req.body;
  const post = await prisma.categories.create({
    data: {
      name,
    }
  })
  res.json(post)
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
  