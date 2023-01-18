function getCommonDirectoryPath(pathes) {
  function sameCharExists(idx) {
    for (path of pathes) {
      if (!(path[idx] === pathes[0][idx])) return false;
    }
    return true;
  }

  let endpoint;
  
  for (let idx = 0; idx < pathes[0].length; idx++) {
    if (sameCharExists(idx)) {
      if (pathes[0][idx] === '/') endpoint = idx;
    } else {
      break;
    }
  }

  return endpoint !== undefined ? pathes[0].slice(0, endpoint + 1) : '';
}

let pathArr = [
  ['/web/images/image1.png', '/web/images/image2.png'],
  ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'],
  ['/web/assets/style.css', '/.bin/mocha',  '/read.me'],
  ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs']
];

for (pathes of pathArr) {
  console.log(getCommonDirectoryPath(pathes));
}

// '/web/images/'
// ''
// '/'
// '/'