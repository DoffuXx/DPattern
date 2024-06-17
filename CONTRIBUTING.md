# Contributing to DPATERRN 🧰

Thank you for considering contributing to DPATERRN! Your help is essential for keeping it great.
- [Getting Started](#getting-started)
- [Adding a New Pattern](#adding-a-new-pattern)
## Getting Started

1. **Fork the repository**: Click on the 'Fork' button at the top right corner of the repository page.

2. **Clone your forked repository**:
   ```bash
   git clone https://github.com/DoffuXx/DPattern.git
   cd DPATERRN
3. **Install dependencies**:
 ```bash
  npm install
  ```
4. **Create a new branch for your feature or bug fix:**:
```bash
  git checkout -b feature-or-bugfix-name
  ```
## Adding a New Pattern
1. Create your page using React Flow in `src/components/designPatterns/pages`.
For example, create MyNewPattern.tsx:
``` typescript
import React from 'react';
import ReactFlow from 'react-flow-renderer';

const MyNewPattern = () => {
  // Your React Flow diagram and code here
};

export default MyNewPattern;
```
2. Register your new pattern in `src/registry/app/navLinks.ts` by adding it to the navLinks array:
```typescript
 {
    title: "Creational Patterns",
    icon: IconPencilPlus,
    subLinks: [
      {
        title: "Factory",
        path: "factory",
        icon: IconBuildingFactory2,
        element: <Factory />,
      },
   // Here 👇
      {
        title: "My New Pattern",
        path: "my-new-pattern",
        icon: IconBuildingFactory2,
        element: <MyNewPattern />,
      },
    ],
  },
];

export default navLinks;
```
3. Commit your changes:
``` bash
git add .
git commit -m "Add MyNewPattern"
```
4.Push your changes to your forked repository:
```bash
git push origin feature-or-bugfix-name
```
5. Create a pull request: Go to the original repository and click on 'New Pull Request'.

**Thank you for your contribution! ❤️**


