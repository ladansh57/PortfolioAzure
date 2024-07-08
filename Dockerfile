# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files (including `pages` and `public` directories) to the working directory
COPY . .

# Copy the images directory to the container
COPY ./images ./images

# Build the Next.js application for production
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD [ "npm", "start" ]
