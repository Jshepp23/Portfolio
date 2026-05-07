import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-20">

        <section className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg shadow-blue-500/20">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Jaden Sheppard
            </h1>

            <p className="text-gray-400 mt-2">
              Software Engineer | Backend Systems | Data-Focused Applications
            </p>

            <p className="mt-4 text-gray-300 max-w-xl">
              Computer Science graduate from the University of Alabama with experience
              building backend systems using modern frameworks and tools. Focused on
              scalable APIs, authentication, security, and data-driven applications.
            </p>

            <div className="mt-4 flex gap-4 text-sm">
              <a
                href="https://github.com/Jshepp23"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jaden-sheppard-0a254521a/"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:jadensheppard23@gmail.com"
                className="hover:text-blue-400 transition"
              >
                Email
              </a>
{/* 
              <a
                href="/Jaden_Sheppard_Resume.pdf"
                download
                className="hover:text-blue-400 transition"
              >
                Resume
              </a> */}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="bg-gray-800 px-3 py-1 rounded">Python</span>
            <span className="bg-gray-800 px-3 py-1 rounded">C/C++</span>
            <span className="bg-gray-800 px-3 py-1 rounded">SQL</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Java</span>
            <span className="bg-gray-800 px-3 py-1 rounded">TypeScript</span>
            <span className="bg-gray-800 px-3 py-1 rounded">FastAPI</span>
            <span className="bg-gray-800 px-3 py-1 rounded">React</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Next.js</span>
            <span className="bg-gray-800 px-3 py-1 rounded">PostgreSQL</span>
            <span className="bg-gray-800 px-3 py-1 rounded">AWS</span>
            <span className="bg-gray-800 px-3 py-1 rounded">JWT</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Git</span>
            <span className="bg-gray-800 px-3 py-1 rounded">CodeQL</span>
            <span className="bg-gray-800 px-3 py-1 rounded">AFL++</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">
                Full-Stack Job Tracker (In Progress)
              </h3>

              <p className="text-gray-400 mt-2">
                Building a production-style job tracking platform using FastAPI,
                PostgreSQL, Next.js, and JWT authentication. Features include
                secure authentication, analytics dashboards, application tracking,
                and RESTful backend APIs.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-800 px-2 py-1 rounded">FastAPI</span>
                <span className="bg-gray-800 px-2 py-1 rounded">PostgreSQL</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-800 px-2 py-1 rounded">JWT</span>
              </div>

              <a
                href="https://github.com/Jshepp23/job-tracker"
                target="_blank"
                className="inline-block mt-4 text-sm text-blue-400 hover:underline"
              >
                View Progress →
              </a>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">
                AI Facility Management System
              </h3>

              <p className="text-gray-400 mt-2">
                Built backend APIs using FastAPI and PostgreSQL to support authentication,
                role-based access control, and predictive maintenance scoring. Designed REST endpoints
                and handled data processing logic for risk analysis across facility assets.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-800 px-2 py-1 rounded">FastAPI</span>
                <span className="bg-gray-800 px-2 py-1 rounded">PostgreSQL</span>
                <span className="bg-gray-800 px-2 py-1 rounded">AWS</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Cognito</span>
              </div>

              <div className="mt-4 flex gap-4 text-sm">
                <a
                  href="https://github.com/CS495-FacilityManagement/Next-Web-App-Backend/tree/main"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Code →
                </a>

                <a
                  href="https://www.youtube.com/watch?v=efFMyLwLpzQ"
                  target="_blank"
                  className="text-purple-400 hover:underline"
                >
                  Demo →
                </a>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">
                University Authorization System (RBAC + ABAC)
              </h3>

              <p className="text-gray-400 mt-2">
                Designed a secure authorization system combining role-based and attribute-based access control.
                Implemented JWT authentication, password hashing, and policy-based access rules to manage permissions
                for student services and administrative functionality.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-800 px-2 py-1 rounded">RBAC</span>
                <span className="bg-gray-800 px-2 py-1 rounded">ABAC</span>
                <span className="bg-gray-800 px-2 py-1 rounded">JWT</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Security</span>
              </div>

              <a
                href="https://github.com/Jshepp23/access-control-system"
                className="inline-block mt-4 text-sm text-blue-400 hover:underline"
              >
                Code →
              </a>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">
                Program Analysis & Security Tooling
              </h3>

              <p className="text-gray-400 mt-2">
                Applied static and dynamic analysis techniques using tools like CodeQL and AFL++ to identify
                vulnerabilities and analyze program behavior. Used fuzz testing and runtime analysis to detect bugs
                and understand low-level execution patterns.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-800 px-2 py-1 rounded">CodeQL</span>
                <span className="bg-gray-800 px-2 py-1 rounded">AFL++</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Fuzzing</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Static Analysis</span>
              </div>

              <a
                href="https://github.com/Jshepp23/program-analysis-security/tree/main"
                className="inline-block mt-4 text-sm text-blue-400 hover:underline"
              >
                Details →
              </a>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">
                Clox Interpreter
              </h3>

              <p className="text-gray-400 mt-2">
                Built a bytecode interpreter in C implementing lexical analysis,
                parsing, and a virtual machine for executing custom language instructions.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-800 px-2 py-1 rounded">C</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Bytecode</span>
                <span className="bg-gray-800 px-2 py-1 rounded">VM</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Parsing</span>
              </div>

              <a
                href="https://github.com/Jshepp23/Clox-interpreter"
                target="_blank"
                className="inline-block mt-4 text-sm text-blue-400 hover:underline"
              >
                View Code →
              </a>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">
                Lisp Interpreter
              </h3>

              <p className="text-gray-400 mt-2">
                Developed a Lisp interpreter supporting recursion, evaluation,
                and symbolic computation with custom parsing and execution logic.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-800 px-2 py-1 rounded">Parsing</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Recursion</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Interpreters</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Evaluation</span>
              </div>

              <a
                href="https://github.com/Jshepp23/Lisp-interpreter"
                target="_blank"
                className="inline-block mt-4 text-sm text-blue-400 hover:underline"
              >
                View Code →
              </a>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}