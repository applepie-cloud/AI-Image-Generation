# 🎨 AI Image Generation

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

A smart, interactive full-stack web application that allows users to generate stunning images using Artificial Intelligence. Built with a scalable frontend–backend architecture, this platform features secure user authentication, real-time data handling, an optimized user experience, and seamlessly integrates with top-tier AI image generation models.

## ✨ Features

- **Text-to-Image Generation**: Turn descriptive text prompts into high-quality images instantly.
- **Community Showcase**: Share your generated images with the community and browse others' creations.
- **Secure Authentication**: JWT-based login and signup system to securely manage user sessions.
- **Responsive UI**: A beautiful, mobile-first design leveraging modern CSS frameworks.
- **Image Downloading**: One-click download functionality for all generated assets.

---

## 🛠️ Tech Stack

**Frontend:**
- [React.js](https://reactjs.org/) - Component-based UI
- [TypeScript](https://www.typescriptlang.org/) - Static typing for scalable code
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling framework
- [Vite](https://vitejs.dev/) - Blazing fast frontend tooling

**Backend:**
- [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/) - RESTful API framework
- [PostgreSQL](https://www.postgresql.org/) / MongoDB - Primary database
- [Redis](https://redis.io/) - In-memory data store for caching and job queues 

---

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the root backend directory. 

```env
# Server
PORT=8080
NODE_ENV=development

# Database
DATABASE_URL="your_database_url_here"

# Authentication
JWT_SECRET="your_super_secret_jwt_string"

# AI Provider API (e.g., OpenAI, Replicate)
OPENAI_API_KEY="sk-your-openai-api-key"

# Cloud Storage (Cloudinary/AWS)
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

---

## 🚀 Installation & Setup

**1. Clone the repository**
```bash
git clone [https://github.com/applepie-cloud/AI-Image-Generation.git](https://github.com/applepie-cloud/AI-Image-Generation.git)
cd AI-Image-Generation
```

**2. Setup Backend**
```bash
cd backend
npm install
npm run dev
```

**3. Setup Frontend**
```bash
cd ../frontend
npm install
npm run dev
```

---

## 📖 Usage

1. **Sign Up / Login:** Create an account to get access to the generation dashboard.
2. **Craft a Prompt:** Navigate to the "Create" page. Enter a highly descriptive prompt (e.g., *"A futuristic cyberpunk city at sunset, neon lights, highly detailed, 4k resolution"*).
3. **Generate:** Click generate. The backend will asynchronously queue the job, communicate with the AI model, and return the image.
4. **Share:** Once generated, optionally add a title and share it to the public community feed.

---

## 📡 API Reference

### Auth Routes
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Authenticate user & receive JWT

### Generation Routes
- `POST /api/v1/generate` - Send a text prompt to the AI model
  - **Headers:** `Authorization: Bearer <token>`
  - **Body:** `{ "prompt": "A majestic lion in space", "resolution": "1024x1024" }`
  - **Returns:** `{ "success": true, "imageUrl": "https://..." }`

### Community/Post Routes
- `GET /api/v1/posts` - Fetch paginated community images
- `POST /api/v1/posts` - Share a generated image to the feed

---

## 🚀 Future Enhancements (Roadmap)

- [ ] **Image Variation Generation:** Allow users to upload a base image and generate variations.
- [ ] **Credit System:** Implement a billing system where users get a set number of free generations before needing to purchase credits.
- [ ] **Negative Prompting:** Add an advanced mode allowing users to specify what they *don't* want in the image.
- [ ] **AI-Powered Prompt Enhancer:** Integrate an LLM to automatically refine and detail simple user prompts for better image results.

---
