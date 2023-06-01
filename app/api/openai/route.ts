import { NextResponse } from "next/server";
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request, response: any) {
  try {
    const { title, role } = await request.json();

    const aiResponse = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            // Had to do a 3 liner because vercel deployement limits on free plan.
            content: `Create a three line blog post with html tags based on this title: ${title}` 
          },
          {
            role: "system",
            // These are the instructions system will follow when writing the response of the completion of the user's message.
            content: `${
              role || "I am a helpful assistant"
            }. Write with html tags.`,
          },
        ],
      });

    // response.revalidate("/api/posts")
    return NextResponse.json(
      {
        content: aiResponse.data.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error generating content" }, { status: 500 });
  }
}
