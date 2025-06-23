import {motion} from 'framer-motion';

export function Content(props: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <motion.div
            className={"flex w-full h-full flex-col items-center justify-center px-6 " + (props.className ? ` ${props.className}` : '')}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.3}}
        >
            {
                props.children
            }
        </motion.div>
    );
}