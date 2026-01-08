import userModel from "../models/usermodel.js";
import axios from "axios";

export const genImage = async (req, res) => {
    try {
        const { id, prompt } = req.body;

        if (!id || !prompt) {
            return res.status(400).json({ success: false, message: "missing id or prompt" });
        }

        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "user not found" });
        }

        if (!user.creditBalance || user.creditBalance <= 0) {
            return res.status(400).json({ success: false, message: "insufficient balance", creditBalance: user.creditBalance });
        }

        const payload = { prompt };

        let data;
        try {
            const resp = await axios.post(
                "https://clipdrop-api.co/text-to-image/v1",
                payload,
                {
                    headers: {
                        "x-api-key": process.env.CLIPDROP_API,
                        "Content-Type": "application/json",
                    },
                    responseType: "arraybuffer",
                }
            );
            data = resp.data;
        } catch (axiosErr) {
            console.error("Clipdrop error:", axiosErr.response ? axiosErr.response.status : axiosErr.message);
            if (axiosErr.response && axiosErr.response.data) {
                return res.status(axiosErr.response.status || 502).json({ success: false, message: "clipdrop error", details: axiosErr.response.data });
            }
            return res.status(502).json({ success: false, message: axiosErr.message });
        }

        const base64img = Buffer.from(data, "binary").toString("base64");
        const resultimg = `data:image/png;base64,${base64img}`;

        const updated = await userModel.findByIdAndUpdate(
            id,
            { creditBalance: user.creditBalance - 1 },
            { new: true }
        );

        return res.json({ success: true, message: "image generated successfully", creditBalance: updated.creditBalance, resultimg });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: err.message });
    }
};