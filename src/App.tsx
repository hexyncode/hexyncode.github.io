// PortfolioApp.tsx
import {
  Tabs,
  TabsContent,
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { type FC, useState, type JSX } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark, stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FileText, FileJson, FileCode, Mail, Sun, Moon } from 'lucide-react';

interface Section {
  id: string;
  label: string;
  icon: JSX.Element;
}

const sections: Section[] = [
  { id: 'about', label: 'about.py', icon: <FileCode size={16} /> },
  { id: 'projects', label: 'projects.jsonc', icon: <FileJson size={16} /> },
  { id: 'experience', label: 'experience.md', icon: <FileText size={16} /> },
  { id: 'contact', label: 'contact.ts', icon: <Mail size={16} /> },
];

const PortfolioApp: FC = (): JSX.Element => {
  const [tab, setTab] = useState('about');
  const [dark, setDark] = useState(true);

  const codeContent: Record<string, string> = {
    about: `# About Me
    
def about():
    name = "Callum Howell"
    nickname = ["hexyn", "slippuu"]
    role = "Full-Stack Developer / Software Engineer"
    stack = ["Django", "React", "Python", "C#", ".NET"]

    print(f"Hi, I'm {name}, a {role}.")
    print(f"I also go by online nicknames:")
    for name in nickname:
        print(f"  - {name}")
    print(f"I specialize in {', '.join(stack)}.")

if __name__ == "__main__":
    about()
`,

    projects: `// Projects
{
  "name": "ClientFlow",
  "description": "CRM platform focused on invoicing and taxes for sole traders and small businesses",
  "tech": ["Django", "React", "PostgreSQL"],
  "links": {
    "demo": "https://clientflow.onrender.dev",
    "github": "https://github.com/hexyncode/bizaide"
  }
}
`,

    experience: `// Experience
class Experience
{
    public string Role { get; set; }
    public string Description { get; set; }

    public static void Main()
    {
        var experiences = new List<Experience>
        {
            new Experience { Role = "Freelance Full-Stack Developer", Description = "Built custom business tools for tax and logistics." },
            new Experience { Role = "Open Source Contributor", Description = "PRs to Django REST framework and custom UI libraries." }
        };

        foreach (var exp in experiences)
        {
            Console.WriteLine($"- {exp.Role}: {exp.Description}");
        }
    }
}
`,

    contact: `// Contact Me
const contact = {
  email: "callum@example.com",
  github: "https://github.com/callum",
  linkedin: "https://linkedin.com/in/callum"
}`,
  };

  return (
    <main className={`min-h-screen flex flex-col font-mono px-4 py-6 sm:px-6 md:px-12 overflow-x-hidden transition-colors duration-300 ${dark ? 'bg-[#1e1e1e] text-white' : 'bg-white text-black'}`}>
      <div className="w-full max-w-6xl mx-auto border border-zinc-700 rounded-lg overflow-hidden shadow-lg">
        <div className={`px-4 py-2 flex items-center gap-2 ${dark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-200 text-zinc-800'}`}>
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-4 text-sm">~/portfolio</span>
          <Button
            className={`ml-auto text-xs px-2 py-1 ${dark ? 'bg-zinc-700 text-zinc-400' : 'bg-zinc-200'}`}
            onClick={() => setDark((d) => !d)}
            variant="outline"
          >
            {!dark ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
          </Button>
        </div>
        <div className={`${dark ? 'bg-[#1c1b1b]' : 'bg-[#f6f6f6]'} flex flex-col md:flex-row w-full`}>
          <aside className={`${dark ? 'bg-zinc-800 border-zinc-700' : 'bg-zinc-200 border-zinc-300'} w-full md:w-48 border-b md:border-r p-3`}>
            <ul className="text-sm space-y-2">
              {sections.map((s) => (
                <li
                  key={s.id}
                  className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-zinc-700 ${tab === s.id ? 'bg-zinc-700 text-blue-400' : ''}`}
                  onClick={() => setTab(s.id)}
                >
                  {s.icon} {s.label}
                </li>
              ))}
            </ul>
          </aside>
          <div className="flex-1 p-4">
            <Tabs value={tab} onValueChange={setTab}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`${dark ? 'bg-zinc-800' : 'bg-zinc-200'} rounded-md`}
                >
                  <TabsContent value={tab} className="focus:outline-none">
                    <SyntaxHighlighter
                      language={tab === 'projects' ? 'json' : tab === 'contact' ? 'typescript' : tab === 'experience' ? 'csharp' : 'python'}
                      style={dark ? stackoverflowDark : stackoverflowLight}
                      wrapLongLines={true}
                      customStyle={{ backgroundColor: dark ? '#1c1b1b' : '#f6f6f6', whiteSpace: 'pre-wrap' }}
                    >
                      {codeContent[tab] || 'Loading...'}
                    </SyntaxHighlighter>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
        <footer className={`text-xs px-4 py-2 text-center ${dark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-200 text-zinc-700'}`}>
          © 2025 Callum Howell. Made with &lt;3
        </footer>
      </div>
    </main>
  );
};

export default PortfolioApp;
