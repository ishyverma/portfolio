import React from "react";
import EducationCard from "./education-card";

const AllEducation = () => {
  return (
    <div className="space-y-6 mt-4">
      <EducationCard
        picture="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/7ac8663769d24cd09fa06dc7d4f0830c.png"
        name="Newton School Of Technology, Haryana"
        time="2024-2028"
        studied="B.Tech in Computer Science and Aritificial Intelligence"
        description="I am currently pursuing a B.Tech in Computer Science and Artificial Intelligence from NST. My academic journey focuses on core areas such as software development, problem-solving, foundational computer science concepts, and cutting-edge AI technologies. This program is helping me build strong theoretical foundations and practical skills, preparing me to contribute meaningfully to the tech and AI industry."
      />
      <EducationCard
        picture="https://www.lfpsdelhi.com/images/logo.png"
        name="Little Flowers Public Sr. Sec. School, Delhi"
        time="2016-2024"
        studied="High School"
        description="I completed my high school education from Little Flowers Public Sr. Sec. School, where I excelled in core subjects including Mathematics, Physics, Chemistry, and Computer Science. During my time there, I maintained a average academic record."
      />
    </div>
  );
};

export default AllEducation;
