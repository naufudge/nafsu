import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET(request) {
    const file = await fs.readFile(process.cwd() + '/public/doctors-updated.json', 'utf8');
    const data = JSON.parse(file);

    return NextResponse.json({
        message: "success",
        success: true,
        doctors: data
    })
}