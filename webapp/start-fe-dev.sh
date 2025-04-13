#!/bin/bash

# Check if node is installed
if ! command -v node >/dev/null 2>&1; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

node_version=$(node -v)
major_version=$(echo "$node_version" | cut -d'.' -f1 | tr -d 'v')

if [ "$major_version" -ge 17 ]; then
    export NODE_OPTIONS=--openssl-legacy-provider
fi

# Install pnpm if not present
if ! command -v pnpm >/dev/null 2>&1; then
    if ! command -v npm >/dev/null 2>&1; then
        echo "npm is not installed. Please install npm first."
        exit 1
    fi
    npm i -g pnpm
fi

# Remove temporary UMI directories
rm -rf ./packages/supersonic-fe/src/.umi ./packages/supersonic-fe/src/.umi-production

# Build chat-sdk
cd ./packages/chat-sdk || { echo "Directory ./packages/chat-sdk not found."; exit 1; }

pnpm i

pnpm run build
if [ $? -ne 0 ]; then
    echo "Failed to build chat-sdk."
    exit 1
fi
pnpm link --global

# Start supersonic-fe
cd ../supersonic-fe || { echo "Directory ./packages/supersonic-fe not found."; exit 1; }

pnpm link ../chat-sdk

pnpm i

pnpm start