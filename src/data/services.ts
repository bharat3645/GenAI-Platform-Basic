import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'openai-gpt-4',
    name: 'GPT-4 Turbo',
    description: 'OpenAI\'s most advanced language model with 128K context window, superior reasoning capabilities, and multimodal understanding. Ideal for complex text generation, analysis, and conversational AI applications.',
    category: 'Natural Language Processing',
    pricing: 'paid',
    tags: ['GPT-4', 'Large Language Model', 'Conversational AI', 'Text Generation', 'Code Generation'],
    capabilities: [
      'Advanced reasoning and problem-solving',
      '128K token context window',
      'Multimodal input (text and images)',
      'Function calling and tool use',
      'JSON mode for structured outputs',
      'Reproducible outputs with seed parameter'
    ],
    documentation: 'Comprehensive API documentation with rate limits, best practices, and integration guides. Includes examples for chat completions, function calling, and vision capabilities.',
    apiEndpoint: 'https://api.openai.com/v1/chat/completions',
    status: 'active',
    version: '4.0-turbo',
    lastUpdated: '2024-01-20',
    usage: {
      requests: 45200000,
      uptime: 99.95
    },
    codeExample: `import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4-turbo-preview",
  messages: [
    {
      "role": "system", 
      "content": "You are a helpful assistant."
    },
    {
      "role": "user", 
      "content": "Explain quantum computing in simple terms"
    }
  ],
  max_tokens: 500,
  temperature: 0.7
});

console.log(completion.choices[0].message.content);`,
    features: [
      { name: 'Function Calling', description: 'Call external functions and APIs with structured responses', available: true },
      { name: 'Vision Capabilities', description: 'Analyze and understand images alongside text', available: true },
      { name: 'JSON Mode', description: 'Guaranteed valid JSON responses for structured data', available: true },
      { name: 'Reproducible Outputs', description: 'Use seed parameter for consistent responses', available: true },
      { name: 'Fine-tuning', description: 'Custom model training on your data', available: false }
    ]
  },
  {
    id: 'anthropic-claude-3',
    name: 'Claude 3 Opus',
    description: 'Anthropic\'s most powerful AI model with exceptional reasoning, analysis, and creative capabilities. Features a 200K context window and strong safety measures for enterprise applications.',
    category: 'Natural Language Processing',
    pricing: 'paid',
    tags: ['Claude', 'Constitutional AI', 'Safety', 'Analysis', 'Creative Writing'],
    capabilities: [
      'Advanced reasoning and analysis',
      '200K token context window',
      'Constitutional AI safety training',
      'Excellent creative writing abilities',
      'Strong mathematical reasoning',
      'Multilingual support (12+ languages)'
    ],
    documentation: 'Enterprise-grade documentation with safety guidelines, prompt engineering best practices, and integration patterns for production systems.',
    apiEndpoint: 'https://api.anthropic.com/v1/messages',
    status: 'active',
    version: '3.0',
    lastUpdated: '2024-01-18',
    usage: {
      requests: 28500000,
      uptime: 99.92
    },
    codeExample: `import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const message = await anthropic.messages.create({
  model: "claude-3-opus-20240229",
  max_tokens: 1000,
  temperature: 0.7,
  messages: [
    {
      "role": "user",
      "content": "Analyze the potential risks and benefits of implementing AI in healthcare systems."
    }
  ]
});

console.log(message.content[0].text);`,
    features: [
      { name: 'Constitutional AI', description: 'Built-in safety and alignment training', available: true },
      { name: 'Long Context', description: '200K token context for large documents', available: true },
      { name: 'Vision Analysis', description: 'Image understanding and analysis capabilities', available: true },
      { name: 'Tool Use', description: 'Function calling and external tool integration', available: true },
      { name: 'Custom Training', description: 'Fine-tuning on enterprise data', available: false }
    ]
  },
  {
    id: 'google-gemini-pro',
    name: 'Gemini Pro',
    description: 'Google\'s advanced multimodal AI model with native understanding of text, images, audio, and video. Optimized for complex reasoning tasks and real-time applications.',
    category: 'Natural Language Processing',
    pricing: 'freemium',
    tags: ['Gemini', 'Multimodal', 'Google AI', 'Real-time', 'Vision'],
    capabilities: [
      'Native multimodal understanding',
      'Real-time streaming responses',
      'Advanced code generation',
      'Mathematical problem solving',
      'Video and audio analysis',
      'Integration with Google services'
    ],
    documentation: 'Comprehensive guides for multimodal applications, streaming implementations, and Google Cloud integration patterns.',
    apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro',
    status: 'active',
    version: '1.0-pro',
    lastUpdated: '2024-01-22',
    usage: {
      requests: 67800000,
      uptime: 99.89
    },
    codeExample: `import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const prompt = "Explain the concept of machine learning to a 10-year-old";

const result = await model.generateContent(prompt);
const response = await result.response;
const text = response.text();

console.log(text);

// For multimodal with images
const visionModel = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
const imagePart = {
  inlineData: {
    data: base64Image,
    mimeType: "image/jpeg"
  }
};

const multimodalResult = await visionModel.generateContent([
  "What's in this image?", 
  imagePart
]);`,
    features: [
      { name: 'Multimodal Input', description: 'Process text, images, audio, and video together', available: true },
      { name: 'Streaming Responses', description: 'Real-time token streaming for better UX', available: true },
      { name: 'Code Execution', description: 'Run and debug code within the model', available: true },
      { name: 'Google Integration', description: 'Native integration with Google Workspace', available: true },
      { name: 'Custom Models', description: 'Fine-tune models on your specific data', available: false }
    ]
  },
  {
    id: 'azure-computer-vision',
    name: 'Azure Computer Vision',
    description: 'Microsoft\'s enterprise-grade computer vision service with OCR, object detection, facial recognition, and spatial analysis. Includes industry-specific models for retail, manufacturing, and healthcare.',
    category: 'Computer Vision',
    pricing: 'paid',
    tags: ['Microsoft Azure', 'OCR', 'Object Detection', 'Facial Recognition', 'Enterprise'],
    capabilities: [
      'Advanced OCR with 164 languages',
      'Real-time object and scene detection',
      'Facial recognition and emotion analysis',
      'Spatial analysis for retail insights',
      'Custom model training and deployment',
      'GDPR and HIPAA compliance'
    ],
    documentation: 'Enterprise documentation with compliance guides, SDK references, and industry-specific implementation examples.',
    apiEndpoint: 'https://westus.api.cognitive.microsoft.com/vision/v3.2',
    status: 'active',
    version: '3.2',
    lastUpdated: '2024-01-15',
    usage: {
      requests: 34600000,
      uptime: 99.97
    },
    codeExample: `import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";

const key = process.env.AZURE_COMPUTER_VISION_KEY;
const endpoint = process.env.AZURE_COMPUTER_VISION_ENDPOINT;

const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }),
  endpoint
);

// Analyze image
const analysis = await computerVisionClient.analyzeImage(
  "https://example.com/image.jpg",
  {
    visualFeatures: [
      "Categories", "Description", "Faces", "Objects", "Tags"
    ]
  }
);

console.log("Image analysis:", analysis);

// OCR text extraction
const ocrResult = await computerVisionClient.read(
  "https://example.com/document.jpg"
);

console.log("Extracted text:", ocrResult);`,
    features: [
      { name: 'Multi-language OCR', description: 'Text extraction in 164 languages', available: true },
      { name: 'Custom Models', description: 'Train models on your specific use cases', available: true },
      { name: 'Real-time Analysis', description: 'Process video streams in real-time', available: true },
      { name: 'Compliance Ready', description: 'GDPR, HIPAA, and SOC 2 compliant', available: true },
      { name: 'Edge Deployment', description: 'Deploy models to IoT and edge devices', available: true }
    ]
  },
  {
    id: 'aws-polly',
    name: 'Amazon Polly',
    description: 'AWS\'s neural text-to-speech service with lifelike voices in 60+ languages. Features SSML support, custom lexicons, and real-time streaming for scalable voice applications.',
    category: 'Speech & Audio',
    pricing: 'paid',
    tags: ['AWS', 'Text-to-Speech', 'Neural Voices', 'SSML', 'Streaming'],
    capabilities: [
      'Neural TTS in 60+ languages',
      'Real-time audio streaming',
      'SSML markup support',
      'Custom pronunciation lexicons',
      'Voice cloning and customization',
      'Scalable cloud infrastructure'
    ],
    documentation: 'AWS documentation with SDK examples, SSML reference, voice samples, and architecture patterns for high-scale applications.',
    apiEndpoint: 'https://polly.us-east-1.amazonaws.com',
    status: 'active',
    version: '2016-06-10',
    lastUpdated: '2024-01-19',
    usage: {
      requests: 89200000,
      uptime: 99.99
    },
    codeExample: `import AWS from 'aws-sdk';

const polly = new AWS.Polly({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const params = {
  Text: '<speak>Hello! <break time="1s"/> Welcome to our <emphasis level="strong">amazing</emphasis> platform!</speak>',
  OutputFormat: 'mp3',
  VoiceId: 'Joanna',
  Engine: 'neural',
  TextType: 'ssml'
};

polly.synthesizeSpeech(params, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    // data.AudioStream contains the audio
    const audioBlob = new Blob([data.AudioStream], { type: 'audio/mpeg' });
    const audioUrl = URL.createObjectURL(audioBlob);
    
    const audio = new Audio(audioUrl);
    audio.play();
  }
});

// Streaming synthesis for real-time applications
const streamParams = {
  Text: 'This is streaming text-to-speech synthesis.',
  OutputFormat: 'pcm',
  VoiceId: 'Matthew',
  Engine: 'neural'
};

const stream = polly.synthesizeSpeech(streamParams).createReadStream();`,
    features: [
      { name: 'Neural Voices', description: 'High-quality neural voice synthesis', available: true },
      { name: 'Real-time Streaming', description: 'Stream audio as it\'s generated', available: true },
      { name: 'Voice Customization', description: 'Create custom brand voices', available: true },
      { name: 'SSML Support', description: 'Advanced speech markup language', available: true },
      { name: 'Batch Processing', description: 'Process large text volumes efficiently', available: true }
    ]
  },
  {
    id: 'huggingface-transformers',
    name: 'Hugging Face Inference API',
    description: 'Access to 200,000+ pre-trained models including BERT, RoBERTa, T5, and custom fine-tuned models. Serverless inference with automatic scaling and model versioning.',
    category: 'Machine Learning',
    pricing: 'freemium',
    tags: ['Hugging Face', 'Transformers', 'BERT', 'Open Source', 'Fine-tuning'],
    capabilities: [
      'Access to 200,000+ models',
      'Automatic model scaling',
      'Custom model deployment',
      'Multi-framework support',
      'Version control and rollback',
      'Community model sharing'
    ],
    documentation: 'Open-source documentation with model cards, fine-tuning guides, and community examples across NLP, computer vision, and audio tasks.',
    apiEndpoint: 'https://api-inference.huggingface.co/models',
    status: 'active',
    version: '4.36.0',
    lastUpdated: '2024-01-21',
    usage: {
      requests: 156000000,
      uptime: 99.85
    },
    codeExample: `import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Text classification
const classificationResult = await hf.textClassification({
  model: 'cardiffnlp/twitter-roberta-base-sentiment-latest',
  inputs: 'I love this new AI platform! It works amazingly well.'
});

console.log('Sentiment:', classificationResult);

// Text generation
const generationResult = await hf.textGeneration({
  model: 'microsoft/DialoGPT-medium',
  inputs: 'The future of AI is',
  parameters: {
    max_new_tokens: 100,
    temperature: 0.7
  }
});

console.log('Generated text:', generationResult.generated_text);

// Question answering
const qaResult = await hf.questionAnswering({
  model: 'deepset/roberta-base-squad2',
  inputs: {
    question: 'What is machine learning?',
    context: 'Machine learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed.'
  }
});

console.log('Answer:', qaResult.answer);`,
    features: [
      { name: 'Model Hub Access', description: 'Access to 200,000+ pre-trained models', available: true },
      { name: 'Custom Deployment', description: 'Deploy your own fine-tuned models', available: true },
      { name: 'Auto Scaling', description: 'Automatic scaling based on demand', available: true },
      { name: 'Model Versioning', description: 'Version control and model rollback', available: true },
      { name: 'Private Models', description: 'Deploy private models for enterprise use', available: true }
    ]
  },
  {
    id: 'cohere-embed',
    name: 'Cohere Embed',
    description: 'Enterprise-grade text embeddings optimized for semantic search, classification, and clustering. Supports 100+ languages with domain-specific fine-tuning capabilities.',
    category: 'Natural Language Processing',
    pricing: 'paid',
    tags: ['Embeddings', 'Semantic Search', 'Multilingual', 'Enterprise', 'RAG'],
    capabilities: [
      'Multilingual embeddings (100+ languages)',
      'Domain-specific fine-tuning',
      'Semantic search optimization',
      'Batch processing support',
      'Enterprise security and compliance',
      'RAG (Retrieval Augmented Generation) ready'
    ],
    documentation: 'Enterprise documentation with embedding best practices, fine-tuning guides, and integration patterns for search and recommendation systems.',
    apiEndpoint: 'https://api.cohere.ai/v1/embed',
    status: 'active',
    version: '3.0',
    lastUpdated: '2024-01-17',
    usage: {
      requests: 78900000,
      uptime: 99.94
    },
    codeExample: `import cohere from 'cohere-ai';

cohere.init(process.env.COHERE_API_KEY);

// Generate embeddings
const response = await cohere.embed({
  texts: [
    'Artificial intelligence is transforming industries',
    'Machine learning enables computers to learn from data',
    'Natural language processing helps computers understand text'
  ],
  model: 'embed-english-v3.0',
  input_type: 'search_document'
});

console.log('Embeddings:', response.embeddings);

// Semantic search example
const searchQuery = 'AI in healthcare';
const queryEmbedding = await cohere.embed({
  texts: [searchQuery],
  model: 'embed-english-v3.0',
  input_type: 'search_query'
});

// Calculate similarity with document embeddings
function cosineSimilarity(a, b) {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

const similarities = response.embeddings.map(docEmbedding => 
  cosineSimilarity(queryEmbedding.embeddings[0], docEmbedding)
);

console.log('Similarities:', similarities);`,
    features: [
      { name: 'Multilingual Support', description: 'Embeddings for 100+ languages', available: true },
      { name: 'Fine-tuning', description: 'Custom embeddings for your domain', available: true },
      { name: 'Batch Processing', description: 'Process thousands of texts efficiently', available: true },
      { name: 'Enterprise Security', description: 'SOC 2 Type II and GDPR compliant', available: true },
      { name: 'Real-time Inference', description: 'Low-latency embedding generation', available: true }
    ]
  },
  {
    id: 'elevenlabs-speech',
    name: 'ElevenLabs Speech Synthesis',
    description: 'AI voice generation with emotional range and voice cloning capabilities. Create custom voices from audio samples and generate speech with natural intonation and emotion.',
    category: 'Speech & Audio',
    pricing: 'freemium',
    tags: ['Voice Cloning', 'Emotional Speech', 'Custom Voices', 'Real-time', 'Multilingual'],
    capabilities: [
      'Voice cloning from audio samples',
      'Emotional speech synthesis',
      'Real-time voice generation',
      'Custom voice creation',
      'Multilingual support (29 languages)',
      'Professional voice library'
    ],
    documentation: 'API documentation with voice cloning guides, emotion control examples, and real-time streaming implementation patterns.',
    apiEndpoint: 'https://api.elevenlabs.io/v1/text-to-speech',
    status: 'active',
    version: '1.0',
    lastUpdated: '2024-01-20',
    usage: {
      requests: 23400000,
      uptime: 99.91
    },
    codeExample: `import fetch from 'node-fetch';

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = "21m00Tcm4TlvDq8ikWAM"; // Rachel voice

async function generateSpeech(text, voiceId = VOICE_ID) {
  const response = await fetch(
    \`https://api.elevenlabs.io/v1/text-to-speech/\${voiceId}\`,
    {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5,
          style: 0.5,
          use_speaker_boost: true
        }
      })
    }
  );

  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }

  const audioBuffer = await response.arrayBuffer();
  return audioBuffer;
}

// Generate speech with emotion
const emotionalText = "I'm so excited to announce our new AI platform!";
const audioBuffer = await generateSpeech(emotionalText);

// Convert to playable audio
const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });
const audioUrl = URL.createObjectURL(audioBlob);
const audio = new Audio(audioUrl);
audio.play();`,
    features: [
      { name: 'Voice Cloning', description: 'Clone voices from short audio samples', available: true },
      { name: 'Emotion Control', description: 'Control emotional expression in speech', available: true },
      { name: 'Real-time Generation', description: 'Generate speech with low latency', available: true },
      { name: 'Custom Voices', description: 'Create and train custom voice models', available: true },
      { name: 'Streaming Audio', description: 'Stream audio as it\'s being generated', available: false }
    ]
  }
];