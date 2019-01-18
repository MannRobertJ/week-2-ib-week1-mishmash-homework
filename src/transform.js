function groupAdultsByAgeRange(array) {
  const filtered = array.filter(person => person.age >= 18);

  if (filtered.length === 0) {
    return {};
  }

  const under21Array = filtered.filter(person => person.age <= 20);
  const ages21to30Array = filtered.filter(person => 21 <= person.age && person.age <= 30);
  const ages31to40Array = filtered.filter(person => 31 <= person.age && person.age <= 40);
  const ages41to50Array = filtered.filter(person => 41 <= person.age && person.age <= 50);
  const over50Array = filtered.filter(person => 51 <= person.age);


  const under21 = under21Array.reduce(
    (object, person) => {
      object["20 and younger"].push(person);
      return object;
    },
    { "20 and younger": [] }
  );
  const ages21to30 = ages21to30Array.reduce(
    (object, person) => {
      object["21-30"].push(person);
      return object;
    },
    { "21-30": [] }
  );
  const ages31to40 = ages31to40Array.reduce(
    (object, person) => {
      object["31-40"].push(person);
      return object;
    },
    { "31-40": [] }
  );
  const ages41to50 = ages41to50Array.reduce(
    (object, person) => {
      object["41-50"].push(person);
      return object;
    },
    { "41-50": [] }
  );
  const over50 = over50Array.reduce(
    (object, person) => {
      object["51 and older"].push(person);
      return object;
    },
    { "51 and older": [] }
  );
  const groupedByAge = [under21, ages21to30, ages31to40, ages41to50, over50]
  const groupedByAgeWithoutEmpties = groupedByAge.filter(group => group[0]);
  return groupedByAgeWithoutEmpties
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;

array = [{name: "Anna", age: 31}, {name: "John", age: 32}, {name: "Hank", age: 60}]

console.log(groupAdultsByAgeRange(array));

