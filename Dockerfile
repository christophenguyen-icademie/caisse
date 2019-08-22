FROM node:10.10.0

RUN apt-get update

# set working directory

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN git clone https://github.com/christophenguyen-icademie/caisse.git /app

# install and cache app dependencies
RUN npm install -g @angular/cli@8.2.2
RUN npm install

EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0 --port 4200 --disableHostCheck