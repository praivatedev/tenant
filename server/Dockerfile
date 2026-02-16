#base image to use
FROM node:22

#choose the working directory
WORKDIR /app

#copy the package files
COPY package*.json ./

#install the dependamcies
RUN npm install

#copy everything else
COPY . . 

#expose the port you want to use
EXPOSE 4050

#run the application
CMD ["npm", "start"]