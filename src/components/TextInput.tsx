import { forwardRef } from 'react';

// It's good practice to define props as a separate type or interface
type TextInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    autoFocus?: boolean;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ value, onChange, placeholder, className, autoFocus }, ref) => {
        return (
            <input
                // 1. The ref from the parent component is attached here
                ref={ref}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`border rounded p-2 ${className || ''}`}
                autoFocus={autoFocus}
            />
        );
    }
);

// This helps in debugging with React DevTools
TextInput.displayName = 'TextInput';

export default TextInput;