import {Content} from "@components/Content.tsx";
import {GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon} from "lucide-react";


const socials = [
    {
        name: "GitHub",
        url: "https;://github.com/nabeeladzan",
        icon: GithubIcon,
        color: "#181717", // GitHub's brand color
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nabeeladzan",
        icon: LinkedinIcon, // Replace with LinkedIn icon
        color: "#0077b5", // LinkedIn's brand color
    },
    {
        name: "Twitter",
        url: "https://twitter.com/nabeeladzan",
        icon: TwitterIcon, // Replace with Twitter icon
        color: "#1DA1F2", // Twitter's brand color
    },
    {
        name: "Instagram",
        url: "https://instagram.com/nabeel_adzan",
        icon: InstagramIcon, // Replace with Instagram icon
        color: "#C13584", // Instagram's brand color
    },
];


export default function Socials() {
    return (
        <Content className="flex flex-col items-center justify-center h-full w-full overflow-hidden relative">
            <h1 className="text-4xl font-bold mb-4">Socials</h1>
            <div className="text-2xl font-light text-left mt-4 text-gray-700 sm:w-[50%] mb-6 grid grid-cols-2 sm:grid-cols-2 gap-4">
            {
                socials.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 mb-4 text-lg font-medium hover:underline w-full justify-center cursor-pointer">
                            <Icon className="w-6 h-6" style={{color: social.color}} />
                            {social.name}
                        </a>
                    );
                })
            }
            </div>
            <span onClick={() => {
                window.location.href = "mailto:muhnabeeladzan@gmail.com";
            }} className="text-xl/5 pb-4 bg-gradient-to-r from-blue-400 to-sky-600 z-10 text-transparent bg-clip-text">
                    muhnabeeladzan@gmail.com
                </span>
        </Content>
    );
}