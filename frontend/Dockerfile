# Use a Node.js image
FROM node:latest
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the source code
COPY . .

# Build the React app
RUN yarn build


# Start the React app using a development server
CMD ["yarn", "run", "dev"]
