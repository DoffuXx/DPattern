const Introduction = () => {
  return (
    <div className="font-work-sans space-y-5">
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Introduction
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          DPATERRN is an open-source web application built with React.js, React
          Flow, and TypeScript, designed to help you visualize and understand
          design patterns effortlessly 🧑‍🏭.
        </p>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          How to Use ?
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Pick a Pattern 🧰: Select a design pattern from the side menu.
          </li>
          <li>
            Visualization 🙉: View the selected pattern visualized in an
            interactive diagram.
          </li>
          <li>
            Explore the Code 🧑‍💻: Click on any node within the visualization to
            see its corresponding code implementation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
