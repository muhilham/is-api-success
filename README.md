Check Your Api Response
==================================

Check whether your api return is return statusCode 200 or not


## Installation

```
npm install is-api-success --save
```

## Usage

```
const requestCheck = require('is-api-success')

const options = {
  url: 'https://your-api.io/auth',
  method: 'GET',
  headers: {
    'Authorization': 'JWT nwefw8UewfnYewbbeY3dwe32Yewfwh9'
  }
}

requestCheck.check(options, isAllowed => {
  if (isAllowed) {
    //Request is success. Do anything here
    return true
  }
  return false //Request is failed.
})

```

for more options parameter please check https://www.npmjs.com/package/request
