const axios = require('axios');
const BASEPATH = "https://marvelapiwrapper.herokuapp.com";

exports.find = async () => {
  const path = `${BASEPATH}/characters`;

  const { data } = await axios(path);

  return data;
};

exports.findById = async id => {
  const path = `${BASEPATH}/characters/${id}`;

  const { data: [data] } = await axios(path);

  return data;
};

exports.search = async term => {
  const path = `${BASEPATH}/characters/search/${term}`;

  const { data } = await axios(path);

  return data;
};