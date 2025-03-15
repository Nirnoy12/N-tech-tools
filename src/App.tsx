import React, { useState } from 'react';
import { Download, Cpu, Wrench, Heart, ChevronDown, Github, Folders } from 'lucide-react';

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const tools = [
    {
      name: "FileOrganizer",
      description: "Intelligent file management tool that automatically sorts and organizes files based on type, date, and content",
      size: "65.90 MB",
      version: "1.0",
      icon: Folders,
      downloadUrl: "/downloads/FileOrganizer.exe",
      instructions: {
        installation: [
          "Copy FileOrganizer.exe to any location on your PC (e.g., Desktop or Documents folder)",
          "Double-click FileOrganizer.exe to run the application",
          "The application will automatically create necessary folders and configuration"
        ],
        firstTimeSetup: [
          "Click on the folder icon in the system tray to open the main window",
          "Go to the 'Settings' tab",
          "Click 'Add Directory to Monitor' to select folders you want to organize",
          "Click 'Start Organizer' in the Status tab to begin organizing files"
        ],
        fileStructure: {
          basePath: "C:\\Users\\<YourUsername>\\Organized Files\\",
          categories: [
            "Images (jpg, png, etc.)",
            "Documents (pdf, doc, etc.)",
            "Audio (mp3, wav, etc.)",
            "Video (mp4, avi, etc.)",
            "Archives (zip, rar, etc.)",
            "Code (py, js, etc.)",
            "Others (for unrecognized file types)"
          ]
        },
        features: [
          "System tray operation with folder icon",
          "Real-time file organization",
          "Automatic folder creation",
          "Detailed logging in Status tab",
          "Windows startup configuration",
          "Multiple directory monitoring"
        ]
      }
    }
  ];

  const handleDownload = (downloadUrl: string) => {
    window.location.href = downloadUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75"></div>
              <Cpu className="w-16 h-16 text-white relative" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            N'Tech Tools
          </h1>
          <p className="text-2xl text-gray-300 mb-12">
            Empowering developers with next-generation tools
          </p>
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-blue-400" />
          </div>
        </div>
      </header>

      {/* Tools Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Professional Developer Tools
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="relative group col-span-3">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-gray-900 rounded-xl p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <Icon className="w-10 h-10 text-blue-400 mr-4" />
                      <div>
                        <h3 className="text-2xl font-semibold">{tool.name}</h3>
                        <p className="text-gray-400 mt-2">{tool.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-2">Version {tool.version}</div>
                      <div className="text-sm text-gray-400">{tool.size}</div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowInstructions(!showInstructions)}
                    className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg mb-4 hover:bg-gray-700 transition duration-300"
                  >
                    {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
                  </button>

                  {showInstructions && (
                    <div className="mt-6 space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-blue-400">Installation Instructions</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {tool.instructions.installation.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-blue-400">First-time Setup</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {tool.instructions.firstTimeSetup.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-blue-400">File Organization</h4>
                        <p className="text-gray-300 mb-2">Files will be organized under:</p>
                        <code className="block bg-gray-800 p-2 rounded text-green-400 mb-3">
                          {tool.instructions.fileStructure.basePath}
                        </code>
                        <p className="text-gray-300 mb-2">Categories:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          {tool.instructions.fileStructure.categories.map((category, index) => (
                            <li key={index}>{category}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-blue-400">Key Features</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {tool.instructions.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={() => handleDownload(tool.downloadUrl)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition duration-300 mt-6"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Support Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Heart className="w-16 h-16 text-red-400 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Support Our Development
            </h2>
            <p className="text-xl text-gray-300">
              Help us continue creating powerful developer tools by making a donation.
              Every contribution helps us improve and expand our toolkit.
            </p>
          </div>
          <div className="bg-gray-900 p-12 rounded-2xl border border-gray-800">
            <img 
              src="/nirnoy-qr.jpg"
              alt="Donation QR Code"
              className="w-64 h-64 mx-auto mb-6"
            />
            <p className="text-center text-gray-400">
              UPI ID: nirnoychatterjee2004@oksbi
            </p>
            <p className="text-center text-gray-400 mt-4">
              Scan to donate and support our work
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 bg-opacity-50 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Github className="w-8 h-8" />
            </a>
            <Wrench className="w-8 h-8 text-blue-400" />
          </div>
          <p className="text-gray-400">
            © 2024 N'Tech Tools. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;