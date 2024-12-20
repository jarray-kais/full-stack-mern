import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);

// Function 1: Format ISO date to "January 1, 2023, 12:34:56 PM UTC"
const formaInput = (isoDate) => dayjs(isoDate).format("MMM D, YYYY h:mm A");
// Function 2: Format date to "4 months ago"
const formatToRelativeTime = (isoDate) => dayjs(isoDate).fromNow();

// Function 3: Format date to "Thursday, January 21, 2023"
const formatToFullDate = (isoDate) =>
  dayjs(isoDate).format("dddd, MMMM D, YYYY");

// Function 4: Format date to "01/21/2023"
const formatToShortDate = (isoDate) => dayjs(isoDate).format("MM/DD/YYYY");

export { formaInput, formatToRelativeTime, formatToFullDate, formatToShortDate };
