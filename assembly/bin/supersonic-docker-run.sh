#!/usr/bin/env sh

export SUPERSONIC_VERSION=latest

#### Set below DB configs to connect to your own database
# Supported DB_TYPE:  h2, mysql, postgres
export S2_DB_TYPE=postgres
export S2_DB_HOST=supersonic_postgres
export S2_DB_PORT=5432
export S2_DB_USER=supersonic_user
export S2_DB_PASSWORD=supersonic_password
export S2_DB_DATABASE=postgres

docker run --rm -it -d \
  --name supersonic_standalone \
  -p 9080:9080 \
  -e S2_DB_TYPE=${S2_DB_TYPE} \
  -e S2_DB_HOST=${S2_DB_HOST} \
  -e S2_DB_PORT=${S2_DB_PORT} \
  -e S2_DB_USER=${S2_DB_USER} \
  -e S2_DB_PASSWORD=${S2_DB_PASSWORD} \
  -e S2_DB_DATABASE=${S2_DB_DATABASE} \
  supersonicbi/supersonic:${SUPERSONIC_VERSION}