# service-js-polyfill

__Please don't use this service on your projects.
It will have breaking changes.
It is built exclusively for this platform.__

This service provides `JavaScript` polyfills for the
[gaming platform](https://github.com/gaming-platform).

## Installation and requirements

I recommend to use
[Docker](https://www.docker.com),
[Docker Compose](https://docs.docker.com/compose/).
You can also set up a stack yourself.

### Development

```
git clone https://github.com/gaming-platform/service-js-polyfill
cd service-js-polyfill
./project build
```

There're several other handy commands in the project script, like running tests. You see them with

```
./project help
```

Following urls are accessible after the project is successfully started.

| URL                                    | Information      |
|----------------------------------------|------------------|
| [http://localhost/](http://localhost/) | The application. |

### Production

The
[production image](https://hub.docker.com/r/gamingplatform/service-js-polyfill)
is built when pushed to git master. They always reflect the latest stable version.

## Endpoints

### GET /polyfill.min.js

This endpoint returns all the polyfills if query parameter `packages`
is not present. To be more fine-grained, you can specify the
query parameter `packages`. It should be a comma-separated list of
the following possible package names:
`CustomElements`,
`EventSource`.

__Examples__  
Load all with  
`GET /polyfill.min.js`.

Load only `CustomElements` and `EventSource` with  
`GET /polyfill.min.js?packages=CustomElements,EventSource`.

## Chosen technologies

It is written with `Node.js`. The choice is made, because
all needed polyfills can be downloaded via `npm`. Since there is
already the `Node.js` runtime available, we've chosen it.

Some other technologies:
* [Express](http://expressjs.com) as the `http` abstraction.
* Various [libraries and polyfills](/package.json) for `JavaScript`.

## A note on testing

There are acceptance tests that check if all is working and wired together as expected.
Acceptance tests work directly on the production images which gets pushed to docker hub.
You can run them as follows.

```
./project acceptance
```
