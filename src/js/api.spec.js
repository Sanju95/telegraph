const APIRequest = require("./api");

describe("API", () => {
	it("should return comments", async () => {
		const res = await APIRequest(
			"https://my-json-server.typicode.com/telegraph/frontend-exercise/comments"
		);
		expect(res.length).toBeTruthy();
	});
});
