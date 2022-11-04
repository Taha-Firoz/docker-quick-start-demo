### Build
```
$ docker build . -t 1-docker-minimal-image
```

### Run
```
$ docker run --rm -p <host_port>:<container_port> --env-file .env --name 1-docker-minimal-container 1-docker-minimal-image
```

> Replace `<host_port>` with any available port eg. 8080, 3000, 7728 and `<container_port>` with a value from inside the `.env` file eg. 3000, 8080. These values can be the same eg. `8080:8080` just make sure you set the `PORT` variable in the `.env` file to whatever you choose.