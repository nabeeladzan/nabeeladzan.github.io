
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/types/project";
import { Globe } from "lucide-react";
import { useMemo } from "react";

export function ProjectCard({ project }: { project: Project }) {
    const hostname = useMemo(() => {
        try {
            return new URL(project.url).hostname;
        } catch (_error) {
            return project.url;
        }
    }, [project.url]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4" aria-hidden="true" />
                    <span title={hostname}>{hostname}</span>
                </div>
                <p>{project.long_description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-end">
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm font-medium"
                >
                    View Project
                </a>
            </CardFooter>
        </Card>
    );
}
