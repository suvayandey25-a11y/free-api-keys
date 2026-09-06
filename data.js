const apiKeysData = [
    {
        id: 1,
        name: "OpenAI GPT",
        category: "ai",
        description: "Access to GPT-3.5 and GPT-4 models with free tier",
        features: ["Text Generation", "Chat API", "Free Trial"],
        freeLimit: "3 months free trial",
        documentation: "https://platform.openai.com/docs",
        signup: "https://platform.openai.com/signup",
        logo: "🤖"
    },
    {
        id: 2,
        name: "Google Gemini",
        category: "ai",
        description: "Google's advanced AI model with generous free tier",
        features: ["Text & Image", "Multimodal", "Free API"],
        freeLimit: "60 requests/minute",
        documentation: "https://ai.google.dev/docs",
        signup: "https://ai.google.dev/",
        logo: "🔮"
    },
    {
        id: 3,
        name: "Anthropic Claude",
        category: "ai",
        description: "Claude AI model with constitutional AI training",
        features: ["Text Generation", "Analysis", "Free Trial"],
        freeLimit: "Usage-based pricing",
        documentation: "https://docs.anthropic.com",
        signup: "https://console.anthropic.com",
        logo: "🧠"
    },
    {
        id: 4,
        name: "Hugging Face",
        category: "ai",
        description: "Open-source models and free inference API",
        features: ["1000+ Models", "Free Inference", "Open Source"],
        freeLimit: "Unlimited requests",
        documentation: "https://huggingface.co/docs",
        signup: "https://huggingface.co/join",
        logo: "🤗"
    },
    {
        id: 5,
        name: "Cohere AI",
        category: "nlp",
        description: "Natural language processing models for production",
        features: ["NLP Models", "Free Trial", "Enterprise"],
        freeLimit: "5000 tokens/month",
        documentation: "https://docs.cohere.ai",
        signup: "https://dashboard.cohere.ai/",
        logo: "📝"
    },
    {
        id: 6,
        name: "DeepAI",
        category: "vision",
        description: "Computer vision and image generation APIs",
        features: ["Image Generation", "Style Transfer", "Free Tier"],
        freeLimit: "5 API calls/day free",
        documentation: "https://deepai.org/api-docs",
        signup: "https://deepai.org/",
        logo: "🎨"
    },
    {
        id: 7,
        name: "Stability AI",
        category: "vision",
        description: "Stable Diffusion and image generation models",
        features: ["Image Generation", "Inpainting", "Free Credits"],
        freeLimit: "50 free credits",
        documentation: "https://platform.stability.ai/docs",
        signup: "https://platform.stability.ai/",
        logo: "✨"
    },
    {
        id: 8,
        name: "Together AI",
        category: "ai",
        description: "Unified API for open-source language models",
        features: ["Open Models", "Low Cost", "Fast Inference"],
        freeLimit: "Free trial available",
        documentation: "https://docs.together.ai/",
        signup: "https://www.together.ai/",
        logo: "⚡"
    },
    {
        id: 9,
        name: "Replicate",
        category: "ai",
        description: "Run open-source models with a simple API",
        features: ["1000+ Models", "Simple API", "No Setup"],
        freeLimit: "Free trial credits",
        documentation: "https://replicate.com/docs",
        signup: "https://replicate.com/",
        logo: "🚀"
    },
    {
        id: 10,
        name: "MistralAI",
        category: "ai",
        description: "Efficient and powerful language models",
        features: ["Open Models", "Fast", "Cost-Effective"],
        freeLimit: "Free trial available",
        documentation: "https://docs.mistral.ai/",
        signup: "https://console.mistral.ai/",
        logo: "🌪️"
    },
    {
        id: 11,
        name: "Perplexity AI",
        category: "nlp",
        description: "AI-powered search and question answering",
        features: ["Web Search", "Real-time", "Q&A"],
        freeLimit: "5 free searches/month",
        documentation: "https://www.perplexity.ai/api",
        signup: "https://www.perplexity.ai/",
        logo: "🔍"
    },
    {
        id: 12,
        name: "ElevenLabs",
        category: "other",
        description: "Text-to-speech with natural-sounding voices",
        features: ["TTS", "Voice Cloning", "Multilingual"],
        freeLimit: "10,000 characters/month",
        documentation: "https://elevenlabs.io/docs",
        signup: "https://elevenlabs.io/",
        logo: "🎤"
    },
    {
        id: 13,
        name: "AssemblyAI",
        category: "nlp",
        description: "Speech-to-text and audio understanding",
        features: ["ASR", "Sentiment Analysis", "Entity Detection"],
        freeLimit: "$50 free credit",
        documentation: "https://www.assemblyai.com/docs",
        signup: "https://www.assemblyai.com/",
        logo: "🎙️"
    },
    {
        id: 14,
        name: "Clarifai",
        category: "vision",
        description: "AI for visual recognition and classification",
        features: ["Image Recognition", "Video Analysis", "Custom Models"],
        freeLimit: "1000 API calls/month",
        documentation: "https://docs.clarifai.com/",
        signup: "https://clarifai.com/",
        logo: "👁️"
    },
    {
        id: 15,
        name: "LangChain",
        category: "ai",
        description: "Framework for building AI applications",
        features: ["LLM Framework", "Open Source", "Integrations"],
        freeLimit: "Open Source",
        documentation: "https://python.langchain.com/",
        signup: "https://github.com/langchain-ai/langchain",
        logo: "🔗"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = apiKeysData;
}