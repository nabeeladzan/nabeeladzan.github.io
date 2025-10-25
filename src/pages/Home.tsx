import {Content} from "@components/Content.tsx";
import {useMemo} from 'react';

export default function Home() {
    const timeOfDay: {
        text: string,
        color: string
    } = useMemo(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            return {
                text: "morning",
                color: "#f59e0b" // orange-500
            }
        } else if (hour < 18) {
            return {
                text: "afternoon",
                color: "#10b981" // green-500
            }
        } else {
            return {
                text: "evening",
                color: "#3b82f6" // blue-500
            }
        }
    }, []);

    return (
        <Content className="flex flex-col items-center justify-center h-full w-full overflow-hidden relative">
            <img src="/profile.jpg" alt="profile" className="w-64 h-64 rounded-full mb-6 shadow-lg" />
            <div className="text-2xl font-normal mb-4" style={{color: timeOfDay.color}}>
                Good {timeOfDay.text}!
            </div>
            <h1 className="text-4xl font-bold mb-4">Nabeel Adzan</h1>
            <p className="text-lg text-gray-700">Software Engineer</p>
        </Content>
    );
}
