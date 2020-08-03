export default function validateCreateLink(values) {
  let errors = {};

  //Description Errors
  if (!values.description) {
    errors.description = "A Description is required.";
  } else if (values.description.length < 10) {
    errors.description = "A Description must be of atleast 10 characters.";
  }

  //URL Errors
  if (!values.url) {
    errors.url = "A URL is required.";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "The URL Must be Valid.";
  }

  return errors;
}
