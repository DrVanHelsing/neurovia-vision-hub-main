# Neurovia Vision Hub - Dependencies & Requirements

## Project Information
- **Project Name**: Neurovia Vision Hub
- **Version**: 0.0.0
- **Type**: React TypeScript Application with Vite
- **Node.js Version**: Recommended 18.x or higher
- **Package Manager**: npm (alternative: bun)

## System Requirements
- Node.js 18.x or higher
- npm 8.x or higher (or bun 1.x)
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Installation
```bash
npm install
# or
bun install
```

## Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run build:dev  # Build for development
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

---

## Production Dependencies

### Core React Dependencies
- **react** (^18.3.1) - JavaScript library for building user interfaces
- **react-dom** (^18.3.1) - React DOM rendering
- **react-router-dom** (^6.30.1) - Declarative routing for React

### UI Component Libraries
#### Radix UI Components (Headless UI primitives)
- **@radix-ui/react-accordion** (^1.2.11) - Collapsible content areas
- **@radix-ui/react-alert-dialog** (^1.1.14) - Modal dialogs for alerts
- **@radix-ui/react-aspect-ratio** (^1.1.7) - Responsive aspect ratio containers
- **@radix-ui/react-avatar** (^1.1.10) - User profile pictures/avatars
- **@radix-ui/react-checkbox** (^1.3.2) - Checkbox inputs
- **@radix-ui/react-collapsible** (^1.1.11) - Collapsible content
- **@radix-ui/react-context-menu** (^2.2.15) - Right-click context menus
- **@radix-ui/react-dialog** (^1.1.14) - Modal dialogs
- **@radix-ui/react-dropdown-menu** (^2.1.15) - Dropdown menus
- **@radix-ui/react-hover-card** (^1.1.14) - Hover-triggered cards
- **@radix-ui/react-label** (^2.1.7) - Form labels
- **@radix-ui/react-menubar** (^1.1.15) - Menu bars
- **@radix-ui/react-navigation-menu** (^1.2.13) - Navigation menus
- **@radix-ui/react-popover** (^1.1.14) - Popover components
- **@radix-ui/react-progress** (^1.1.7) - Progress indicators
- **@radix-ui/react-radio-group** (^1.3.7) - Radio button groups
- **@radix-ui/react-scroll-area** (^1.2.9) - Custom scrollable areas
- **@radix-ui/react-select** (^2.2.5) - Select dropdowns
- **@radix-ui/react-separator** (^1.1.7) - Visual separators
- **@radix-ui/react-slider** (^1.3.5) - Range sliders
- **@radix-ui/react-slot** (^1.2.3) - Composition utility
- **@radix-ui/react-switch** (^1.2.5) - Toggle switches
- **@radix-ui/react-tabs** (^1.1.12) - Tab components
- **@radix-ui/react-toast** (^1.2.14) - Toast notifications
- **@radix-ui/react-toggle** (^1.1.9) - Toggle buttons
- **@radix-ui/react-toggle-group** (^1.1.10) - Toggle button groups
- **@radix-ui/react-tooltip** (^1.2.7) - Tooltips

### Styling & UI Utilities
- **tailwind-merge** (^2.6.0) - Merge Tailwind CSS classes
- **tailwindcss-animate** (^1.0.7) - Animation utilities for Tailwind
- **class-variance-authority** (^0.7.1) - Create variant-based component APIs
- **clsx** (^2.1.1) - Utility for constructing className strings
- **lucide-react** (^0.462.0) - Beautiful & consistent icon toolkit
- **next-themes** (^0.3.0) - Theme switching for React

### Form Handling & Validation
- **react-hook-form** (^7.61.1) - Performant, flexible forms
- **@hookform/resolvers** (^3.10.0) - Form validation resolvers
- **zod** (^3.25.76) - TypeScript-first schema validation

### Data Management & Utilities
- **@tanstack/react-query** (^5.83.0) - Data fetching and caching library
- **date-fns** (^3.6.0) - Modern JavaScript date utility library

### Specialized Components
- **embla-carousel-react** (^8.6.0) - Carousel/slider component
- **react-day-picker** (^8.10.1) - Date picker component
- **react-resizable-panels** (^2.1.9) - Resizable panel layouts
- **recharts** (^2.15.4) - Charting library for React
- **sonner** (^1.7.4) - Toast notification library
- **vaul** (^0.9.9) - Drawer component
- **input-otp** (^1.4.2) - OTP/PIN input component
- **cmdk** (^1.1.1) - Command palette component

---

## Development Dependencies

### Build Tools & Bundling
- **vite** (^5.4.19) - Fast build tool and development server
- **@vitejs/plugin-react-swc** (^3.11.0) - Vite plugin for React with SWC

### TypeScript Support
- **typescript** (^5.8.3) - TypeScript compiler
- **@types/node** (^22.16.5) - TypeScript definitions for Node.js
- **@types/react** (^18.3.23) - TypeScript definitions for React
- **@types/react-dom** (^18.3.7) - TypeScript definitions for React DOM

### Code Quality & Linting
- **eslint** (^9.32.0) - JavaScript/TypeScript linter
- **@eslint/js** (^9.32.0) - ESLint JavaScript rules
- **typescript-eslint** (^8.38.0) - TypeScript-specific ESLint rules
- **eslint-plugin-react-hooks** (^5.2.0) - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** (^0.4.20) - ESLint rules for React Refresh
- **globals** (^15.15.0) - Global variable definitions

### CSS & Styling Tools
- **tailwindcss** (^3.4.17) - Utility-first CSS framework
- **@tailwindcss/typography** (^0.5.16) - Typography plugin for Tailwind
- **postcss** (^8.5.6) - CSS post-processor
- **autoprefixer** (^10.4.21) - CSS vendor prefix automation

### Development Tools
- **lovable-tagger** (^1.1.9) - Development tagging utility

---

## Installation Instructions

### Prerequisites
1. Install Node.js (18.x or higher): https://nodejs.org/
2. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Setup Project
1. Clone the repository
2. Navigate to project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

### Alternative Package Managers
If you prefer using **bun**:
```bash
# Install bun
npm install -g bun

# Install dependencies
bun install

# Start development
bun run dev
```

---

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes
- This project uses modern ES modules and requires a bundler (Vite)
- All dependencies are pinned to specific versions for reproducible builds
- The project follows TypeScript strict mode
- Tailwind CSS is configured for utility-first styling
- Radix UI provides accessible, unstyled component primitives