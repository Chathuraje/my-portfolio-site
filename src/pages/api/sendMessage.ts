import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { generateJwtToken } from '@/lib/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = process.env.N8N_FLOW_WEBHOOK_URL;

    if (!url) {
        return res.status(500).json({ error: 'N8N webhook URL is not defined in environment variables.' });
    }

    try {
        const token = await generateJwtToken();
        const response = await axios.post(url, req.body, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        // 4. Return successful response
        res.status(response.status).json(response.data);

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', {
                message: error.message,
                data: error.response?.data,
                status: error.response?.status,
            });

            return res.status(error.response?.status || 500).json({
                error: error.message,
                details: error.response?.data || 'No additional error details.',
            });
        } else {
            console.error('Unexpected Error:', error);
            return res.status(500).json({ error: 'Unexpected server error' });
        }
    }
}
