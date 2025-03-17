---
title: d.ts文件生成
---

## 修改`tsconfig.json`配置

补充`declaration: true`

```json title="tsconfig.json" {5}
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "declaration": true,
    // These two options will be selectively overridden in each project.
    // Utility libraries will have source maps on, but plugins will not.
    "declarationMap": false,
    "sourceMap": false,
    "importHelpers": true,
    "noEmitHelpers": true,
    // Will be overridden in client projects
    "module": "NodeNext",
    // Avoid accidentally using this config to build
    "noEmit": false,
    /* Strict Type-Checking Options */
    "allowUnreachableCode": false,
    // Too hard to turn on
    "exactOptionalPropertyTypes": false,
    "noFallthroughCasesInSwitch": true,
    "suppressImplicitAnyIndexErrors": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    // `process.env` is usually accessed as property
    "noPropertyAccessFromIndexSignature": false,
    "noUncheckedIndexedAccess": true,
    /* strict family */
    "strict": true,
    "alwaysStrict": true,
    /* Module Resolution */
    "moduleResolution": "NodeNext",
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "skipLibCheck": true, // @types/webpack and webpack/types.d.ts are not the same thing
    "noImplicitThis": true,
    "strictBindCallApply": true,
    "strictFunctionTypes": true,
    "strictNullChecks": true,
    "strictPropertyInitialization": true,
    "useUnknownInCatchVariables": true,
    /* Handled by ESLint */
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "importsNotUsedAsValues": "remove",
    "target": "ESNext",
    "jsx": "react",
    "allowJs": true,
  }
}
```
