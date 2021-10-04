
/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (typeof date.getMonth !== 'function') {
    throw new Error("Invalid date!");
  }
  const month = date.getMonth();
  switch (true) {
    case month < 2 || month === 11:
      return 'winter';
    case month < 5:
      return 'spring';
    case month < 8:
      return 'summer';
    case month < 11:
      return 'autumn';
  }
}
