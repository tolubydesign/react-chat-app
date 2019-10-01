import { palette } from '../../MaterialStyling';

function createData(chats, users, securityType, colour, topic, message) {
  if (topic.toLowerCase() === "general") {
    colour = palette.cyan.main;
    console.log('g', palette.cyan.main)
  } else if (topic.toLowerCase() === "private") {
    console.log('p')
    colour = palette.purple.main;
  } else {
    colour = palette.grey.light;
  }

  return { chats, users, securityType, colour, topic, message, };
}

export const rows = [
  createData('New Chat Group', '6/8', 'Private', '#3bc5693', 'General', 'Consequat sit ullamco ullamco et sit exercitation.'),
  createData('New Chat Group', '6/8', 'Private', '#3bc5693', 'General', 'Consequat sit ullamco ullamco et sit exercitation.'),
  createData('New Chat Group', '6/8', 'Private', '#3bc5693', 'General', 'Consequat sit ullamco ullamco et sit exercitation.'),
  createData('New Chat Group', '6/8', 'Private', '#3bc5693', 'Private', 'Consequat sit ullamco ullamco et sit exercitation.'),
  createData('New Chat Group', '6/8', 'Private', '#3bc5693', 'Private', 'Consequat sit ullamco ullamco et sit exercitation.'),
  createData('New Chat Group', '6/8', 'Private', '#3bc5693', 'Private', 'Consequat sit ullamco ullamco et sit exercitation.'),
];


// Chats
// Users
// Type
// Topic
// Recent Message