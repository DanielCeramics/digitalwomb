
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


document.addEventListener('DOMContentLoaded', () => {
  const friends = document.getElementsByClassName("friend");

  var friendidbank = [];
  const viewport = document.getElementById("viewportimage");

  for (i=0; i<friends.length; i++) {
    var friendid = [];
    friendid.push(friends[i].innerText);
    friendidbank.push(friendid);
    friends[i].onmouseover = function () {
      var currentname = this.innerText;
      for (i=0; i<gifids.length; i++) {
        console.log(gifids[i].name);
        console.log(currentname);
        if (currentname == gifids[i].name) {
          viewport.src = gifids[i].gif;
        }
      }
    };
  }
});
