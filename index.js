var { Github_API } = require('./lib/apiIntegration');

// Remove me at the end
(async function API() {
    let newIntegration = new Github_API();
    let request = await newIntegration.getPullRequests('QANSIGLIERE', 'githubAPIIntegration');

    console.log(JSON.stringify(request));
})();

module.exports.Github_API = Github_API;
