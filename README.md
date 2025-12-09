# Quiz-App
Full-Stack Quiz App
This project is a small full-stack quiz application built to demonstrate end-to-end functionality using a Hono + Cloudflare Workers backend and a NextJS + TailwindCSS frontend.
The application uses mock data only and focuses on clean structure, clarity, and maintainability.

# Architecture

The backend follows a small, modular structure:
src/
│── app.ts                 # Main Hono application, mounts all routes
│
├── routes/
│   └── quiz.routes.ts     # Quiz-related endpoints
│
├── controller/
│   └── quiz.controller.ts # Handles request validation and responses
│
├── services/
│   └── quiz.service.ts    # Business logic (question handling, grading)
│
├── data/
│   └── mockQuestions.ts   # Mock quiz questions used by the service layer
│
└── types/
    └── quiz.types.ts      # Shared TypeScript types
    
# Why this structure

    routes define endpoints only

    controllers manage requests and responses

    services contain the actual logic and can be tested independently

    data holds mock questions since this project doesn't use a database

    types ensure consistent type definitions across the project

    This separation keeps the backend organized, readable, and closer to what one would expect in a production codebase, while still being simple enough for a small project.

# Endpoints
GET /api/quiz

Returns 12 quiz questions in JSON format.

POST /api/grade

Accepts user answers and returns:

score

total questions

result per question

Invalid requests return a 400 status.

# Local Development

To run the backend locally:

cd backend
npm install
npm run dev

# Wrangler starts a local Cloudflare Worker at:

http://localhost:8787


# Frontend Architecture (Next.js)

The frontend uses the App Router, keeping features modular and easy to scale:

frontend/
└── src/
    ├── app/
    │   ├── page.tsx                
    │   └── quiz/
    │        ├── page.tsx
    │        └── results/
    │            └── page.tsx         
    │   
    │
    ├── components/
    │   └──QuizQuestion.tsx
    │
    ├── lib/
    │   ├── api.ts  
    │   └── types.ts    
    │
    │
    └── styles/
        └── globals.css

# Why this structure

App Router provides a clean separation between pages and components.

components keeps UI building blocks reusable.

lib/api.ts avoids repeating fetch logic.

hooks encapsulate client-side behavior.

globals.css + Tailwind keeps styling consistent and minimal.

# API Endpoints
GET /api/quiz

Returns quiz questions.

POST /api/grade

Receives user answers and returns:

score

total

correctness per question

Invalid payloads return 400.

# Local Development
To run the Frontend locally:

cd frontend
npm install
npm run dev

# Time spent

7 hours