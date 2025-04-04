import { prevUser } from "./context/UserContext";


export async function query() {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
		{
			headers: {
				Authorization: "Bearer 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",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ "inputs": prevUser.prompt }),
		}
	);
	const result = await response.blob();
	return result;
}

