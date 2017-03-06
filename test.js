let course = require('./data/api/course/course.json');
let _ = require('underscore');

let st = 0;
let wd = 0;

_.each(course, function(co) {
  console.log(co.text);
  let content = co.content;
  _.each(content, function(chapter) {
    st = st + chapter.st;
    wd = wd + (parseInt(chapter.wd) || 0);
  })
})

console.log(st);
console.log(wd);
