import { NextRequest, NextResponse} from 'next/server'
import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY! })

export async function POST (req: NextRequest) {
    try {
        const { prompt, image} = await req.json()

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required.'}, { status: 400 })
        }

        const contents: any[] = [{ text: prompt }]

        if (image) {
            contents.push({
                inlineData: {
                    mimeType: 'image/png',
                    data: image,
                }
            })
        }

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image-preview',
            contents,
            config: {
                candidateCount: 3
            }
        })

        const images: string[] = [];

        response.candidates?.forEach((candidate: any) => {
            candidate.content.parts.forEach((part: any) => {
                if (part.inlineData) {
                    images.push(`data:image/png;base64,${part.inlineData.data}`)
                }
            })
        })

        if (images.length === 0) {
            return NextResponse.json({ error: 'No Images returned.'}, { status: 500 })
        }

        return NextResponse.json({ images })
    } catch (err: any) {
        console.error("Image generation error:", err);
        return NextResponse.json({ error: err.message || "Failed to generate image" }, { status: 500 });
    }
}