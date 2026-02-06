import Amazon from "../assets/Amazon.svg";

import Hubspot from "../assets/Hubspot.svg";
import Notion from "../assets/Notion.svg";
import Netflix from "../assets/Netflix.svg";

const TrustedBy = () => {
  const logos = [Amazon, Hubspot, Notion, Netflix];

  return (
    <section className="px-8 py-12">
      <div className="flex justify-center">
        <div className="relative flex justify-center">
          <div
            className="absolute top-1/2 h-px bg-[#E5E5E5]"
            style={{ width: "480px" }}
          />

          <div className="relative z-10 flex items-center gap-20 bg-white px-8">
            {" "}
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="brand logo"
                className="h-28 w-auto object-contain opacity-80"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
