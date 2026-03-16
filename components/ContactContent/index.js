import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ContactContent = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <div
        className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
          } hover:scale-105 link`}
      >
        <h2 className="text-3xl">Contact</h2>
        <div className="mt-5">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2414.9195623853175!2d5.11345283815617!3d52.751686438847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1773651988720!5m2!1sen!2snl"
                width="100%" height="480" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Ons adres</h3>
                  <p className="mt-1 text-gray-600">Droge Wijmersweg 5<br /> 1693 HP<br /> Wervershoof</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">Email: <a href="mailto:info@vlietlanden.nl">info@vlietlanden.nl</a></p>
                  <p className="mt-1 text-gray-600">Telefoon: <a href="tel:+31228581491">+31(0) 228 - 58 14 91</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
