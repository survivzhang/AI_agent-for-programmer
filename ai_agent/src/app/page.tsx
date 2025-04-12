import Link from 'next/link';
import './globals.css';


export default function InterviewSelection() {
  const technologies = [
    { name: 'Python', icon: '/python.svg' },
    { name: 'Java', icon: '/java.svg' },
    { name: 'JavaScript', icon: '/javascript.svg' },
    { name: 'React', icon: '/react.svg' },
    { name: '.NET', icon: '/dotnet.svg' },
    { name: 'C#', icon: '/csharp.svg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-12">Select Your Interview Technology</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {technologies.map((tech) => (
          <Link 
            key={tech.name}
            href={`/interview/${tech.name.toLowerCase()}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Placeholder for icons - you can add real SVG icons later */}
              <span className="text-2xl">{tech.name[0]}</span>
            </div>
            <h2 className="text-xl font-semibold">{tech.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}