// Your App.tsx file
import {useState, useRef, useEffect, type ReactNode} from "react";
import {useTerminalHistoryStore} from "@stores/TerminalHistoryStore.ts";
import {BrowserRouter} from "react-router";

const commands = [
    "help",
    "clear",
    "exit",
    "version",
    "status",

    // page commands
    "home",
    "about",
    "contact",
    "projects",

    // socials
    "github",
    "linkedin",
    "twitter",
    "instagram",
]

export default function App(props: {
    children?: ReactNode;
    router: {navigate: (path: string) => void;}; // <-- 1. Accept the router prop
}) {
    const browser = navigator.userAgent.toLowerCase();

    const [terminalInput, setTerminalInput] = useState("");
    const {terminalHistory, addLineToHistory, clearHistory} = useTerminalHistoryStore();
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [searchCursor, setSearchCursor] = useState(-1); // -1 means no selection

    const terminalInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleFocus = (event: MouseEvent) => {
            if (terminalInputRef.current && !terminalInputRef.current.contains(event.target as Node)) {
                terminalInputRef.current.focus();
            }
        };

        document.addEventListener("click", handleFocus);
        return () => {
            document.removeEventListener("click", handleFocus);
        };
    }, []);

    useEffect(() => {
        if (terminalInput.trim() === "") {
            setSearchResults([]);
            return;
        }

        const results = commands.filter(command =>
            command.toLowerCase().includes(terminalInput.toLowerCase())
        );

        setSearchCursor(-1); // Reset cursor when input changes
        setSearchResults(results);
    }, [terminalInput]);

    function handleCommandSelection(direction: "up" | "down") {
        if (searchResults.length === 0) return;

        if (direction === "up") {
            setSearchCursor(prev => (prev <= 0 ? searchResults.length - 1 : prev - 1));
        } else if (direction === "down") {
            setSearchCursor(prev => (prev >= searchResults.length - 1 ? 0 : prev + 1));
        }
    }

    function handleCommandExecution(command: string) {
        switch (command) {
            case "help":
                command = "Available commands: " + commands.join(", ");
                addLineToHistory(command);
                break;
            case "clear":
                clearHistory();
                setTerminalInput("");
                break;
            case "exit":
                        addLineToHistory("Exiting terminal... 3");
                        setTimeout(() => {
                            addLineToHistory("Exiting terminal... 2");
                            setTimeout(() => {
                                addLineToHistory("Exiting terminal... 1 Goodbye!");

                                // go to new tab page
                                setTimeout(() => {
                                    // check what browser is used
                                    if (browser.includes("firefox")) {
                                        window.location.href = "about:newtab";
                                    } else if (browser.includes("safari")) {
                                        window.location.href = "about:blank";
                                    } else if (browser.includes("chrome") || browser.includes("chromium")) {
                                        window.location.href = "chrome://new-tab-page/";
                                    }
                                }, 500);
                            }, 1000);
                        }, 1000);
                break;
            case "version":
                addLineToHistory("Melancholied version 1.0.0");
                break;
            case "status":
                addLineToHistory("System status: All systems operational.");
                break;

            case "home":
                addLineToHistory("Navigating to Home...");
                // Logic to navigate to App page
                // navigate to /
                props.router.navigate("/");
                break;

            case "about":
                addLineToHistory("Navigating to About...");
                // Logic to navigate to About page
                // navigate to /about
                props.router.navigate("/about");
                break;

            case "contact":
                addLineToHistory("Navigating to Contact page...");
                // Logic to navigate to Contact page
                break;

            case "projects":
                addLineToHistory("Navigating to Projects page...");
                // Logic to navigate to Projects page
                break;

            case "github":
                addLineToHistory("Opening GitHub profile...");
                window.open("https://github.com/nabeeladzan", "_blank");
                break;

            case "linkedin":
                addLineToHistory("Opening LinkedIn profile...");
                window.open("https://linkedin.com/in/nabeeladzan", "_blank");
                break;

            case "twitter":
                addLineToHistory("Opening Twitter profile...");
                window.open("https://twitter.com/nabeeladzan", "_blank");
                break;

            case "instagram":
                addLineToHistory("Opening Instagram profile...");
                window.open("https://instagram.com/nabeel_adzan", "_blank");
                break;


            default:
                addLineToHistory(`Command not recognized: ${command}`);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="flex h-full flex-grow w-full">
                <div className="absolute flex flex-col items-start p-1 pr-2 drop-shadow-2xl rounded-r-md justify-end bottom-[2.25em] w-min bg-white z-10">
                    {
                        // only one and perfect match dont show search results
                        searchResults.length === 1 && searchResults[0].toLowerCase() === terminalInput.toLowerCase() ? null :
                        searchResults.map((command, index) => (
                            <span key={index} className="text-gray-600 text-md"
                                style={{
                                    color: searchCursor === index ? "black" : "gray",
                                    backgroundColor: searchCursor === index ? "#e0e0e0" : "transparent",
                                    padding: "0.25em 0.5em",
                                    borderRadius: "4px",
                                    cursor: "pointer"
                                }}
                            >
                                {command}
                            </span>
                        ))
                    }
                </div>
                <div className="absolute flex flex-col items-start p-2 justify-end bottom-[2.25em] w-full h-full bg-transparent">
                    {
                        terminalHistory.map((command, index) => (
                            <span key={index} className="text-gray-600 text-md"
                                style={{
                                    // opacity at last its 1 by 10 its 0
                                    opacity: 1 - (terminalHistory.length - index) / 8,
                                }}
                            >
                                {command}
                            </span>
                        ))
                    }
                </div>
                <div className="flex flex-col items-center justify-center h-full w-full">
                    {props.children}
                </div>
            </div>
            <input
                ref={terminalInputRef} // 2. Attach the ref to the input element
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type your command here..."
                className="border-none border-t-gray-00 outline-0 rounded-none p-2 w-full"
                autoFocus // 3. Automatically focus this input when the component mounts
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault(); // Prevent form submission or other default behavior

                        if (terminalInput.trim() === "") return; // Ignore empty input

                        if (searchCursor >= 0) {
                            // If a search result is selected, use that
                            setTerminalInput(searchResults[searchCursor]);
                        } else {

                            console.log("Command entered:", terminalInput);
                            setTerminalInput(""); // Clear the input after command is processed
                            handleCommandExecution(terminalInput.trim());
                        }

                    }

                    if (e.key === "Escape") {
                        // Clear the input when Escape is pressed
                        setTerminalInput("");
                    }
                    // prevent default behavior for arrow keys
                    if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Tab") {
                        e.preventDefault();
                    }

                    // if search results only one, select it when tab is pressed
                    if (e.key === "Tab" && searchResults.length === 1) {
                        e.preventDefault();
                        setTerminalInput(searchResults[0]);
                        setSearchCursor(0); // Set cursor to the first result
                    } else if (searchResults.length > 1 && e.key === "Tab") {
                        e.preventDefault();
                        // Cycle through search results when Tab is pressed
                        handleCommandSelection("up");
                    }

                    // Handle arrow keys for navigating search results
                    if (e.key === "ArrowUp") {
                        e.preventDefault();
                        handleCommandSelection("up");
                    } else if (e.key === "ArrowDown") {
                        e.preventDefault();
                        handleCommandSelection("down");
                    }
                }}
            />
        </div>
    );
}