
# Data Democratizer

## 🚀 Overview

The Data Democratizer project was built with a focus on creating an intuitive, user-friendly interface that allows non-technical users to get insights from data through natural language queries. Here's a breakdown of the approach:

1. User Experience First: The dashboard was designed with simplicity in mind, featuring a clean, minimalist interface that puts the focus on the query input and visualization results.

2. Component Architecture: I implemented a modular component structure that separates concerns:

  QueryInput: Handles user input and query processing
  ResultVisualization: Displays the appropriate chart based on query results
  QueryHistory: Allows users to revisit previous queries and results

3. State Management: Redux Toolkit was used to manage application state, making it easy to:

   Track queries and their results
   Maintain query history
   Handle loading states and errors
   Store visualization data
   
4. Responsive Design: The layout adapts to different screen sizes using Tailwind CSS, ensuring a good experience on both desktop and mobile devices.

5. Data Visualization: Recharts provides flexible, customizable chart components that render different visualizations (bar, line, pie, area charts) based on the type of data and query.

6. Mock Data Flow: For demonstration purposes, the app generates appropriate mock visualizations based on the content of queries, simulating how a real backend would process natural language questions.

7. Error Handling: The system gracefully handles different states, including loading states and error conditions, to provide a smooth user experience


## ✨ Features

- **Natural Language Queries**: Ask questions about your data in plain English
- **Interactive Visualizations**: Automatically generated charts based on your queries
- **Query History**: Track and revisit your previous questions and results
- **Multiple Chart Types**: Bar charts, line charts, pie charts, and area charts



## 📊 Demo

Data Democratizer enables users to:
- Ask questions like "How did our sales perform last quarter?"
- Get instant visual insights without SQL knowledge
- Compare data across different dimensions
- Save and revisit previous analyses



## 💡 Usage Example

1. Enter a question in the input field, such as "What were our top performing products in 2023?"
2. The application processes your query and generates an appropriate visualization
3. Review the results and insights
4. The query is saved to your history for future reference



## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **UI Framework**: Tailwind CSS, shadcn/ui
- **State Management**: Redux Toolkit
- **Data Visualization**: Recharts
- **Icons**: Lucide React

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



## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Recharts](https://recharts.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)


