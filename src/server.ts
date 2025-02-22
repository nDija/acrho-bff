import app from './app';

const port = 3000;

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log(`Swagger Docs available at http://localhost:${port}/api-docs`)
});

export { server };