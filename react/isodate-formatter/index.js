import { formaInput, formatToRelativeTime, formatToFullDate, formatToShortDate } from "./utils/formatDate.js";

import chalk from "chalk";

console.log(chalk.green( formaInput("2023-01-01T12:34:56Z")));
console.log(chalk.yellow(formatToRelativeTime("2023-01-01T12:34:56Z")));
console.log(chalk.magenta(formatToFullDate("2023-01-01T12:34:56Z")));
console.log(chalk.cyan(formatToShortDate("2023-01-01T12:34:56Z")));