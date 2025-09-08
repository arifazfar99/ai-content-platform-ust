import { NextRequest, NextResponse} from 'next/server'
import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY! })

export async function POST(req: NextRequest){
    try {
        const { image, tone, objective, targetAudience, prompt } =  await req.json()

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required.'}, { status: 400 })
        }

        const systemPrompt = `
            You are an AI assistant that generates content with the following settings:
            - Tone ${tone}
            - Objective: ${objective}
            - Target audience: ${targetAudience}

            Now , Based on these settings, answer the user's prompt accordingly.
        `
        const contents: any[] = [{ text: prompt}]

        if (image) {
            contents.push({
                inlineData: {
                    mimeType: 'image/png',
                    data: image,
                }
            })
        }
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents,
            config: {
                systemInstruction: systemPrompt
            }
        })

        return NextResponse.json({ result: response })
    } catch (err: any) {
        console.error("Text generation error:", err);
        return NextResponse.json({ error: err.message || "Failed to generate text" }, { status: 500 });
    }
}