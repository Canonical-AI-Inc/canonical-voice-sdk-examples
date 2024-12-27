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
