# Here are some learning from working on this specific project

## Install jest with typescript with ES6 modules
1) Follow the instructions here to install ts-jest: https://github.com/kulshekhar/ts-jest
2) You will get an error to change `jest.config.js` to `jest.config.cjs`. Do as it says
3) Set the following tsconfig.json to false as per the error messages you will get
```
    "noUnusedLocals": false,
    "noUnusedParameters": false,
```
4) Set the following as per error massages in your `tsconfig.json`:
```
"esModuleInterop": true
```