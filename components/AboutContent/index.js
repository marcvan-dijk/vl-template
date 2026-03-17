import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const AboutContent = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 pt-0 mb-20 mob:p-4`}
    >
      <h1 className="text-3xl">About</h1>
      <p className="mt-5 opacity-40 text-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <p className="mt-5 opacity-40 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt quam sed dui malesuada, vel blandit lorem sollicitudin. Praesent quis urna ut libero semper fringilla quis in odio. Suspendisse potenti. Etiam nunc ipsum, lobortis id justo ut, euismod gravida ante. Etiam aliquet rutrum dui, quis tempus diam pellentesque vitae. Praesent at porta nisi. Morbi ligula ipsum, congue at magna non, ullamcorper vehicula ante. Duis eu nulla porttitor, blandit libero eget, egestas urna. Sed congue tempor ante, eleifend aliquet nulla mollis aliquet. Vestibulum sagittis ac lorem tincidunt sodales. Donec euismod tristique nunc, consequat dignissim est porta id. Donec mi turpis, eleifend id auctor non, placerat sed massa.
      </p>
      <p className="mt-5 opacity-40 text-xl">
        Suspendisse at eleifend justo. Aliquam nec nulla suscipit, semper ante id, commodo nulla. Vivamus tincidunt at eros nec sagittis. In orci sapien, varius nec fermentum nec, feugiat eleifend dui. Phasellus vitae maximus dolor, at auctor orci. Aenean vestibulum mattis sapien, ac tincidunt risus interdum vel. Ut nulla lectus, ultricies ac ipsum ac, facilisis malesuada dui. Aenean volutpat nulla eget ligula aliquam facilisis volutpat quis lacus. Mauris pretium purus ligula, et suscipit ante tincidunt a. Curabitur imperdiet lorem facilisis nunc ullamcorper congue. Nam et risus at turpis porta egestas ut vel arcu. Vivamus ultricies pharetra nisl, ut faucibus odio ultricies sit amet.
      </p>
    </div>
  );
};

export default AboutContent;
