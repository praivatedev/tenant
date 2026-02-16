#base image
FROM node:22

#select the working drectory
WORKDIR /app

#copy the package files
COPY package*.json ./

#install the dependancies
RUN npm install

#copy everything else
COPY . .

#expose the port you want to use
EXPOSE 5173

#run the application
CMD ["npm", "run", "dev"]



