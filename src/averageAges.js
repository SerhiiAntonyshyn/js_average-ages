'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  // write code here

  const menAge = people.filter(person => century ? person.sex === 'm'
  && Math.ceil(person.died / 100) === century : person.sex === 'm');
  const averageMenAge = menAge.map(b => b.died - b.born).reduce((sum, x) =>
    sum + x, 0) / menAge.length;

  return averageMenAge;
  // learn how to use array methods like .filter .map .some .every .find .reduce
  // avoid using loop and forEach
  // replace `if ()` statement with &&, || or ?:
  // without nesting
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average ave of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  // write code here

  const womenAgeWithChildren = people.filter(person => withChildren
    ? person.sex === 'f' && people.some(children =>
      children.mother === person.name) : person.sex === 'f');
  const averageWomenAgeWithChildren = womenAgeWithChildren.map(b =>
    b.died - b.born).reduce((sum, x) =>
    sum + x, 0) / womenAgeWithChildren.length;

  return averageWomenAgeWithChildren;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a mother and her
 * child in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for mothers who have son.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  // write code here
  const arrayOfParentAgeWhenChildBorn = people.filter(child => onlyWithSon
    ? people.some(mother => mother.name === child.mother && child.sex === 'm')
    : people.some(mother => mother.name === child.mother)).map((child) => {
    const mother = people.find(mothers => mothers.name === child.mother);

    return child.born - mother.born;
  });
  const averageParentAgeWhenChildBorn = arrayOfParentAgeWhenChildBorn
    .reduce((sum, x) => sum + x, 0) / arrayOfParentAgeWhenChildBorn.length;

  return averageParentAgeWhenChildBorn;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
