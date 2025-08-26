const skills = [
  "Next.js", "Vue.js", "Node.js", "Django", "Javascript",
  "Typescript", "HTML", "CSS", "React", "Tailwind",
  "Firebase", "AWS", "Express", "MongoDB", "PostgreSQL",
  "Python", "ASP.NET", "MySQL"
];

const bgColors = [
  "bg-red-500", "bg-blue-500", "bg-green-500",
  "bg-yellow-500", "bg-purple-500", "bg-pink-500",
  "bg-indigo-500", "bg-teal-500", "bg-orange-500"
];

const shuffleArray = (array: string[]) => {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const Skills = () => {
  const shuffledSkills = shuffleArray(skills);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {shuffledSkills.map((skill, index) => {
            const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];
            return (
              <div
                key={index}
                className={`${randomBg} font-sans text-white py-2 px-4 rounded-lg transition-colors duration-300`}
              >
                {skill}
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;