
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generatePlan = async (userProfile: string): Promise<string> => {
  const model = 'gemini-2.5-pro';

  const prompt = `
You are an expert "No-Code App Development Mentor" AI.
Your user has a great idea for an app but has ZERO CODING KNOWLEDGE.
Your goal is to provide a creative, actionable, and detailed step-by-step plan for building an application and launching it on the Google Play Store using NO-CODE platforms and tools.

User's App Idea:
- ${userProfile || 'A simple utility app, like a flashlight or calculator.'}

Generate the plan with the following structure. Use simple markdown-like formatting as specified.
- For each phase, use a heading like: **Phase 1: Ideation & Planning**
- For list items, start the line with: * (a single asterisk followed by a space)
- Do not use any other markdown syntax.

The plan must include six distinct phases, all from a no-code perspective:
1.  **Phase 1: Ideation & Planning**: Focus on market research, defining core features (MVP), and **choosing the right No-Code Platform** (e.g., Bubble, Adalo, Glide, FlutterFlow).
2.  **Phase 2: Design & Prototyping (UI/UX)**: Focus on user flow, wireframing (with tools like Figma), and designing mockups that can be visually built in a no-code tool.
3.  **Phase 3: No-Code Build & Testing**: Focus on using the chosen platform's visual editor to build the app, setting up the database with their tools, creating logic with workflows (not code), and testing thoroughly.
4.  **Phase 4: Pre-Launch Preparations**: Focus on creating a landing page, preparing store listing assets (icon, screenshots, description), and beta testing with a small group of users.
5.  **Phase 5: Launch on Google Play**: Focus on setting up a Google Play Developer account, **generating the app package (APK/AAB) from the no-code platform**, creating the listing, and submitting for review.
6.  **Phase 6: Post-Launch & Growth**: Focus on gathering user feedback, planning future updates using the no-code tool, marketing the app, and exploring monetization.

For each phase, provide specific, actionable steps and expert advice for a non-technical person. The tone must be encouraging, clear, and empowering. End with a concluding motivational paragraph about how no-code has democratized app development.
`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    throw new Error("Failed to communicate with the Gemini API.");
  }
};
