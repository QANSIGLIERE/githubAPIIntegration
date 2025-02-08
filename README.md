# Github API Integration

The main idea of ​​this library created in the JavaScript language is to provide a ready-made set of API methods for
integration with Github

## Author

https://www.youtube.com/@QANSIGLIERE/

## Support the project

https://buymeacoffee.com/qansigliere

## Installation

Using npm `npm i qansigliere-github-api-integration`

## How to use it

### Create a \*.env file

Create any \*.env file (like `github.env`) and write the following information in the created file

```
export GITHUB_URL="https://__YOUR_URL__"
export GITHUB_AUTH_TOKEN="__YOUR_APIKEY__"
```

### Make the \*.env file works

Just run in the terminal the following command: `source github.env`

### Repositories

#### Get information about all repositories for any specific user

```
let newIntegration = new Github_API();
let request = await newIntegration.getRepos('__USER_NAME__');
```

### Pull Requests

#### Get all pull requests for any specific repository

```
let newIntegration = new Github_API();
let request = await newIntegration.getPullRequests('__USER_NAME__', '__REPO_NAME__');
```

## Improvements & Suggestions

https://forms.gle/GZbS9hw42tSYJxKL7

## Related Videos

-   https://www.youtube.com/live/7PKee5GzVWk?si=zhlooAfCUqU3Rc2s
