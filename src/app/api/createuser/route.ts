import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm"; // Import comparison operator

export async function POST(req: Request) {
    try {
        const { fid, signer_uuid, username, custody_address, image } = await req.json();

        // Check if user exists
        const user = await db
            .select()
            .from(users)
            .where(eq(users.fid, fid))
            .limit(1);

        if (user.length > 0) {
            return new Response(JSON.stringify(user[0]));
        }

        // Create a new user
        const createdUser = await db.insert(users).values({
            fid: fid,
            signer_uuid: signer_uuid,
            name: username,
            address: custody_address,
            image: image,
            createdAt: new Date(),
        });
        console.log("Created user:", createdUser);
        return new Response(JSON.stringify(createdUser));
    } catch (error) {
        console.error("Error processing request:", error);
        return new Response(
            JSON.stringify({ error: "Error processing request" }),
            { status: 500 }
        );
    }
}