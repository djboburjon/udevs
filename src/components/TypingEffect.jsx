import React, { useEffect, useState } from "react";

const statements = [
  "Development of mobile applications",
  "Development and implementation ERP systems",
  "User interface, User experience design",
  "IT consulting",
  "Optimization IT consulting infrastructure",
];

function TypingEffect() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentStatement = statements[loopIndex % statements.length];
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(100);
      } else {
        setDisplayText((prev) =>
          currentStatement.substring(0, prev.length + 1)
        );
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentStatement) {
        setIsDeleting(true);
        setTypingSpeed(1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
        setTypingSpeed(500);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, loopIndex, typingSpeed]);

  return (
    <div className="text-left text-4xl text-blue-700 font-bold mb-10">
      {displayText}
      <span className="border-r-2 border-blue-700 animate-blink"></span>
    </div>
  );
}

export default TypingEffect;
