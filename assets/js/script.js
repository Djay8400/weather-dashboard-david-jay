// var repoList = document.querySelector('ul');
// var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   // replace `octocat` with anyone else's GitHub username
//   var requestUrl = 'https://api.github.com/users/octocat/repos';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);

// fetch('https://api.github.com/orgs/twitter/public_members')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Twitter Public Members: Raw data \n----------');
//     console.log(data);
//   });

// fetch('https://api.github.com/orgs/twitter/repos')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Twitter Repositories: Names only \n----------');
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i].name);
//     }
//   });