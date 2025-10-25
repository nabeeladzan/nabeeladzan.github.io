import {makeStore} from "@powertrains/Store.ts";

interface TerminalHistoryState {
    terminalHistory: string[];
}

interface TerminalHistoryActions {
    addLineToHistory: (line: string) => void;
    clearHistory: () => void;
}

const MAX_HISTORY_ENTRIES = 40;

export const useTerminalHistoryStore = makeStore<TerminalHistoryState, TerminalHistoryActions>((set) => ({
    terminalHistory: [],

    addLineToHistory: (line: string) =>
        set((state) => {
            state.terminalHistory.push(line);
            if (state.terminalHistory.length > MAX_HISTORY_ENTRIES) {
                state.terminalHistory.shift();
            }
        }),

    clearHistory: () =>
        set((state) => {
            state.terminalHistory = [];
        }),
}));
