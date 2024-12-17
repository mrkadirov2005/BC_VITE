import { createAsyncThunk } from "@reduxjs/toolkit";

export const getVipsData = createAsyncThunk("super_admin/get_vips_data", async (token) => {
	try {
		const response = await fetch("http://localhost:7000/super_admin/get_vips", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ token }),
		}).then(item=>item.json()).then(item=>item);
        return response;
	} catch (error) {
		throw new Error(`${error}`)
	}
});
