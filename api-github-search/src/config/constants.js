/* 
    Most appropriate url would be: https://api.github.com/repos/facebook/react/issues 
    It will show React repo issues only, but there is no keywords search filter and "total_count" response property is not available.
    Therefore, URL below is used instead. 
*/
const GITHUB_URL = process.env.GITHUB_URL || "https://api.github.com/search/issues";

//Accordingly to GitHub docs, for unauthenticated requests (no token), the rate limit allows for up to 60 requests per hour
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''; //Optional Github personal access token

const FILTER_REQUIRED = "Search filter is required."

module.exports = {
    GITHUB_URL,
    GITHUB_TOKEN,
    FILTER_REQUIRED
};