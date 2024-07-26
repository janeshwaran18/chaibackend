require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "janeshwaran18",
    "id": 87006151,
    "node_id": "MDQ6VXNlcjg3MDA2MTUx",
    "avatar_url": "https://avatars.githubusercontent.com/u/87006151?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/janeshwaran18",
    "html_url": "https://github.com/janeshwaran18",
    "followers_url": "https://api.github.com/users/janeshwaran18/followers",
    "following_url": "https://api.github.com/users/janeshwaran18/following{/other_user}",
    "gists_url": "https://api.github.com/users/janeshwaran18/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/janeshwaran18/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/janeshwaran18/subscriptions",
    "organizations_url": "https://api.github.com/users/janeshwaran18/orgs",
    "repos_url": "https://api.github.com/users/janeshwaran18/repos",
    "events_url": "https://api.github.com/users/janeshwaran18/events{/privacy}",
    "received_events_url": "https://api.github.com/users/janeshwaran18/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 1,
    "following": 3,
    "created_at": "2021-07-06T07:42:37Z",
    "updated_at": "2024-07-26T05:45:05Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('JJaneshwaran')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.get('/youtube', (req,res) => {
    res.send("<h2>chai aur code</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})