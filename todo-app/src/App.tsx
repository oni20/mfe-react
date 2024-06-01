import React from 'react'
import ReactDOM from 'react-dom/client'

// Custom imports
import TodoApp from '../src/components/TodoApp';

import './index.scss'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <TodoApp />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
