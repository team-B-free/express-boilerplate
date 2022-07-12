import statusCode from './../../utils/status-code.js';
import message from './../../utils/response-message.js';

const test = (req, res) => {
  // res.status(statusCode.OK).send(message.SUCCESS);
  res.status(200).send('Hello World!');
};

export default {
  test,
};
