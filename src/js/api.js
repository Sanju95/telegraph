const axios = require("axios");

const APIRequest = async (path) => {
	const res = await axios.get(path);
	return res.data;
};

module.exports = APIRequest;
