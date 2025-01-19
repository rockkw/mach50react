   # Use the official Node.js image as the base image
   FROM node:16-alpine 

   # Set the working directory inside the container
   WORKDIR /app

   # Copy package.json and package-lock.json to the working directory
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the rest of the application code to the working directory
   COPY . .

   # Build the React app
   RUN npm run build

   # Expose the port on which the app will run
   EXPOSE 3000

   # Start the application
   CMD ["npm", "start"]
