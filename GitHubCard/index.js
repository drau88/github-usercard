import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker ( { avatar_URL, login, location, html_url, followers, following, bio }) {
  // axios.get('https://api.github.com/users/drau88').catch(err => {console.error(err)}).finally(() => {console.log('I work')});
  //Creating markup
  const cardDiv = document.createElement('div'); //Main parent
  const userImg = document.createElement('img'); // Child to cardDiv
  const cardInfoDiv = document.createElement('div'); //Main child
  const cardInfoH3 = document.createElement('h3');
  const cardInfoUsername = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p'); //Parent to anchor
  const githubLink = document.createElement('a'); // Child to profile
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');
  //Adding classes
  cardDiv.classList.add('card');
  cardInfoH3.classList.add('name');
  cardInfoUsername.classList.add('username');
  //Adding structure to elements
  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(cardInfoH3);
  cardInfoDiv.appendChild(cardInfoUsername);
  cardInfoDiv.appendChild(userLocation);
  cardInfoDiv.appendChild(profile);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);
  profile.appendChild(githubLink);
  //Passing properties
  userImg.setAttribute('src', avatar_URL);
  cardInfoH3.textContent = 'Daniel Rau';
  cardInfoUsername.textContent = login;
  userLocation.textContent = `Location: ${location}`;
  profile.textContent = 'Profile:'
  githubLink.setAttribute('src', html_url);
  githubLink.textContent = html_url;
  followersP.textContent = `Followers: ${followers}`;
  followingP.textContent = `Following: ${following}`;
  bioP.textContent = `Bio: ${bio}`;

// Return main parent element
return cardDiv;
}
const entryPoint = document.querySelector('.cards')

const testCard = cardMaker({ avatar_URL : 'blah', login : 'blah', location : 'blah', html_url : 'blah', followers : 'blah', following : 'blah', bio : 'blah'});
console.log(testCard);

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
