# acrho-bff

**acrho-bff** is a backend-for-frontend (BFF) service designed to [provide a brief description of what your project does].

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- [Feature 1]
- [Feature 2]
- [Feature 3]

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version X.X.X)
- [npm](https://www.npmjs.com/) (version X.X.X)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nDija/acrho-bff.git
   ```

2. Navigate to the project directory:

   ```bash
   cd acrho-bff
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Run the Project

To start the server:

```bash
npm start
```

For development mode (with live reload using `nodemon`):

```bash
npm run dev
```

To build the project (TypeScript compilation):

```bash
npm run build
```

To run tests:

```bash
npm test
```

By default, the server runs on `http://localhost:3000`. You can change the port by setting the `PORT` environment variable:

```bash
PORT=5000 npm start
```

## API Endpoints

The following endpoints are available:

- `GET /runners`: Retrieve a list of all runners.
- `GET /runners/:id`: Retrieve details of a specific runner by ID.
- `POST /runners`: Create a new runner.
- `PUT /runners/:id`: Update an existing runner by ID.
- `DELETE /runners/:id`: Delete a runner by ID.

For detailed API documentation, refer to the [Swagger UI](http://localhost:3000/api-docs) when the server is running.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes.

4. Commit your changes:

   ```bash
   git commit -m 'Add some feature'
   ```

5. Push to the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

