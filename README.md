# GitHub User Search

A modern, responsive React application that allows users to search for GitHub profiles using the GitHub API. Built with React, TypeScript, and Tailwind CSS, this application provides a sleek interface to view GitHub user information including their profile details, repository count, and follower statistics.

## Features

- 🔍 Real-time GitHub user search
- 👤 Detailed user profile display
- 📱 Fully responsive design
- ⚡ Fast and efficient API integration
- 🎨 Modern UI with Tailwind CSS
- 🛡️ TypeScript for type safety
- ⚠️ Comprehensive error handling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0.0 or 20.19.1 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd github-user-search
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Technical Architecture

### Technology Stack

- **React 18**: For building the user interface with modern features like concurrent rendering
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For utility-first styling and responsive design
- **Vite**: For fast development and optimized builds
- **Lucide React**: For beautiful, consistent icons

### Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── EmptyState.tsx
│   ├── ErrorMessage.tsx
│   ├── Loading.tsx
│   ├── SearchBar.tsx
│   └── UserProfile.tsx
├── services/          # API integration
│   └── github.ts
├── types/             # TypeScript interfaces
│   └── github.ts
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

### Key Design Decisions

1. **Component Architecture**
   - Modular components for better maintainability
   - Clear separation of concerns between UI and data fetching
   - Reusable components for common UI patterns

2. **State Management**
   - Local state management using React hooks
   - Centralized error handling
   - Loading states for better user experience

3. **API Integration**
   - Clean separation of API calls in services
   - Type-safe API responses
   - Error boundary implementation

4. **Styling Approach**
   - Utility-first CSS with Tailwind
   - Consistent color scheme and spacing
   - Responsive design patterns
   - Custom animations for smooth transitions

## Usage

1. Enter a complete GitHub username in the search box
2. Click the search button or press Enter
3. View the user's profile information including:
   - Profile picture
   - Name and username
   - Bio
   - Public repository count
   - Follower count
   - Location
   - Company
   - Website
   - Email (if public)

## Build and Deployment

To build the application for production:

```bash
npm run build
```

This will create a `dist` directory with optimized production build.

## Development

To run the development server with hot reload:

```bash
npm run dev
```

For linting:

```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the KRIS-D License - see the LICENSE file for details.
