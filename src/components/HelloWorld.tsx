"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function HelloWorld() {
  const [clickCount, setClickCount] = useState(0)
  const [message, setMessage] = useState("Hello, World!")

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    const messages = [
      "Hello, World!",
      "Welcome to Next.js!",
      "Built with shadcn/ui",
      "Styled with Tailwind CSS",
      "You're awesome!"
    ]
    setMessage(messages[clickCount % messages.length])
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      {/* Main Hello World Card */}
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {message}
          </CardTitle>
          <CardDescription className="text-lg md:text-xl text-muted-foreground mt-4">
            A modern Next.js application with beautiful UI components
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="text-muted-foreground">
            <p className="mb-2">This application is built with:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js 15</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">React 19</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">shadcn/ui</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={handleClick}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Click me! ({clickCount})
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Click the button to see different messages!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Info Card */}
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Responsive Design</h3>
              <p className="text-sm text-muted-foreground">Works beautifully on all devices</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Modern Components</h3>
              <p className="text-sm text-muted-foreground">Built with shadcn/ui components</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Interactive</h3>
              <p className="text-sm text-muted-foreground">Dynamic content and animations</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Production Ready</h3>
              <p className="text-sm text-muted-foreground">Optimized for performance</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}