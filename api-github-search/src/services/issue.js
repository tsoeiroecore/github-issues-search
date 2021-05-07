var constants = require('../config/constants');
const fetch = require('node-fetch');
const searchService = require('../services/search')();

module.exports = () => {
    const getIssues = async (searchText) => {
        //TODO: add cache
        //TODO: add pagination
        try {
            //Request to GitHub API
            let url = `${constants.GITHUB_URL}/search/issues?q=${searchText}+user:facebook+state:open&per_page=100&sort=created&order=desc`;

            var req = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    //TODO: uncomment below to use your Github personal access token
                    // 'Authorization': `Bearer ${constants.GITHUB_TOKEN}`,
                    'Content-Type': 'application/json'
                },
            })

            var res = await req.json();
            if (req.status === 200) {
                var result = mapResponse(res);
                await searchService.insertSearch({ query: searchText });
                return result;
            }

            throw new Error(res.message);

        } catch (err) {
            throw new Error("Something went wrong getting issues: " + err.message);
        }
    }

    function mapResponse(response) {
        return {
            items: response.items.map(v => {
                return {
                    title: v.title,
                    html_url: v.html_url,
                    labels: v.labels.map(o => {
                        return {
                            name: o.name
                        }
                    })
                }
            }),
            total_count: response.total_count
        }
    }

    return {
        getIssues
    }
}