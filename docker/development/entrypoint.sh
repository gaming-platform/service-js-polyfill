#!/usr/bin/env bash

# This happens in development because the volume definition removes the vendor folder on first load.
if [ ! -d "node_modules" ]
then
    npm install --verbose
fi

exec "$@"
