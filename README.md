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

#### Get information about repositories

```
let newIntegration = new Gitlab_API();
let request = await newIntegration.getRepositories('QANSIGLIERE', 'githubAPIIntegration');
```

### Pull Requests

#### Get information about pull requests

```
let newIntegration = new Gitlab_API();
let request = await newIntegration.getPullRequests('QANSIGLIERE', 'githubAPIIntegration', 'state=all');
```

### Pull Request Comments

#### Get information about pull request comments

```
let newIntegration = new Gitlab_API();
let request = await newIntegration.getPullRequestComments('QANSIGLIERE', 'githubAPIIntegration');
```

## Improvements & Suggestions

https://forms.gle/GZbS9hw42tSYJxKL7

## Related Videos

-   https://www.youtube.com/live/7PKee5GzVWk?si=zhlooAfCUqU3Rc2s
-   https://www.youtube.com/live/Cc0BRnK3V6s?si=egbqRq_2SBiEgzzm
