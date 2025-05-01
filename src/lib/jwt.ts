import { SignJWT } from 'jose';

export async function generateJwtToken() {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_TOKEN);
    if (!secret) {
        throw new Error("SECRET_JWT_SECRET is not defined in environment variables.");
    }

    const alg = 'HS256';
    const jwt = await new SignJWT({})
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime('5m')
        .sign(secret);

    return jwt;
}
