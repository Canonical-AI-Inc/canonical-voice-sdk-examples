## Canonical Voice SDK Components

This repository provides examples of how to use each component of the Canonical Voice SDK, as seen in the Dashboard at [https://voice.canonical.chat](https://voice.canonical.chat).

### SDK Installation

Install the SDK using npm:

```bash
npm install @canonicalai/voice
```

### Usage

Each subdirectory in this repository represents a specific component and includes a runnable example. To get started:

```bash
git clone https://github.com/canonicalai/canonical-voice-sdk-examples.git
cd canonical-voice-sdk-examples/<EXAMPLE_NAME>
cp .env.example .env
# Edit the .env file to include your Canonical API key
npm install
npm run dev
```

Each subdirectory also contains a README that:

- Explains how to run the example
- Details how to use the component in your own project
- Describes the CSS variables that can be customized

#### Basic Component Usage

```tsx
import { CANONICAL_COMPONENT, CanonicalProviders } from "@canonicalai/voice";

const apiKey = ; // read the API key from the .env file or something
function App() {
  return (
    <CanonicalProviders apiKey={apiKey}>
      <CANONICAL_COMPONENT />
    </CanonicalProviders>
  );
};
```

To use a component, wrap it in the `CanonicalProviders` component and pass your API key. This ensures the component can access the API key and interact with the Canonical API.

### Styling Components

Components come with default styles that can be overridden using CSS variables. Each component's README outlines the available CSS variables. To customize styles, use the `className` prop and define CSS variables in a class. For example:

```css
.component-styles {
  --callflow-background-color: #f0f0f0;
}
```

```tsx
import { CANONICAL_COMPONENT, CanonicalProviders } from "@canonicalai/voice";
import "./component-styles.css";

function App() {
  return (
    <CanonicalProviders apiKey={apiKey}>
      <CANONICAL_COMPONENT className="component-styles" />
    </CanonicalProviders>
  );
}
```

### Available Components

#### Call Flow Chart (Sankey Chart)

The Call Flow Chart example demonstrates how to use the Canonical Voice SDK to create a call flow visualization. To run the example:

1. Clone the repository:
   ```bash
   git clone https://github.com/canonicalai/canonical-voice-sdk-examples.git
   ```
2. Navigate to the example directory and follow the setup steps outlined in the README file.

Each example README includes detailed instructions, code snippets, and customization options to help you seamlessly integrate the component into your project.
