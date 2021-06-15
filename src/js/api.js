export const APIRequest = async (path) => {
	const req = await fetch(path);
	const res = await req.json();
	return res;
};
