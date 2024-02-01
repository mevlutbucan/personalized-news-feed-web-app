#!/bin/bash

DELAY=25

mongosh <<EOF
var config = {
    "_id": "dbrs",
    "members": [
        {
            "_id": 0,
            "host": "MongoDB1",
            "priority": 2
        },
        {
            "_id": 1,
            "host": "MongoDB2",
            "priority": 1
        }
    ]
};
rs.initiate(config, { force: true });
EOF

echo "****** Waiting for ${DELAY} seconds for replicaset configuration to be applied ******"

sleep $DELAY

mongosh < /scripts/init.js
