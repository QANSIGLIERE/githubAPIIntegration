var { get, downloadV2 } = require('qansigliere-axios-utils');

class Github_API {
    constructor(url = '', authToken = '') {
        this.url = url ? url : process.env.GITHUB_URL;
        this.headers = {
            'User-Agent': 'QANSIGLIERE',
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${authToken ? authToken : process.env.GITHUB_AUTH_TOKEN}`,
        };
    }

    async getPullRequests(owner, repo, additionalFilters = '') {
        return await downloadV2(
            this.url,
            `/repos/${owner}/${repo}/pulls${additionalFilters ? `?${additionalFilters}` : ''}`,
            this.headers,
            'git',
        );
    }

    async getPullRequestComments(owner, repo, additionalFilters = '') {
        return await downloadV2(
            this.url,
            `/repos/${owner}/${repo}/pulls/comments${additionalFilters ? `?${additionalFilters}` : ''}`,
            this.headers,
            'git',
        );
    }

    async getRepositories(owner, additionalFilters = '') {
        return await downloadV2(
            this.url,
            `/users/${owner}/repos${additionalFilters ? `?${additionalFilters}` : ''}`,
            this.headers,
            'git',
        );
    }

    async getRepositories(owner, additionalFilters = '') {
        return await downloadV2(
            this.url,
            `/users/${owner}/repos${additionalFilters ? `?${additionalFilters}` : ''}`,
            this.headers,
            'git',
        );
    }

    async getRepositoriesForAuthenticatedUser(additionalFilters = '') {
        return await downloadV2(
            this.url,
            `/user/repos${additionalFilters ? `?${additionalFilters}` : ''}`,
            this.headers,
            'git',
        );
    }
}

module.exports.Github_API = Github_API;
