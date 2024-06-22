# Full Docker Project with Nuxt 3, .NET 7 WebAPI, and Strapi Starter

Follow these steps to get everything up and running:

## Set Up Environment Variables
1. Create a `.env` file in the root directory, as well as in the `web` and `strapi` folders.
2. Copy the contents from the `.env.example` file found in the same directories into these new `.env` files.

## Initialize Strapi
1. Open a terminal and navigate to the `strapi` directory.
2. Run `docker-compose up -d` to initialize Strapi.
3. Wait a few moments for the Strapi container to build the admin interface.

## Set Up Strapi Admin
1. Visit [http://localhost:1337/admin](http://localhost:1337/admin) in your browser.
2. Create a new user to access the Strapi admin panel.

## Configure Content in Strapi
1. Go to "Single Types" and add a value to the `title` attribute.
2. Navigate to "Settings" -> "Roles" -> "Public" -> "Home Page" and enable the `find` checkbox.

## Start the Full Project
1. Open a terminal and navigate to the root directory of the project.
2. Run `docker-compose up -d` to start building the Docker images for the entire project.
3. Wait a few moments for the build process to complete.

## Access the Nuxt App
1. Open [http://localhost:3000/](http://localhost:3000/) in your browser.
2. You should see the Nuxt app displaying content from the API and Strapi.

Enjoy your full Docker setup with Nuxt 3, .NET 7 WebAPI, and Strapi! If you encounter any issues, make sure to check the Docker logs and configuration files for troubleshooting.
