# @sakit-sa/react-authorize

> This component helps to show an element, if you have a permission. It's based on React.

[![NPM](https://img.shields.io/npm/v/@sakit-sa/react-authorize.svg)](https://www.npmjs.com/package/@sakit-sa/react-authorize) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Live Playground

To run that demo on your own computer:
* Clone this repository
* `cd example/`
* `npm run start`
* Visit http://localhost:3000/

## Getting Started
### Install

```sh
npm install @sakit-sa/react-authorize
```

### Usage
```jsx
import React from 'react';
import Authozie from '@sakit-sa/react-authorize';

const App = () => (
    <Authozie
        check={"permission_1"}
        permissions={['permission_0', 'permission_1']}
    >
        The content
    </Authozie>
);
```

### Props
Name | Type | Default | Description
-----|-------------|-----------|-----
**check**|`string, array`|`[]`| This value must be exist in permissions prop. this is can a string or strings as array.
**children**|`element`|`-`|Specifies a content that must be show, if you have a permission.
**fallback**|`element`|`-`|If you have any permission, it shows instead of children prop.
**isViceVersa**|`boolean`|`false`|Specifies a boolean value. If the value is false, check prop must be exist in permissions prop and If the value is true, check prop must not be exist in permissions props and actually in this case, children are shown.
**permissionKey**|`string`|``|Specifies a localStorage's key. It gets permissions from localStorage.
**permissions**|`array`|`[]`|List of permission as string. note: if permissionKey has a value, permissions are ineffective.

### License

MIT Licensed. © Copyright [Saeed Abdilar](https://github.com/Abdilar)
