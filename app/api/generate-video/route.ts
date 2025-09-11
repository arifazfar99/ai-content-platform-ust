/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse} from 'next/server'
import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY! })

export async function POST(req: NextRequest) {
    const { prompt, imageBase64 } = await req.json();

    if (!prompt && !imageBase64) {
        return NextResponse.json({ error: "Prompt or image is required." }, { status: 400 });
    }

    try {
        let operation = await ai.models.generateVideos({
            model: 'veo-3.0-generate-preview',
            prompt: prompt,
            image: {
                imageBytes: imageBase64,
                mimeType: 'image/png' 
            },
            config: {
                numberOfVideos: 3,
                aspectRatio: '16:9',
                durationSeconds: 8,
            }
        })

        while (!operation.done) {
            await new Promise((resolve) => setTimeout(resolve, 10000))
            
            operation = await ai.operations.getVideosOperation({ operation: operation })
        }

        return NextResponse.json({ success: true, videos: operation.response?.generatedVideos });
    } catch (err: any) {
        console.error("Video generation error:", err);
        return NextResponse.json({ error: err.message || "Failed to generate video" }, { status: 500 });
    }
}