function groupAdultsByAgeRange(array) {
  // Filters out the underaged.
  const adults = array.filter(person => person.age >= 18);



  // Splits the array into five arrays, one for each age group.
  const under21Array = adults.filter(person => person.age <= 20);
  const ages21to30Array = adults.filter(
    person => 21 <= person.age && person.age <= 30
  );
  const ages31to40Array = adults.filter(
    person => 31 <= person.age && person.age <= 40
  );
  const ages41to50Array = adults.filter(
    person => 41 <= person.age && person.age <= 50
  );
  const over50Array = adults.filter(person => 51 <= person.age);

  // Creates an object for each age group. Each object looks like {under21: [person1, person2]}
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

  //Puts all the objects into an array, then filters on that array to get rid of empty age groups.
  const groupedByAge = [under21, ages21to30, ages31to40, ages41to50, over50];
  const groupedByAgeWithoutEmpties = groupedByAge.filter(group => {
    const key = Object.keys(group)[0];  
    return group[key].length > 0;
  });

  //Turns the array into the wanted object, and returns it.
  return groupedByAgeWithoutEmpties.reduce((object, ageGroup) => {
    object[Object.keys(ageGroup)[0]] = ageGroup[Object.keys(ageGroup)[0]];
    return object;
  }, {});
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
