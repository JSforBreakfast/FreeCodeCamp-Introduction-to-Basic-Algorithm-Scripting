function truncateString(str, num) {
  if(num >= str.length) return str;
  if (num <= str.length) return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

console.log(truncateString);
