#!/bin/bash

DELAY=10

docker compose --file docker-compose.yaml down
docker compose --file docker-compose.yaml up -d

echo "****** Waiting for ${DELAY} seconds for containers to go up ******"
sleep $DELAY

docker exec MongoDB1 ./scripts/rs-init.sh
