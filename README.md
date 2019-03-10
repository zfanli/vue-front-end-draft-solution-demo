# vue-front-end-draft-solution-demo

A simple demo for demonstrate Vue.js works with a rest server.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### API definition

Data Schema

```js
{
  "uniqueId": Number, // PK
  "vendor": String,
  "packageName": String,
  "registeredMonth": String,
  "requestDeadline": String,
  "payStatus": Number,
  "mediaName": String,
  "itemName": String,
  "channel": String, //	'0'=PC;'1'=Mobile;
  "registeredStartDate": String,
  "registeredEndDate": String,
  "price": Number,
  "paidAmount": Number
}
```

Needed APIs

/payment/vendor GET

A list of all available vendor.

Expected Status Code: 200

```json
{
  "availableVendor": ["vendor_name_1", "vendor_name_2"]
}
```

Error handle.

Expected Status Code: not be 200 (409 or other)

```json
{
  "error": true,
  "message": "Message text"
}
```
