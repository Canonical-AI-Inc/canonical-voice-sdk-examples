## Call Flow Chart (Sankey Chart)

Use this example to see how to use the Canonical Voice SDK to create a call flow chart.
To run the example, clone the repository and run

```bash
cp .env.example .env
# edit the .env file with your Canonical API key
npm install
npm run dev
```

Open the browser and navigate to `http://localhost:3000`.

## CallFlow Component Documentation

### Usage

There are two required pieces of information to use this component, the `apiKey` and the `assistantId`. The `apiKey` is your Canonical API key and can be found in the [Canonical Dashboard](https://voice.canonical.chat/home/settings). The `assistantId` is the ID of the assistant you want to visualize the call flow for. If you're using the Canonical API to send calls, the `assistantId` is the value of the `assistant.id` field in the call request. The component's other properties are defined below.

```tsx
import { CallFlowChart, CanonicalProviders } from "@canonicalai/voice";

function App() {
  return (
    <CanonicalProviders apiKey={apiKey}>
      <CallFlowChart
        assistantId="YOUR_ASSISTANT_ID"
        width={1000}
        height={400}
      />
    </CanonicalProviders>
  );
}
```

### Props

The `CallFlow` component accepts the following props:

| Prop Name       | Type                                   | Default                 | Required | Description                                                                               |
| --------------- | -------------------------------------- | ----------------------- | -------- | ----------------------------------------------------------------------------------------- |
| `width`         | `number`                               | `800`                   | No       | Specifies the width of the chart in pixels.                                               |
| `height`        | `number`                               | `600`                   | No       | Specifies the height of the chart in pixels.                                              |
| `className`     | `string`                               | `null`                  | No       | Adds a custom CSS class to the root container for additional styling.                     |
| `assistantId`   | `string`                               | -                       | Yes      | Identifier for the assistant whose call flow data is to be visualized.                    |
| `startDate`     | `string` (ISO 8601 format, YYYY-MM-DD) | `null`                  | No       | Start date for filtering call data.                                                       |
| `endDate`       | `string` (ISO 8601 format, YYYY-MM-DD) | `null`                  | No       | End date for filtering call data.                                                         |
| `colors`        | `string[]`                             | `null`                  | No       | Array of color codes used for chart elements. If not provided, a default palette is used. |
| `marginLeft`    | `number`                               | `CallFlowMargin.Left`   | No       | Left margin of the chart in pixels.                                                       |
| `marginRight`   | `number`                               | `CallFlowMargin.Right`  | No       | Right margin of the chart in pixels.                                                      |
| `marginTop`     | `number`                               | `CallFlowMargin.Top`    | No       | Top margin of the chart in pixels.                                                        |
| `marginBottom`  | `number`                               | `CallFlowMargin.Bottom` | No       | Bottom margin of the chart in pixels.                                                     |
| `showSkeleton`  | `boolean`                              | `true`                  | No       | Whether to show a loading skeleton while data is being fetched.                           |
| `animateAppear` | `boolean`                              | `true`                  | No       | Whether to animate the appearance of the chart when it loads.                             |

### Styling the Component

This component has a default style that can be overridden using CSS variables. The CSS variables are defined in `CallFlowStyles.ts` and described in detail below. The recommended way to override the styles is to use the `className` prop on the component and set the CSS variables in the class. Here's an example of how to do this:

```css
.canonical-callflow-chart {
  --callflow-background-color: #f0f0f0;
}
```

```tsx
import { CallFlowChart, CanonicalProviders } from "@canonicalai/voice";
import "./component-styles.css";

function App() {
  return (
    <CanonicalProviders apiKey={apiKey}>
      <CallFlowChart className="canonical-callflow-chart" />
    </CanonicalProviders>
  );
}
```

## Call Flow Chart Style Guide

This document provides a detailed description of the CSS variables defined in `CallFlowStyles.ts`, outlining their purpose and the specific styling they control in the Call Flow visualization.

### CSS Variables and Their Roles

#### General Variables

- `--callflow-background-color`

  - **Purpose**: Sets the background color for the Call Flow visualization container.
  - **Usage**: Applied to the overall container to ensure consistent visual background.

- `--callflow-font-family`

  - **Purpose**: Defines the font family used across the visualization.
  - **Usage**: Applied to text elements for consistency in typography.

#### Node Styles

- `--callflow-node-lowlight`

  - **Purpose**: Color for nodes that are not highlighted.
  - **Usage**: Ensures non-focused nodes fade into the background.

- `--callflow-node-lowlight-opacity`

  - **Purpose**: Opacity for nodes that are not highlighted.
  - **Usage**: Adds visual hierarchy by dimming inactive nodes.

- `--callflow-node-highlight-opacity`

  - **Purpose**: Opacity for nodes that are highlighted.
  - **Usage**: Ensures the focused nodes stand out.

- `--callflow-node-label-color`

  - **Purpose**: Color for the node labels.
  - **Usage**: Improves label readability for active nodes.

- `--callflow-node-label-lowlight-color`

  - **Purpose**: Color for the labels of non-highlighted nodes.
  - **Usage**: Reduces the visual prominence of inactive node labels.

- `--callflow-node-label-font-size`

  - **Purpose**: Font size for the node labels.
  - **Usage**: Ensures labels are appropriately sized for readability.

- `--callflow-node-label-font-weight`

  - **Purpose**: Font weight for the node labels.
  - **Usage**: Controls the visual weight of the labels for emphasis.

#### Link Styles

- `--callflow-link-lowlight`

  - **Purpose**: Color for links that are not highlighted.
  - **Usage**: Keeps inactive links visually subdued.

- `--callflow-link-lowlight-opacity`

  - **Purpose**: Opacity for non-highlighted links.
  - **Usage**: Enhances focus on active links by reducing prominence of inactive ones.

- `--callflow-link-highlight-opacity`

  - **Purpose**: Opacity for highlighted links.
  - **Usage**: Makes active links more prominent in the visualization.

#### Tooltip Styles

- `--callflow-tooltip-background-color`

  - **Purpose**: Background color of the tooltip.
  - **Usage**: Provides a clear contrast for tooltip readability.

- `--callflow-tooltip-border-radius`

  - **Purpose**: Controls the border radius of the tooltip.
  - **Usage**: Enhances the visual style with rounded corners.

- `--callflow-tooltip-padding`

  - **Purpose**: Padding inside the tooltip container.
  - **Usage**: Ensures content is visually balanced within the tooltip.

- `--callflow-tooltip-opacity`

  - **Purpose**: Controls the opacity of tooltips.
  - **Usage**: Defines the visibility of tooltips during hover.

- `--callflow-tooltip-transition`

  - **Purpose**: Specifies the transition effects for tooltips.
  - **Usage**: Adds smooth appearance and disappearance animations.

- `--callflow-tooltip-header-color`

  - **Purpose**: Sets the color of the tooltip header text.
  - **Usage**: Highlights the tooltip's title.

- `--callflow-tooltip-header-font-size`

  - **Purpose**: Font size for the tooltip header.
  - **Usage**: Ensures title prominence within the tooltip.

- `--callflow-tooltip-header-font-weight`

  - **Purpose**: Font weight for the tooltip header.
  - **Usage**: Enhances the emphasis on the title.

- `--callflow-tooltip-body-color`

  - **Purpose**: Sets the text color for the tooltip body.
  - **Usage**: Maintains readability of the main tooltip content.

- `--callflow-tooltip-body-font-size`

  - **Purpose**: Font size for the tooltip body text.
  - **Usage**: Ensures tooltip content is legible.

- `--callflow-tooltip-body-font-weight`

  - **Purpose**: Font weight for the tooltip body text.
  - **Usage**: Enhances content readability and structure.

- `--callflow-tooltip-ul-gap`

  - **Purpose**: Gap between items in the unordered list inside the tooltip.
  - **Usage**: Improves the spacing and layout of list items.

- `--callflow-tooltip-ul-list-style`

  - **Purpose**: Defines the list style of tooltip unordered lists.
  - **Usage**: Allows customization of list item markers.

- `--callflow-tooltip-hr-color`

  - **Purpose**: Color of the horizontal rule in tooltips.
  - **Usage**: Provides a visual separator between sections.

#### Skeleton Loader Styles

- `--callflow-skeleton-opacity`

  - **Purpose**: Sets the opacity of the skeleton loader.
  - **Usage**: Controls the visibility of the loader during data loading.

- `--callflow-skeleton-font-size`

  - **Purpose**: Font size of the skeleton loader message.
  - **Usage**: Ensures the message is readable.

- `--callflow-skeleton-transition`

  - **Purpose**: Specifies the transition effect for the skeleton loader.
  - **Usage**: Provides a smooth transition when the loader appears or disappears.

- `--callflow-skeleton-transition-delay`

  - **Purpose**: Delays the transition effect for the skeleton loader.
  - **Usage**: Ensures a graceful transition timing.
