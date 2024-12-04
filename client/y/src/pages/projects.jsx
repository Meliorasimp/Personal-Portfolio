const Projects = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-800 to-gray-900 p-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-16 mt-20">These are the Projects I made</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 max-w-md">
            <h1 className="text-3xl font-bold text-white mb-6">To Do List App</h1>
            <div className="w-full h-64">
              <img src="../images/todolistapp.png" alt="To Do List App Screenshot" className="object-cover w-full h-full rounded-lg shadow-md" />
            </div>
            <p className="text-white mt-4">
              A simple to-do list app to keep track of your tasks and increase productivity.
            </p>
            <a href="https://drive.google.com/uc?export=download&id=1B6HMLnmIITHWv-JGQByeYAM6qz64a5HX" download className="mt-4 p-2 rounded-md hover:bg-gray-600">Download Source Code</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;
  