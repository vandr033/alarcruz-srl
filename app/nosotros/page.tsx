import React from 'react';

const Team = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet our Team</h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </p>
        </div>
        {/* text - end */}

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {/* person - start */}
          <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
              <img
                src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Radu Florin"
                className="h-full w-full object-cover object-center rounded-full"
              />
            </div>

            <div>
              <div className="text-center font-bold text-indigo-500 sm:text-left md:text-lg">John McCulling</div>
              <p className="text-center text-sm text-gray-500 sm:text-left md:text-base">Founder / CEO</p>
            </div>
          </div>
          {/* person - end */}

          {/* Add similar code blocks for other team members */}

        </div>
      </div>
    </div>
  );
};

export default Team;
