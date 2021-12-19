function wallpaper(l, w, h) {
  if (l === 0 || w === 0 || h === 0) {
    return "zero";
  }
  return numbers[Math.ceil(((l * h * 2 + w * h * 2) * 1.15) / (0.52 * 10))];
}
