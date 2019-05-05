/*function booWho(bool) {
 return (bool === true || bool === false)
}
booWho(true);*/

function booWho(bool) {
 return typeof bool === 'boolean';
}
booWho(null);
