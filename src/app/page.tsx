"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Youtube,
  Twitter,
  Github,
  ExternalLink,
  FileText,
} from "lucide-react";

export default function Portfolio() {
  const copyEmail = () => {
    navigator.clipboard.writeText("justin@example.com");
    toast.message("Copied to clipboard");
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
      caseStudyUrl: "/case-study/ecommerce",
      githubUrl: "https://github.com/justin/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, built using React, Node.js, and WebSocket technology.",
      caseStudyUrl: "/case-study/task-manager",
      githubUrl: "https://github.com/justin/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
    },
    {
      title: "AI Content Generator",
      description:
        "An intelligent content creation platform leveraging OpenAI's API to generate marketing copy and blog posts.",
      caseStudyUrl: "/case-study/ai-content",
      githubUrl: "https://github.com/justin/ai-content-generator",
      liveUrl: "https://ai-content-demo.vercel.app",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="justin"
                width={80}
                height={80}
                className="rounded-full border-2 border-gray-700"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">
                Justin O&apos;Connell
              </h1>
              <p className="text-gray-400">Fullstack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Youtube className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              onClick={copyEmail}
            >
              <Mail className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Twitter className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Description */}
        <div className="mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a fullstack developer passionate about building modern web
            applications, creating seamless user experiences and scalable
            backend solutions while sharing my knowledge through tutorials and
            project walkthroughs.
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-bold text-white">
              What I've built recently
            </h2>
            <div className="text-gray-400">🔧</div>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Link href={project.caseStudyUrl}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 bg-transparent"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Case Study
                      </Button>
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Site
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
