export class Github_API {
    constructor(url?: string, authToken?: string);
    url: any;
    headers: {
        'User-Agent': string;
        Accept: string;
        Authorization: string;
    };
    getPullRequests(owner: any, repo: any, additionalFilters?: string): Promise<any>;
    getPullRequestComments(owner: any, repo: any, additionalFilters?: string): Promise<any>;
    getRepositories(owner: any, additionalFilters?: string): Promise<any>;
    getRepositoriesForAuthenticatedUser(additionalFilters?: string): Promise<any>;
}
//# sourceMappingURL=apiIntegration.d.ts.map