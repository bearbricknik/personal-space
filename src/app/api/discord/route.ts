import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 0;

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1456701589128745086/lFAqjajL1otuIueQlLZdWSzKB6JOeOka89moDFfbOJdgS5sZ1ZBWK6NF5xOEoSIvpYEQ';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const message = body.message || 'Hello, world!';

        // Send Discord webhook directly using fetch
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: message,
            }),
        });

        if (!response.ok) {
            throw new Error(`Discord webhook failed: ${response.statusText}`);
        }

        return NextResponse.json({
            success: true,
            message: 'Webhook sent successfully'
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                message: (error as Error).message
            },
            { status: 500, statusText: 'Internal Server Error' }
        );
    }
}