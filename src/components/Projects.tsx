const projects = [
  {
    title: "CreatX Dashboard",
    description: "Key implementation of a dashboard, simulating analytics for a content creator.",
    image: "/analytics.png",
    tags: ["UI/UX Design", "Next.Js", "Tailwind", "GraphQL"],
    link: "projects/analytics",
  },
  {
    title: "Helpdesk Dashboard",
    description: "A simple implementation of a ticket system for a software company.",
    image: "/helpdesk.png",
    tags: ["UI/UX Design", "Next.js", "Tailwind",],
    link: "projects/helpdesk",
  },
  {
    title: "Example One Page",
    description: "A simple one-page website for a window cleaning company.",
    image: "/landingpage.png",
    tags: ['Frontend Design', 'Next.js', 'Tailwind'],
    link: "projects/landingpage",
  },
  {
    title: "weather_cli",
    description: "Simple, FOSS built with Python leveraging the OpenWeatherMap API to cache and provide weather results to stdout.",
    image: "/weather_cli.png",
    tags: ['Command Line', 'Python', 'API'],
    link: "https://github.com/hexyncode/weather_cli",
  },
  {
    title: "WeatherWise",
    description: "Frontend for a weather app, using the OpenWeatherMap API to check the weather and temperature of a location (in both C and F) and then utilize OpenAI to provide activities in the area and outfits based on the current weather.",
    image: "/weatherwise.png",
    tags: ['Fullstack Development', 'API', 'React', 'LLM', 'Tailwind'],
    link: "projects/weatherwise.html"
  },
  {
    title: "TranslaQ",
    description: "A translation app that translates English into other languages in a business-formal manner, utilizing the Google Translate and OpenAI API's. Note: Service is hosted on a Render.com Free Plan and may need time to start up.",
    image: "/translaq.png",
    tags: ['Fullstack Development', 'Python', 'Django', 'SASS', 'Tailwind', 'API', 'LLM'],
    link: "https://formalizer-spanish.onrender.com/",
  }
];

const Projects = () => {
  return (
<section id="projects" className="py-20">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-primary rounded-lg overflow-hidden flex flex-col">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
          <div className="p-6 flex flex-col flex-1">
            
            {/* Top content: title + description */}
            <div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
            </div>

            {/* Bottom content: tags + button */}
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {project.link !== "#" && (
                <a
                  href={project.link}
                  className="w-full block text-center bg-accent/40 rounded-full px-3 py-3 text-accent font-bold hover:underline"
                  target={project.link.startsWith('projects/') ? '_self' : '_blank'}
                  rel={project.link.startsWith('projects/') ? undefined : 'noopener noreferrer'}
                >
                  View Project{' '}
                  {project.link.startsWith('https://github.com')
                    ? '(Github)'
                    : project.link.startsWith('projects/')
                      ? ''
                      : '(External Site)'}
                </a>
              )}
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Projects;