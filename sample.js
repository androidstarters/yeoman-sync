var each = require('async-each');
const yeomanSync = require('./lib/index.js');

let configs = [{
  destination: 'androidstarters-java',
  rename: [{
    dest: 'gitignore',
    src: '.gitignore'
  }, {
    dest: 'app/gitignore',
    src: 'app/.gitignore'
  }],
  replace: [{
    regex: 'io.mvpstarter.sample',
    replacement: '<%= appPackage %>'
  }],
  repo: {
    branchName: 'develop',
    url: 'https://github.com/androidstarters/android-starter.git'
  }
}, {
  destination: 'androidstarters-kotlin',
  rename: [{
    dest: 'gitignore',
    src: '.gitignore'
  }, {
    dest: 'app/gitignore',
    src: 'app/.gitignore'
  }],
  replace: [{
    regex: 'io.mvpstarter.sample',
    replacement: '<%= appPackage %>'
  }],
  repo: {
    branchName: 'develop',
    url: 'https://github.com/androidstarters/kotlin-android-starter.git'
  }
}];

each(configs, yeomanSync, function() {
  console.log('Contents for a, b and c:');
});