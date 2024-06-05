const sanitizeHtml = require("sanitize-html");
const he = require("he");

export const cleanString = async (input: string) => {
  let noHtml = sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
  });

  let decodedString = he.decode(noHtml);

  let cleanString = decodedString.replace(/[\n\t\r]/g, " ");

  cleanString = cleanString.replace(/\s\s+/g, " ");

  return cleanString.trim();
};
