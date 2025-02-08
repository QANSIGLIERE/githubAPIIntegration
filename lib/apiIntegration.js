var { get, download } = require('qansigliere-axios-utils');

class Github_API {
    constructor(url = '', authToken = '') {
        this.url = url ? url : process.env.GITHUB_URL;
        this.headers = {
            'User-Agent': 'QANSIGLIERE',
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${authToken ? authToken : process.env.GITHUB_AUTH_TOKEN}`,
        };
    }

    async getRepos(owner) {
        return await get(this.url, `users/${owner}/repos`, this.headers);
    }

    async getPullRequests(owner, repo, state = 'all') {
        return await get(this.url, `repos/${owner}/${repo}/pulls?state=${state}`, this.headers, true);
    }
}

module.exports.Github_API = Github_API;
