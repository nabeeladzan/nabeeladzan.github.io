import {makeStore} from "@powertrains/Store.ts";

// Define the state interface for our library stack
interface TerminalHistoryState {
    terminalHistory: string[];
}

// Define the action interface for modifying the state
interface TerminalHistoryActions {
    addLineToHistory: (line: string) => void;
    clearHistory: () => void;
}

export const useTerminalHistoryStore = makeStore<TerminalHistoryState, TerminalHistoryActions>((set) => ({
    // Initial State
    terminalHistory: [],

    // Actions (Corrected and using Immer syntax)
    addLineToHistory: (line: string) =>
        set((state) => {
            // Immer lets you "mutate" the state directly.
            // It handles the immutable update for you.
            state.terminalHistory.push(line);
        }),

    clearHistory: () =>
        set((state) => {
            // Same here, just reassign the array.
            state.terminalHistory = [];
        }),
}));