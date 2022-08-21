import { forwardRef, useEffect, useRef } from "react";

const ClickOutsideDetector = forwardRef(function ClickOutsideDetector(
    { listen, onClickOutside, ignore, ...props },
    ref
) {
    const container = useRef(null);

    const onKeyUp = (e) => {
        if (e.keyCode === 27) onClickOutside();
        handleEvent(e);
    };

    const handleEvent = (e) => {
        if (container.current.contains(e.target)) return;

        if (ignore && ignore.contains && ignore.contains(e.target)) {
            return;
        }

        onClickOutside();
    };

    useEffect(() => {
        if (listen && onClickOutside) {
            document.addEventListener("mousedown", handleEvent, false);
            document.addEventListener("touchend", handleEvent, false);
            document.addEventListener("keyup", onKeyUp);

            return () => {
                document.removeEventListener("mousedown", handleEvent, false);
                document.removeEventListener("touchend", handleEvent, false);
                document.removeEventListener("keyup", onKeyUp);
            };
        }
    });

    return <div ref={container} {...props} />;
});

export default ClickOutsideDetector;
