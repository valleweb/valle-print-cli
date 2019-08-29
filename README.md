# valle-print-cli

Expose a local printer connection (CUPS) to a valle web application.

![Project architecture](/docs/valle-print-cli.png)

**Architecture focused in:**

- Most security
- Less memory
- Easy updates
- Easy client implementation
- CUPS integration

## Start using the CLI

### Install

```
$ [sudo] npm install -g valle-print-cli
```

or

```
$ [sudo] yarn global add valle-print-cli
```

### Run

```
$ valle
```

### Command Line Usage

*Start local API.*

```
$ valle
```

*Start local API with custom PORT.*

```
$ valle -p <port>
```

*Show the project version.*

```
$ valle --version
```

*Show all available commands.*

```
$ valle --help
```

## Start using the npm scripts (For PM2)

### Clone the project and install the dependencies

```
$ git clone https://github.com/valleweb/valle-print-cli.git
$ cd valle-print-cli
$ npm install
```

### Run

```
$ npm start
```

or

```
$ yarn start
```

### Choose a custom port

Configure your custom port creating a `.env` file following the [.env.example](.env.example) file.

## Routes

| Method | Endpoint | Description |
| :------------ | :------------ | :----------- |
| `GET`  | `/` | Instructions page.
| `POST` | `/print` | API for print.

**POST:** /

**Request:**

```json
{
  "ZPLCodeArray":[],
  "CUPSUrl":"",
  "userName":"",
  "jobName":"",
  "jobId":""
}
```

**Responses:**

**status:** 201

```json
{
  "success": "<Boolean>"
}
```

## All automatic tasks

- `yarn start` - Start API (production mode).
- `yarn start-dev` - Start API and watch files for reload (development mode).

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/valle-print-cli/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-print-cli/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-print-client/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/valle-print-cli/blob/master/LICENSE.md) © [ValleWeb Team](https://github.com/valleweb)