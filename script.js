const email = "arnold swartzenager@gmail.com";

const maskEmail = email => {
  const midIndex = email.indexOf("@");
  console.log(midIndex +  " (midIndex = index of @)");
  const firstPart = email.slice(0, midIndex);
  console.log(firstPart  +  " (firstPart = username)");
  const secondPart = email.slice(midIndex + 1, email.length);
  console.log(secondPart  +  " (secondPart = domain)");
}

maskEmail(email)
