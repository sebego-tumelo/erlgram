import { serialize } from "cookie";
import { FaunaFunctions } from "../../../apiFunctions/FaunaFunctions";
import { SignUpData } from "../../../lib/ts/interfaces";

export default async (request, response) => {
	const faunaKey = process.env.FAUNA_ADMIN_KEY;
	const userData: SignUpData = request.body["SignUpData"];
	const faunaDb = new FaunaFunctions(faunaKey);

	await faunaDb
		.signUp(userData)
		.then((apiResponse) => {
			if (apiResponse === "apiError") {
				response.status(300).send(JSON.stringify({ apiResponse: apiResponse }));
			} else {
				response.setHeader("Set-Cookie", [
					serialize("FID", apiResponse["authToken"], {
						path: "/",
						httpOnly: true,
						maxAge: 60 * 60 * 24 * 7,
					}),
					serialize("FMAIL", userData.data.account.userEmail, {
						path: "/",
						httpOnly: true,
						maxAge: 60 * 60 * 24 * 7,
					}),
				]);
				response.send(
					JSON.stringify({ apiResponse: apiResponse["userAccount"] })
				);
			}
		})
		.catch((apiError) => response.status(500).json(apiError));
};
