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
- **Scalable Architecture**: Dockerized services utilizing job queues for asynchronous image processing.

---

## 🛠️ Tech Stack

**Frontend:**
- [React.js](https://reactjs.org/) - Component-based UI
- [TypeScript](https://www.typescriptlang.org/) - Static typing for scalable code
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling framework
- [Vite](https://vitejs.dev/) - Blazing fast frontend tooling

**Backend:**
- [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/) - RESTful API framework
- [PostgreSQL](https://www.postgresql.org/) - Primary relational database
- [Redis](https://redis.io/) - In-memory data store for caching and job queues (BullMQ)
- [Prisma](https://www.prisma.io/) or Mongoose - ORM / Database mapping

**Infrastructure & Deployment:**
- [Docker](https://www.docker.com/) & Docker Compose - Containerization
- Cloudinary / AWS S3 - Image hosting

---

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the root backend directory. 

Create a `.env` file and configure:

```env
# Server
PORT=8080
NODE_ENV=development

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/ai_image_db"
REDIS_URL="redis://localhost:6379"

# Authentication
JWT_SECRET="your_super_secret_jwt_string"

# AI Provider API (e.g., OpenAI, Replicate)
OPENAI_API_KEY="sk-your-openai-api-key"
REPLICATE_API_TOKEN="your-replicate-api-token"

# Cloud Storage (Cloudinary/AWS)
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

🚀 Installation & Setup
Option 1: Using Docker (Recommended)
If you have Docker installed, you can spin up the entire application (frontend, backend, and databases) with a single command:

Clone the repository:

Bash
git clone [https://github.com/applepie-cloud/AI-Image-Generation.git](https://github.com/applepie-cloud/AI-Image-Generation.git)
cd AI-Image-Generation
Build and start the containers:

Bash
docker-compose up --build
The app will be available at http://localhost:3000.

Option 2: Manual Setup
1. Clone the repository

Bash
git clone [https://github.com/applepie-cloud/AI-Image-Generation.git](https://github.com/applepie-cloud/AI-Image-Generation.git)
cd AI-Image-Generation
2. Setup Backend

Bash
cd backend
npm install
# Ensure PostgreSQL and Redis are running locally, then run:
npm run dev
3. Setup Frontend

Bash
cd ../frontend
npm install
npm run dev
📖 Usage
Sign Up / Login: Create an account to get access to the generation dashboard.

Craft a Prompt: Navigate to the "Create" page. Enter a highly descriptive prompt (e.g., "A futuristic cyberpunk city at sunset, neon lights, highly detailed, 4k resolution").

Generate: Click generate. The backend will asynchronously queue the job, communicate with the AI model, and return the image.

Share: Once generated, optionally add a title and share it to the public community feed.

📡 API Reference
Auth Routes
POST /api/v1/auth/register - Register a new user

POST /api/v1/auth/login - Authenticate user & receive JWT

Generation Routes
POST /api/v1/generate - Send a text prompt to the AI model

Headers: Authorization: Bearer <token>

Body: { "prompt": "A majestic lion in space", "resolution": "1024x1024" }

Returns: { "success": true, "imageUrl": "https://..." }

Community/Post Routes
GET /api/v1/posts - Fetch paginated community images

POST /api/v1/posts - Share a generated image to the feed
