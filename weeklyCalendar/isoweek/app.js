const getISOWeekNumber = (date) => {
  let d = new Date(date.getTime());
  let dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

// Function to add days to a date
const addDays = (date, days) => {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
};

// Define start and end dates
let startDate = new Date(Date.UTC(2021, 11, 20)); // Month is 0-indexed (11 = December)
let endDate = new Date(Date.UTC(2027, 0, 2)); // Month is 0-indexed (0 = January)

// Loop from start date to end date
for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
  // Calculate the ISO week number for a date considered as the next day
  let calculationDate = addDays(date, 1); // This date is used for calculation
  console.log(
    `${date.toISOString().split("T")[0]} ISO Week Number: ${getISOWeekNumber(
      calculationDate
    )}`
  );
}
