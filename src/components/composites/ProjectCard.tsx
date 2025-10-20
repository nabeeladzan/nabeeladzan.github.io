
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/types/project";
import { useState } from "react";

export function ProjectCard({ project }: { project: Project }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                    <iframe
                        src={project.url}
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ transform: 'scale(0.5)', transformOrigin: '0 0' }}
                    />
                </div>
                <p>{project.long_description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={() => setIsExpanded(true)}>Expand</Button>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Project
                </a>
            </CardFooter>

            {isExpanded && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative w-11/12 h-5/6 bg-white rounded-lg shadow-lg">
                        <iframe
                            src={project.url}
                            className="w-full h-full rounded-lg"
                        />
                        <div className="absolute bottom-4 right-4">
                            <Button onClick={() => setIsExpanded(false)} className="mr-2">Close</Button>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <Button>Go to site</Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </Card>
    );
}
