## twinpeaks-frontend

#### Requirements

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node 5.11+, npm 2.14.7+
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)

### Assumptions

1. PostgreSQL + PostGIS server running on localhost:5432 with a database called `twinpeaks-frontend`

#### Set up Arup network proxy

```
npm config set proxy http://proxy.ha.arup.com:80
npm config set https-proxy http://proxy.ha.arup.com:80
```

#### Install dependencies

```
npm install
```

### Developing

1. Create a `local.env.js` in `./server/config/environment`, based on the example in the same directory (controls local environment variables during development, and it is ignored by git).

2. Run `npm install` to install server dependencies and rebuild them for local environment variations.

3. Run `bower install` to install front-end dependencies.

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Deploy

Set server environment variables:

```
WINDOWS
set POSTGRES_URL=postgres://USER:PASS@HOST:POST/DATABASE
set NODE_ENV=production

LINUX/MAC
export POSTGRES_URL=postgres://USER:PASS@HOST:POST/DATABASE
export NODE_ENV=production
```
