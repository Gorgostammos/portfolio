export function age(birthYear = 2002) {
  const now = new Date();
  return now.getFullYear() - birthYear;
}