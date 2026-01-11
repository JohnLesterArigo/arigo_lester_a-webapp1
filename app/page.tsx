export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-indigo-600">
              TailwindDemo
            </h1>

            <div className="hidden md:flex space-x-8">
              <a href="#intro" className="text-gray-700 hover:text-indigo-600 transition">Intro</a>
              <a href="#buttons" className="text-gray-700 hover:text-indigo-600 transition">Buttons</a>
              <a href="#colors" className="text-gray-700 hover:text-indigo-600 transition">Colors</a>
              <a href="#typography" className="text-gray-700 hover:text-indigo-600 transition">Typography</a>
              <a href="#layouts" className="text-gray-700 hover:text-indigo-600 transition">Layouts</a>
            </div>

            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

    
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

       
      <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            LESSON CODING BLOG:
          </h1>
          <p className="text-6xl text-gray-600">
           A guide to
          </p>
         
        </section>

        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Tailwind CSS Components
          </h1>
          <p className="text-xl text-gray-600">
            A showcase of beautiful, responsive components built with Tailwind CSS
          </p>
        </section>

        
        <section id="intro" className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is Tailwind CSS?
          </h2>

          <p className="text-gray-700 mb-4">
            Tailwind CSS is a utility-first CSS framework that helps developers design
            websites faster and more efficiently. Instead of writing custom CSS,
            developers apply utility classes directly to HTML elements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">
                Utility-First
              </h3>
              <p className="text-sm text-gray-600">
                Apply spacing, margins, colors, and layout styles directly in your HTML.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">
                Responsive Design
              </h3>
              <p className="text-sm text-gray-600">
                Build responsive layouts easily using breakpoint prefixes like md and lg.
              </p>
            </div>
          </div>
        </section>

      
        <section id="buttons" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Buttons
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-sm text-gray-500 mb-4">
              Hover over the buttons to see state changes.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition">
                Primary Button
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">
                Success Button
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition">
                Danger Button
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition">
                Secondary Button
              </button>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition">
                Outline Button
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition">
                Gradient Button
              </button>
            </div>
          </div>
        </section>

       
        <section id="colors" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Color Palette
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-red-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-red-700 ">Red-500</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-blue-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-blue-700">Blue-500</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-green-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-green-700">Green-500</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gray-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Gray-500</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-indigo-600 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-indigo-700">Indigo-600</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-white border-2 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-300">White</p>
              </div>
            </div>
          </div>
        </section>

       
        <section id="typography" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Typography
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-black">
  Heading 1 – Extra Large
