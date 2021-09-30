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

const entryPoint = document.querySelector('.cards');



function cardMaker (object){
  
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
  cardInfoDiv.appendChild(githubLink);
  cardInfoDiv.appendChild(userLocation);
  cardInfoDiv.appendChild(profile);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);
  
  //Passing properties
  userImg.setAttribute('src', object['data']['avatar_url']);
  cardInfoH3.textContent = 'Daniel Rau';
  cardInfoUsername.textContent = object.login;
  userLocation.textContent = `Location: ${object.data.location}`;
  profile.textContent = 'Profile:'
  githubLink.setAttribute('src', object.data.html_url);
  githubLink.textContent = object.data.html_url;
  followersP.textContent = `Followers: ${object.data.followers}`;
  followingP.textContent = `Following: ${object.data.following}`;
  bioP.textContent = `Bio: ${object.data.bio}`;

// Return main parent element
return cardDiv;
}

axios.get('https://api.github.com/users/drau88')
    .then( response => {
      console.log(response);
      const danielCard = cardMaker(response);
        entryPoint.appendChild(danielCard);
  
  })
    .catch(error => {
      console.log(error);
  })


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
