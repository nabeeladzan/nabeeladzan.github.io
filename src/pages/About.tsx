import {Content} from "@components/Content.tsx";

export default function About() {
    return (
        <Content className="flex flex-col items-center justify-center h-full w-full bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-2xl font-light text-left pl-4 text-gray-700 sm:w-[50%]">I'm a software developer and a computer science student. I build software, handling everything from the highest level interfaces to the deepest back-end logic. My goal is to make things that are practical and do their job well; by <span className="font-bold"> any means necessary.</span></p>
        </Content>
    );
}