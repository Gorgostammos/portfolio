export function age(birthYear = 2002) {
  const today = new Date();
  const birthday = new Date(birthYear, 2, 21); // sett faktisk fødselsdato
  const age = today.getFullYear() - birthYear;
  return today < new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
    ? age - 1
    : age;
}