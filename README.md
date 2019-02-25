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

```json
{
  "uniqueId": Number, // PK
  "vendor": String, // 広告業者
  "packageName": String, // パッケージ名
  "registeredMonth": String, // 掲載月	 YYYY-MM
  "requestDeadline": String, // 請求締日	YYYY-MM-DD
  "payStatus": Number, // 支払入力	0=未支払;1=支払済み;
  "mediaName": String, // メディア名
  "itemName": String, // 商品名
  "channel": String, // チャンネル	'0'=PC;'1'=Mobile;
  "registeredStartDate": String, // 掲載期間	START YYYY-MM-DD
  "registeredEndDate": String, // 掲載期間	END YYYY-MM-DD
  "price": Number, // 価格
  "paidAmount": Number // 支払額
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
