import { useState } from 'react'

function App() {
  // Your data (logic) - renamed variables to English for better standards
  const [newsList, setNewsList] = useState([
    { 
      id: 1, 
      category: "WORLD", 
      title: "Major International Event", 
      source: "CNN", 
      summary: "Significant events are unfolding in New York today as world leaders gather..." 
    },
    { 
      id: 2, 
      category: "LOCAL", 
      title: "Media Analysis in Croatia", 
      source: "Index", 
      summary: "New data regarding media consumption and portal reach in 2026." 
    },
    { 
      id: 3, 
      category: "TECHNOLOGY", 
      title: "AI in Journalism", 
      source: "TechCrunch", 
      summary: "Exploring how Artificial Intelligence is reshaping the way news is written and delivered." 
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      {/* Header section */}
      <header className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Media Analyzer 2026</h1>
        <p className="text-gray-600 italic">Tracking global events through the lens of various media outlets</p>
      </header>

      {/* Main section where news are mapped */}
      <main className="max-w-4xl mx-auto grid gap-6">
        {newsList.map(newsItem => (
          <div key={newsItem.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              {newsItem.category}
            </span>
            
            <h2 className="text-xl font-bold mt-1 text-gray-800">
              {newsItem.title}
            </h2>
            
            <p className="text-gray-600 mt-2">
              {newsItem.summary}
            </p>
            
            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <span className="text-sm text-gray-500">
                Source: <span className="font-semibold text-gray-700">{newsItem.source}</span>
              </span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="mt-12 text-center text-gray-400 text-sm">
        &copy; 2026 Media Analyzer Team - University Project
      </footer>
    </div>
  )
}

export default App