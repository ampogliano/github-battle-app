function getErrorMsg(message, username) {
  if (message === 'Not Found') {
    return `${username} doesn't exist`
  }

  return message
}

function getProfile(username) {
  return fetch('api/profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'username': username })
  })
    .then(res => res.json())
    .then(profile => {
      if (profile.message) {
        throw new Error(getErrorMsg(profile.message, username))
      }

      return profile
    })
}

function getRepos(username) {
  return fetch('api/repos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'username': username })
  })
    .then(res => res.json())
    .then(repos => {
      if (repos.message) {
        throw new Error(getErrorMsg(repos.message, username))
      }

      return repos
    })
}

function getUserData(player) {
  return Promise.all([
    getProfile(player),
    getRepos(player)
  ])
    .then(([profile, repositories]) => ({
      profile,
      score: calculateScore(profile.followers, repositories)
    }))
}

function calculateScore(followers, repos) {
  return (followers * 3) + getStarCount(repos)
}

function getStarCount(repos) {
  return repos.reduce((count, { stargazers_count }) => {
    return count + stargazers_count
  }, 0)
}

function sortPlayers(players) {
  return players.sort((a, b) => {
    return b.score - a.score
  })
}

export function battle(players) {
  return Promise.all([
    getUserData(players[0]),
    getUserData(players[1])
  ])
    .then(results => sortPlayers(results))
}



export function FetchPopularRepos(language) {
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories `);

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        throw new Error(data.message)
      }

      return data.items
    })
}

