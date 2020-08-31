## Web Builder Module - Replace Constants

This module allows the [@deskeen/web-builder](https://github.com/deskeen/web-builder) engine to replace constants.

## Install

```
npm install @deskeen/web-builder
npm install @deskeen/web-builder-replace-constants
```

### Usage

Add tags to your files using the following syntax:

```
{{const:YOUR_CONSTANT_NAME}}
```

And add the module to the list of modules: 

```javascript
const builder = require('@deskeen/web-builder')
const builder.build([
  source: [
    // List of files or directories
  ],
  modules: [
    [
      '@deskeen/web-builder-replace-constants',
      {
        constants: {
          YOUR_CONSTANT_NAME: 'YOUR_CONSTANT_VALUE',
        },
      }
    ]
  ]
])
```

### Example

Imagine you would like to inline some CSS:

*/html/index.html*
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Page title</title>
    <link rel="canonical" href="{{const:HOST}}/welcome">
  </head>
  <body>
    <!-- Some html -->
  </body>
</html>
```

*Run the module:*

```javascript
const builder = require('@deskeen/web-builder')
await builder.build({
  source: ['/html'],
  modules: [
    [
      '@deskeen/web-builder-replace-constants',
      { 
        constants: {
          HOST: 'https://example.com',
        },
      }
    ]
  ],
})
```

Result:

*/html/index.html*
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Page title</title>
    <link rel="canonical" href="https://example.com/welcome">
  </head>
  <body>
    <!-- Some html -->
  </body>
</html>
```