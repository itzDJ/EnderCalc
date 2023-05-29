function tanDeg(deg) {
  // Converts degrees to radians and then calculates the tangent
  return Math.tan((deg * Math.PI) / 180);
}

function calculate(x1, z1, f1, x2, z2, f2) {
  // Converts the strings (from <TextInput/>) to numbers
  x1 = Number(x1);
  z1 = Number(z1);
  f1 = Number(f1);
  x2 = Number(x2);
  z2 = Number(z2);
  f2 = Number(f2);

  let z =
    (z1 * tanDeg(-f1) - z2 * tanDeg(-f2) - x1 + x2) /
    (tanDeg(-f1) - tanDeg(-f2));
  let x = (z - z1) * tanDeg(-f1) + x1;

  return `(${Math.round(x)}, ${Math.round(z)})`;
}

export default calculate;
