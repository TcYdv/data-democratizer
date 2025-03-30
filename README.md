
# Data Democratizer

![Data Democratizer](https://github.com/user/data-democratizer/raw/main/public/data-demo-screenshot.png)

## 🚀 Overview

Data Democratizer is an interactive analytics dashboard that allows non-technical users to query and visualize data using natural language. Simply type your questions in plain English, and the application will generate insightful visualizations to help you understand your data.

## ✨ Features

- **Natural Language Queries**: Ask questions about your data in plain English
- **Interactive Visualizations**: Automatically generated charts based on your queries
- **Query History**: Track and revisit your previous questions and results
- **Multiple Chart Types**: Bar charts, line charts, pie charts, and area charts

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **UI Framework**: Tailwind CSS, shadcn/ui
- **State Management**: Redux Toolkit
- **Data Visualization**: Recharts
- **Icons**: Lucide React

## 📊 Demo

Data Democratizer enables users to:
- Ask questions like "How did our sales perform last quarter?"
- Get instant visual insights without SQL knowledge
- Compare data across different dimensions
- Save and revisit previous analyses

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/data-democratizer.git
   ```

2. Navigate to the project directory
   ```bash
   cd data-democratizer
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit http://localhost:8080

## 🧩 Project Structure

```
data-democratizer/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── analytics/    # Analytics-specific components
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Redux store configuration
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 💡 Usage Example

1. Enter a question in the input field, such as "What were our top performing products in 2023?"
2. The application processes your query and generates an appropriate visualization
3. Review the results and insights
4. The query is saved to your history for future reference

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Project Link: [https://github.com/your-username/data-democratizer](https://github.com/your-username/data-democratizer)

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Recharts](https://recharts.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
