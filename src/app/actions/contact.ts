"use server";

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function submitToNotion(formData: { name: string; email: string; message: string }) {
    if (!databaseId) {
        throw new Error("NOTION_DATABASE_ID is not set in environment variables.");
    }

    try {
        await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: formData.name,
                            },
                        },
                    ],
                },
                Email: {
                    email: formData.email,
                },
                Message: {
                    rich_text: [
                        {
                            text: {
                                content: formData.message,
                            },
                        },
                    ],
                },
            },
        });
        return { success: true };
    } catch (error: any) {
        console.error("Full Notion Error:", error);

        // Return a more descriptive error if possible
        const errorMessage = error?.body?.message || error?.message || "Failed to send message.";
        return {
            success: false,
            error: `Notion Error: ${errorMessage}`
        };
    }
}
