const cannonsReady = (gunners) => {
  arr = Object.values(gunners);
  if (arr.includes("nay")) {
    return "Shiver me timbers!";
  }
  return "Fire!";
};
