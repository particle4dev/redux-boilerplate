FROM nginx:1.11.5
MAINTAINER Hoang Nam "particle4dev@gmail.com"

# Copy app dependencies
COPY ./internals/nginx/sites-enabled /etc/nginx/sites-enabled
COPY ./internals/nginx/sites-available /etc/nginx/sites-available
COPY ./build /data/www
COPY ./internals/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
