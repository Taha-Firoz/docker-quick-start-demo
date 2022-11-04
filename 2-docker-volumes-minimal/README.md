### Build
```
$ docker build . -t 2-docker-volumes-minimal-image
```

### Run
```
$ docker run --rm -v $PWD/src:/src -v $PWD/dest:/dest --name 2-docker-volumes-minimal-container 2-docker-volumes-minimal-image
```


> Try changing up the file in the `src` directory and run the container. You do not need to rebuild the image if you make any changes. Simply rerun the container and you'll get a new build