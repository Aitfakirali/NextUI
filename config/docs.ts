interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
  description?: string
}

export const docsConfig: { sidebarNav: NavItem[] } = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          description: "Learn about NexUI and get started with your first project."
        },
        {
          title: "Installation",
          href: "/docs/installation",
          description: "How to install NexUI and integrate it into your project."
        },
        {
          title: "Theming",
          href: "/docs/theming",
          description: "Customize and style your components with themes."
        },
        {
          title: "CLI",
          href: "/docs/cli",
          description: "Use the CLI tools to manage your NexUI components."
        },
        {
          title: "Typography",
          href: "/docs/typography",
          description: "Typography system and text styling guidelines."
        }
      ]
    },
    {
      title: "Components",
      items: [
        {
          title: "Data Display",
          items: [
            {
              title: "Avatar",
              href: "/docs/components/avatar",
              description: "Display user profile images and initials."
            },
            {
              title: "Badge",
              href: "/docs/components/badge",
              description: "Small numerical value or status descriptor."
            },
            {
              title: "Card",
              href: "/docs/components/card",
              description: "Container for content and actions."
            },
            {
              title: "Table",
              href: "/docs/components/table",
              description: "Display tabular data with sorting and filtering."
            },
            {
              title: "Timeline",
              href: "/docs/components/timeline",
              description: "Display chronological sequence of events."
            },
            {
              title: "Tree View",
              href: "/docs/components/tree-view",
              description: "Display hierarchical data structure."
            },
            {
              title: "Skeleton",
              href: "/docs/components/skeleton",
              description: "Loading placeholder for content."
            },
            {
              title: "Stats",
              href: "/docs/components/stats",
              description: "Display statistical information and metrics."
            }
          ]
        },
        {
          title: "Forms",
          items: [
            {
              title: "Button",
              href: "/docs/components/button",
              description: "Trigger actions and events."
            },
            {
              title: "Checkbox",
              href: "/docs/components/checkbox",
              description: "Select multiple options from a set."
            },
            {
              title: "Color Picker",
              href: "/docs/components/color-picker",
              description: "Select and customize colors."
            },
            {
              title: "Date Picker",
              href: "/docs/components/date-picker",
              description: "Select dates and date ranges."
            },
            {
              title: "Form",
              href: "/docs/components/form",
              description: "Build and validate forms."
            },
            {
              title: "Input",
              href: "/docs/components/input",
              description: "Text input and form controls."
            },
            {
              title: "Radio Group",
              href: "/docs/components/radio-group",
              description: "Select one option from a set."
            },
            {
              title: "Select",
              href: "/docs/components/select",
              description: "Select from predefined options."
            },
            {
              title: "Slider",
              href: "/docs/components/slider",
              description: "Select numeric values with a slider."
            },
            {
              title: "Switch",
              href: "/docs/components/switch",
              description: "Toggle between two states."
            },
            {
              title: "Textarea",
              href: "/docs/components/textarea",
              description: "Multi-line text input."
            }
          ]
        },
        {
          title: "Feedback",
          items: [
            {
              title: "Alert",
              href: "/docs/components/alert",
              description: "Display important messages."
            },
            {
              title: "Progress",
              href: "/docs/components/progress",
              description: "Display progress status."
            },
            {
              title: "Spinner",
              href: "/docs/components/spinner",
              description: "Loading indicator."
            },
            {
              title: "Toast",
              href: "/docs/components/toast",
              description: "Show temporary notifications."
            }
          ]
        },
        {
          title: "Navigation",
          items: [
            {
              title: "Breadcrumb",
              href: "/docs/components/breadcrumb",
              description: "Show navigation hierarchy."
            },
            {
              title: "Navigation Menu",
              href: "/docs/components/navigation-menu",
              description: "Main navigation component."
            },
            {
              title: "Pagination",
              href: "/docs/components/pagination",
              description: "Navigate through pages."
            },
            {
              title: "Sidebar",
              href: "/docs/components/sidebar",
              description: "Side navigation panel."
            },
            {
              title: "Tabs",
              href: "/docs/components/tabs",
              description: "Organize content into tabs."
            }
          ]
        },
        {
          title: "Layout",
          items: [
            {
              title: "Aspect Ratio",
              href: "/docs/components/aspect-ratio",
              description: "Maintain content aspect ratios."
            },
            {
              title: "Container",
              href: "/docs/components/container",
              description: "Content container with max-width."
            },
            {
              title: "Grid",
              href: "/docs/components/grid",
              description: "Responsive grid layout system."
            },
            {
              title: "Stack",
              href: "/docs/components/stack",
              description: "Stack elements vertically or horizontally."
            }
          ]
        },
        {
          title: "Advanced",
          items: [
            {
              title: "Command",
              href: "/docs/components/command",
              description: "Command palette for quick actions."
            },
            {
              title: "Rich Text Editor",
              href: "/docs/components/rich-text-editor",
              description: "WYSIWYG text editor."
            },
            {
              title: "File Upload",
              href: "/docs/components/file-upload",
              description: "Upload files with drag and drop."
            },
            {
              title: "Masonry Grid",
              href: "/docs/components/masonry-grid",
              description: "Pinterest-style dynamic grid."
            }
          ]
        }
      ]
    }
  ]
} 