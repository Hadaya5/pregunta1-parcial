# Base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock (if using yarn) or package-lock.json (if using npm)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --quiet

# Copy the rest of the application code
COPY . .

# Build the React app (replace `npm run build` with the appropriate build command for your CRA setup)
RUN npm run build

# Expose the desired port (replace 3000 with the port used by your CRA app)
EXPOSE 3000

# Create a volume for the /app directory
VOLUME [ "/app" ]

# Start the application
CMD [ "npm", "start" ]
