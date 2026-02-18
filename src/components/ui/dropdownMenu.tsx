import * as React from 'react';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, Circle, ChevronRight } from 'lucide-react';
import './dropdown-menu.scss';

const Dropdown = DropdownPrimitive.Root;
const DropdownTrigger = DropdownPrimitive.Trigger;
const DropdownGroup = DropdownPrimitive.Group;
const DropdownPortal = DropdownPrimitive.Portal;
const DropdownSub = DropdownPrimitive.Sub;
const DropdownRadioGroup = DropdownPrimitive.RadioGroup;

const DropdownSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger> & { inset?: boolean }
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.SubTrigger
    ref={ref}
    className="dropdown-subtrigger"
    {...props}
  >
    {children}
    <ChevronRight className="dropdown-chevron" />
  </DropdownPrimitive.SubTrigger>
));
DropdownSubTrigger.displayName = 'DropdownSubTrigger';

const DropdownSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.SubContent
    ref={ref}
    className="dropdown-subcontent"
    {...props}
  >
    {children}
  </DropdownPrimitive.SubContent>
));
DropdownSubContent.displayName = 'DropdownSubContent';

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DropdownPortal>
    <DropdownPrimitive.Content
      ref={ref}
      className="dropdown-content"
      {...props}
    >
      {children}
    </DropdownPrimitive.Content>
  </DropdownPortal>
));
DropdownContent.displayName = 'DropdownContent';

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className="dropdown-item"
    {...props}
  >
    {children}
  </DropdownPrimitive.Item>
));
DropdownItem.displayName = 'DropdownItem';

const DropdownCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>
>(({ children, checked, ...props }, ref) => (
  <DropdownPrimitive.CheckboxItem
    ref={ref}
    className="dropdown-item"
    checked={checked}
    {...props}
  >
    <span className="dropdown-indicator">
      <Check className="dropdown-icon-sm" />
    </span>
    {children}
  </DropdownPrimitive.CheckboxItem>
));
DropdownCheckboxItem.displayName = 'DropdownCheckboxItem';

const DropdownRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.RadioItem
    ref={ref}
    className="dropdown-item"
    {...props}
  >
    <span className="dropdown-indicator">
      <Circle className="dropdown-icon-xs" />
    </span>
    {children}
  </DropdownPrimitive.RadioItem>
));
DropdownRadioItem.displayName = 'DropdownRadioItem';

const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>
>(({ children, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className="dropdown-label"
    {...props}
  >
    {children}
  </DropdownPrimitive.Label>
));
DropdownLabel.displayName = 'DropdownLabel';

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>(({ ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className="dropdown-separator"
    {...props}
  />
));
DropdownSeparator.displayName = 'DropdownSeparator';

const DropdownShortcut = ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className="dropdown-shortcut"
    {...props}
  >
    {children}
  </span>
);
DropdownShortcut.displayName = 'DropdownShortcut';

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownShortcut,
  DropdownGroup,
  DropdownPortal,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownRadioGroup,
};
