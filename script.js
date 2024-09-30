#!/usr/bin/env node

new Promise((resolve) => {
    console.log("Welcome to rocket native.🚀 \n");
    resolve();
})
    .then(() => {
        console.log("ROCKET NATIVE 1.0.🚀 \n");
    })
    .catch((error) => {
        console.error(`🚨 An error occurred with post init script: ${error}`);
        throw new Error();
    });
