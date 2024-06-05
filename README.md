### Requirements

Make sure you have the following installed:

- [Postman](https://www.postman.com/)
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Stringboom/harvest.git
   ```

2. Navigate to the project directory:

   ```sh
   cd harvest
   ```

   or

   ```sh
   code harvest
   ```

3. Install dependencies:
   ```sh
   pnpm install
   ```

### Initial Setup

1. Start the application:

   ```sh
   pnpm start
   ```

2. Wait for Docker to finish initializing.

3. Open your browser and visit [http://localhost:8081](http://localhost:8081).

4. Log in to PhpMyAdmin using the following credentials:

   - **Username:** root
   - **Password:** wordpress-db-root-pass

5. Select the "wordpress" database.

6. Click on "Import" and import the `wordpress.sql` file provided in the root folder of the project.

### WordPress Admin Credentials

- **Username:** wordpress
- **Password:** &ZAT@}PKZ-Dt"q7

### Postman

Import the "Harvest Challenge" collection into your postman from the file provided `Harvest Challenge.postman_collection.json` in the root folder

### API Endpoints

#### Get Posts (WordPress)

- **Method:** GET
- **URL:** `http://localhost:8080/wp-json/wp/v2/posts`

#### Get Single Post (WordPress)

- **Method:** GET
- **URL:** `http://localhost:8080/wp-json/wp/v2/posts/1`

#### Get Posts (Backend)

- **Method:** POST
- **URL:** `http://localhost:3000/posts`
- **Body:**
  ```json
  {
    "lang": "en"
  }
  ```

#### Get Single Post (Backend)

- **Method:** POST
- **URL:** `http://localhost:3000/post/1`
- **Body:**
  ```json
  {
    "lang": "af"
  }
  ```

#### Get Translation (Python)

- **Method:** POST
- **URL:** `http://localhost:5000/process`
- **Body:**
  ```json
  {
    "content": "Hello, World!",
    "lang": "de"
  }
  ```

### Additionally

#### Front End App

There is a front end app @ [http://localhost:4000](http://localhost:4000).

#### What I Would add

- API Auth
- Optimization of the translation service both in the node and python solution
- in-depth caching
- More Integration with monorepo
- More API Endpoints
- CI/CD with Github Secrets
- Utilize more of Turbo repo ( pruning )
- Styling on frontend app
