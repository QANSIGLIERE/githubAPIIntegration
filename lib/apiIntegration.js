var { get, download } = require('qansigliere-axios-utils');

class Github_API {
    constructor(url = '', authToken = '') {
        this.url = url ? url : process.env.GITHUB_URL;
        this.headers = {
            'user-agent': 'QANSIGLIERE',
            'content-type': 'application/json',
            accept: 'application/json',
            authorization: 'Basic ' + btoa(authToken ? authToken : process.env.GITHUB_AUTH_TOKEN),
        };
    }

    async getPullRequests(owner, repo) {
        return await get(this.url, `/repos/${owner}/${repo}/pulls`, this.headers);
    }
}

module.exports.Github_API = Github_API;
