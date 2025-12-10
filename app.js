
const gifids = [

  {
    name: 'Quinn',
    gif: 'static/gifs/OGIF_quinn.gif'
  },
  {
    name: 'Deadly Kill',
    gif: 'static/gifs/OGIF_dk.gif'
  },
  {
    name: 'Cinnabar',
    gif: 'static/gifs/OGIF_cinn.gif'
  },
  {
    name: 'Rye',
    gif: 'static/gifs/OGIF_rye.gif'
  },
  {
    name: 'Martin',
    gif: 'static/gifs/OGIF_martin.gif'
  },
  {
    name: 'Jasmine',
    gif: 'static/gifs/OGIF_jazz.gif'
  },
]

const namegarden = [
  {
    name: 'Rosemary',
    image: 'static/names/Rosemary_Name.png'
  },
  {
    name: 'Ladylike',
    image: 'static/names/Ladylike_Name.png'
  },
  {
    name: 'Eleanor',
    image: 'static/names/Eleanor_Name.png'
  },
  {
    name: 'Ne',
    image: 'static/names/Ne_Name.png'
  },
  {
    name: 'Star',
    image: 'static/names/Star_Name.png'
  },
  {
    name: 'Jazz',
    image: 'static/names/Jazz_Name.png'
  },
]

document.addEventListener('DOMContentLoaded', () => {
  const friends = document.getElementsByClassName("friend");
  const names = document.getElementsByClassName("name");

  var friendidbank = [];
  const viewport = document.getElementById("viewportimage");
  const displayname = document.getElementById("displayname");


  for (i=0; i<friends.length; i++) {
    var friendid = [];
    friendid.push(friends[i].innerText);
    friendidbank.push(friendid);
    friends[i].onmouseover = function () {
      var currentfriend = this.innerText;
      for (i=0; i<gifids.length; i++) {
        console.log(gifids[i].name);
        console.log(currentfriend);
        if (currentfriend == gifids[i].name) {
          viewport.src = gifids[i].gif;
        }
      }
    };
  }

  for (i=0; i<names.length; i++) {
    names[i].onmouseover = function () {
      var currentname = this.id;
      console.log(currentname);
      for (i=0; i<namegarden.length; i++) {
        if (currentname == namegarden[i].name) {
          displayname.src = namegarden[i].image;
        }
      }
    };
  }
});
