<!-- @format -->

# Rick and Morty Character Explorer

A simple Next.js app to explore characters from the Rick and Morty universe using the Rick and Morty API .

![screenshot of app](https://github.com/tamimhasan19702/lh_frontend/blob/master/screen1.png)
![screenshot of app](https://github.com/tamimhasan19702/lh_frontend/blob/master/screen2.png)

## Features

- Browse characters, locations, and episodes
- Infinite scroll and smooth horizontal navigation
- View character details with origin, location, and appearances

Fully typed with TypeScript

## Technologies Used

- Next.js
- Full-stack React framework
- TypeScript
- Strong typing
- Redux Toolkit
- State management
- React-Redux
- Integration with Redux
- Tailwind CSS
- Utility-first styling
- Lucide Icons
- Beautiful, consistent UI icons
- Axios
- HTTP client for API calls

📁 Project Structure

```bash

LH_FRONTEND/
│
├── .next/                          # Next.js build output (auto-generated)
├── node_modules/                  # Node.js dependencies (auto-generated)
├── public/                        # Static assets (e.g., images, icons)
│   └── favicon.ico
│
├── src/                           # Main source folder
│   ├── app/                       # Next.js App Router directory
│   │   ├── characters/            # Route-specific directory (e.g., /characters)
│   │   ├── globals.css            # Global stylesheet
│   │   ├── layout.tsx            # Layout component for wrapping pages
│   │   ├── page.tsx              # Root page component
│   │   └── providers.tsx         # Context providers (Redux Provider, etc.)
│
│   ├── components/                # Reusable UI components
│   │   ├── CharacterCard.tsx
│   │   ├── CharacterGrid.tsx
│   │   ├── CharacterList.tsx
│   │   ├── EpisodeCard.tsx
│   │   ├── EpisodesList.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LocationCard.tsx
│   │   └── LocationList.tsx
│
│   ├── store/                     # Redux Toolkit store configuration
│   │   ├── features/              # Feature-specific slices
│   │   │   ├── characters/
│   │   │   │   └── characterSlice.ts
│   │   │   ├── episodes/
│   │   │   │   └── episodeSlice.ts
│   │   │   └── locations/
│   │   │       └── locationSlice.ts
│   │   └── index.ts               # Root store configuration
│
│   └── utils/                     # Utility/helper functions (empty in image)
│
├── .gitignore                     # Git ignored files and folders
├── eslint.config.mjs             # ESLint configuration
├── next-env.d.ts                 # TypeScript types for Next.js
├── next.config.js                # Next.js configuration file
├── package.json                  # Project metadata and dependencies
├── package-lock.json             # Exact version lock of dependencies
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript compiler configuration
├── README.md                     # Project documentation
├── screen1.png                   # Screenshot (for preview or submission)
└── screen2.png                   # Screenshot (for preview or submission)

```

🧪 Getting Started

1. Clone the repo:

```bash


git clone https://github.com/your-username/rick-morty-app.git
cd rick-morty-app 2. Install dependencies:
```

```bash

npm install
or
```

```bash

yarn install 3. Run the development server:
```

```bash
1
npm run dev
Open http://localhost:3000 in your browser.
```

🛠️ How It Works
Data is fetched from the Rick and Morty REST API (https://rickandmortyapi.com/documentation)
Redux Toolkit manages global state for characters, locations, and episodes
Custom hooks and typed selectors ensure type safety throughout the app
Smooth horizontal scrolling is implemented using native JavaScript
The responsive layout is styled with Tailwind CSS
