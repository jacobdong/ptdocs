var crypto = require('crypto');
var content = 'password';

var md5 = crypto.createHash('md5');

md5.update(content);
var md5content = md5.digest('hex');

console.log(content);
console.log(md5content);