/* global $ */

$.ajax({
  url: 'api/grades',
  method: 'GET',
  success: result => {
    // eslint-disable-next-line no-console
    console.log(result);
  },
  error: error => {
    // eslint-disable-next-line no-console
    console.error(error);
  }
});
