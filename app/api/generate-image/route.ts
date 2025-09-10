/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse} from 'next/server'
import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY! })

export async function POST (req: NextRequest) {
    try {
        const { prompt, image, brand } = await req.json()

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required.'}, { status: 400 })
        }

        const systemPrompt = `
            You are a creative assistant responsible for generating branded visuals.
            Always follow the brand guidelines below with precision.

            [ BRAND IDENTITY ]
            - Brand Name: ${brand.name}
            - Category: ${brand.category}

            [ BRAND STYLE ]
            - Primary Color: ${brand.primaryColor}
            - Secondary Color: ${brand.secondaryColor}
            - Primary Font: ${brand.primaryFont}
            - Secondary Font: ${brand.secondaryFont}
            - General Look & Feel: Clean, modern, and consistent with the skincare industry.

            [ LOGO USAGE ]
            - Use this logo: ${brand.logo}
            - Placement: Bottom-right corner, sized proportionally (like a watermark).
            - Ensure logo is clear, unobstructed, and maintains its aspect ratio.

            [ OUTPUT REQUIREMENTS ]
            - Generated visuals MUST respect the brand's fonts, colors, and design principles.
            - Ensure consistency across images so they look like part of the same brand kit.
            - If unclear, prioritize elegance, minimalism, and skincare aesthetics.

            Now , Based on these settings, answer the user's prompt accordingly.
        `

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
                candidateCount: 3,
                systemInstruction: systemPrompt
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