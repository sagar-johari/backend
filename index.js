require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

const github_data = {
  "login": "sagar-johari",
  "id": 77771075,
  "node_id": "MDQ6VXNlcjc3NzcxMDc1",
  "avatar_url": "https://avatars.githubusercontent.com/u/77771075?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sagar-johari",
  "html_url": "https://github.com/sagar-johari",
  "followers_url": "https://api.github.com/users/sagar-johari/followers",
  "following_url": "https://api.github.com/users/sagar-johari/following{/other_user}",
  "gists_url": "https://api.github.com/users/sagar-johari/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sagar-johari/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sagar-johari/subscriptions",
  "organizations_url": "https://api.github.com/users/sagar-johari/orgs",
  "repos_url": "https://api.github.com/users/sagar-johari/repos",
  "events_url": "https://api.github.com/users/sagar-johari/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sagar-johari/received_events",
  "type": "User",
  "user_view_type": "public",
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
  "followers": 0,
  "following": 0,
  "created_at": "2021-01-21T06:10:38Z",
  "updated_at": "2024-12-07T09:11:52Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/yt',(req,res)=>{
    res.send("<h1>Youtube</h1>");
})

app.get('/github',(req,res)=>{
  res.json(github_data);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
