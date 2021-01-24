  {
    "compilerOptions": {
        "strictNullChecks": true,
        "moduleResolution": "node",
        "jsx": "react",
        "noUnusedParameters": true,
        "noUnusedLocals": true,
        "allowSyntheticDefaultImports":true,
        "target": "es5",
        "module": "ES2015",
        "declaration": true,
        "outDir": "./lib",
        "noImplicitAny": true,
        "importHelpers": true
      },
      "include": [
        "src/**/*",
        "/node_modules/jwt-decode",   // declaration file path
      ],
      "compileOnSave": false
    }