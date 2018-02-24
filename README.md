# microauth-token

> Token auth wrapper for zeit/micro

Unfortunately not all third-parties are able or willing to add the `Authorization` header to a request, especially with webhooks. However, it's possible to add a token to the query string and use that for authorizing requests.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install microauth-token
```

## Usage

With a [`micro`](https://github.com/zeit/micro) project:

```js
// index.js
const auth = require('microauth-token')

module.exports = auth('TOKEN')((req, res) => {
  res.end('Authorized')
})
```

```sh
$ TOKEN=abc micro
```

```sh
$ curl localhost:3000?TOKEN=abc # => '200 Authorized'
$ curl localhost:3000?TOKEN=xyz # => '401 Unauthorized'
```

## License

MIT

