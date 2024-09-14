import React from 'react';
import Typed from 'typed.js';

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I am a Cybersecurity student ",
    "I have expertise in C++, java",
    "I specialize in web development.",
    "Building responsive and secure web applications is my passion."],
      typeSpeed: 70,
      backSpeed: 30,
      startDelay:900
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="typedjs">
      <span ref={el} />
    </div>
  );
}
export default MyComponent;