</h1>

              <h2 className="text-2xl font-bold text-black">Heading 2 - Large</h2>
              <h3 className="text-1xl font-bold text-black">Heading 3 - Medium</h3>

              

              <p className="text-xl text-gray-700">
                This is a large paragraph with <span className="font-bold text-indigo-600">text-xl</span>.
              </p>
              <p className="text-base text-gray-700">
                This is a regular paragraph with <span className="font-bold text-indigo-600">text-base</span>.
              </p>
              <p className="text-sm text-gray-700">
                This is small text with <span className="font-bold text-indigo-600">text-sm</span>.
              </p>

              <p className="font-bold text-black">This is bold text.</p>
              <p className="italic text-black">This is italic text.</p>
              <p className="underline text-blue-600">This is underlined text.</p>
            </div>
          </div>
        </section>

     
        <section id="layouts" className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 ">
            Layout Examples
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-black">Grid Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-500 text-white p-6 rounded">Card 1</div>
              <div className="bg-green-500 text-white p-6 rounded">Card 2</div>
              <div className="bg-purple-500 text-white p-6 rounded">Card 3</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4 text-black">Flex Layout</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-red-500 text-white p-4 rounded">Item 1</div>
              <div className="bg-yellow-500 text-white p-4 rounded">Item 2</div>
              <div className="bg-green-500 text-white p-4 rounded">Item 3</div>
              <div className="bg-teal-500 text-white p-4 rounded">Item 4</div>
            </div>
          </div>
        </section>

        <section id="setup" className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    Basic Setup Overview (Step-by-Step)
  </h2>

 <div className="space-y-10">

  <p className="text-slate-700 leading-relaxed">
    Before working with Tailwind CSS, you need to complete a basic project setup.
    In this guide, Tailwind CSS is implemented using a Next.js project.
    The steps below give a simple overview of how to prepare your development environment.
  </p>

  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
    <p className="italic text-blue-700">
      The download links for the required applications are available in the
      resources section at the bottom of this page.
    </p>
  </div>

  <section>
    <h3 className="text-xl font-semibold text-indigo-600 mb-2">
      Step 1: Prepare the Requirements
    </h3>
    <p className="text-slate-600 mb-3">
      Ensure that the following tools are installed and ready to use:
    </p>
    <ul className="list-disc list-inside text-slate-600 space-y-1">
      <li>Git and GitHub Desktop</li>
      <li>A GitHub account</li>
      <li>Node.js</li>
      <li>Visual Studio Code</li>
      <li>A stable internet connection</li>
      <li>A device running macOS, Windows, or Linux</li>
    </ul>

    <p className="mt-3 text-sm italic text-violet-700">
      Note: This step is very important because missing or incorrect installations
      may cause errors later. If you are unfamiliar with these tools, a tutorial
      will be provided below.
    </p>
  </section>

  <section>
    <h3 className="text-xl font-semibold text-indigo-600 mb-2">
      Step 2: Create a Repository
    </h3>
    <p className="text-slate-600">
      Open GitHub Desktop and create a new repository.
      Enter the necessary project details and select Node.js
      as the project environment.
    </p>

    <p className="text-sm italic text-violet-700 mt-2">
      Note: If you are unsure how to create a repository, watch this{" "}
      <a
        href="https://www.youtube.com/watch?v=IX4_12SFxak"
        target="_blank"
        className="font-medium underline hover:text-violet-900"
      >
        video tutorial
      </a>.
    </p>
  </section>

  <section>
    <h3 className="text-xl font-semibold text-indigo-600 mb-2">
      Step 3: Open the Project in Visual Studio Code
    </h3>
    <p className="text-slate-600">
      After creating the repository, open the project folder using
      Visual Studio Code. This will be your main editor for managing
      and writing the code.
    </p>
  </section>

  <section>
    <h3 className="text-xl font-semibold text-indigo-600 mb-2">
      Step 4: Verify the Setup
    </h3>
    <p className="text-slate-600 mb-2">
      Open the terminal in Visual Studio Code and run the following
      commands to verify that Node.js and npm are installed correctly:
    </p>

    <div className="bg-slate-900 text-slate-100 rounded p-4 text-sm font-mono">
      npm -v <br />
      node -v
    </div>
  </section>

  <section>
    <h3 className="text-xl font-semibold text-indigo-600 mb-2">
      Step 5: Run the Development Server
    </h3>
    <p className="text-slate-600">
      Start the development server using the command below.
      Once the server is running, open the local link shown
      in the terminal to view the project.
    </p>

    <div className="bg-slate-900 text-slate-100 rounded p-4 mt-2 text-sm font-mono">
      npm run dev
    </div>

    <p className="text-sm text-violet-700 mt-2">
      Note: Running the command multiple times without stopping
      the previous process may cause Next.js to use a different
      port number, such as localhost:3001.
    </p>
  </section>

  <section>
    <h3 className="text-xl font-semibold text-indigo-600 mb-2">
      Step 6: Begin Customization
    </h3>
    <p className="text-slate-600">
      After confirming that the project runs successfully,
      you can begin customizing the layout and applying
      Tailwind CSS utility classes.
    </p>
  </section>

  <p className="text-sm text-slate-500 pt-6 border-t">
    These steps complete the initial setup and allow you
    to focus on learning and using Tailwind CSS effectively.
  </p>

</div>


</section>


      </main>

     
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-bold">TailwindDemo</p>
          <p className="text-sm text-gray-400 mt-2">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>

    </div>
  );
}