---
category: Components
group: Data Display
title: Collapse
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*B7HKR5OBe8gAAAAAAAAAAAAADrJ8AQ/original
---

A content area which can be collapsed and expanded.

## When To Use

- Can be used to group or hide complex regions to keep the page clean.
- `Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time.

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Collapse</code>
<code src="./demo/accordion.tsx">Accordion</code>
<code src="./demo/mix.tsx">Nested panel</code>
<code src="./demo/borderless.tsx">Borderless</code>
<code src="./demo/custom.tsx">Custom Panel</code>
<code src="./demo/noarrow.tsx">No arrow</code>
<code src="./demo/extra.tsx">Extra node</code>
<code src="./demo/ghost.tsx">Ghost Collapse</code>
<code src="./demo/collapsible.tsx">Collapsible</code>

## API

### Collapse

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| accordion | If true, Collapse renders as Accordion | boolean | false |  |
| activeKey | Key of the active panel | string\[] \| string <br/> number\[] \| number | No default value. In `accordion` mode, it's the key of the first panel |  |
| bordered | Toggles rendering of the border around the collapse block | boolean | true |  |
| collapsible | Specify whether the panels of children be collapsible or the trigger area of collapsible | `header` \| `icon` \| `disabled` | - | 4.9.0 |
| defaultActiveKey | Key of the initial active panel | string\[] \| string <br/> number\[] \| number | - |  |
| destroyInactivePanel | Destroy Inactive Panel | boolean | false |  |
| expandIcon | Allow to customize collapse icon | (panelProps) => ReactNode | - |  |
| expandIconPosition | Set expand icon position | `start` \| `end` | - | 4.21.0 |
| ghost | Make the collapse borderless and its background transparent | boolean | false | 4.4.0 |
| onChange | Callback function executed when active panel is changed | function | - |  |

### Collapse.Panel

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| collapsible | Specify whether the panel be collapsible or the trigger area of collapsible | `header` \| `icon` \| `disabled` | - | 4.9.0 (icon: 4.24.0) |
| extra | The extra element in the corner | ReactNode | - |  |
| forceRender | Forced render of content on panel, instead of lazy rendering after clicking on header | boolean | false |  |
| header | Title of the panel | ReactNode | - |  |
| key | Unique key identifying the panel from among its siblings | string \| number | - |  |
| showArrow | If false, panel will not show arrow icon. If false, collapsible can't be set as icon | boolean | true |  |