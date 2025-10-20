
import { Content } from "@/components/Content.tsx";
import { ProjectCard } from "@/components/composites/ProjectCard.tsx";
import { Project } from "@/types/project";
import { useEffect, useState } from "react";
import yaml from "js-yaml";

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projectModules = import.meta.glob("/projects/*.yml", { as: "raw" });
            const projectPromises = Object.values(projectModules).map(async (projectModule) => {
                const projectContent = await projectModule();
                return yaml.load(projectContent) as Project;
            });
            const loadedProjects = await Promise.all(projectPromises);
            setProjects(loadedProjects);
        };

        fetchProjects();
    }, []);

    return (
        <Content className="flex flex-col items-center justify-center h-full w-full overflow-hidden relative">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </Content>
    );
}
