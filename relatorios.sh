#!/bin/bash

docker run --rm -it -p 3000:3000 -v $(pwd):/usr/src/app  node:slim /bin/bash


