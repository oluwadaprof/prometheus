# 🐼 Panda DS UI – Primitives & Utilities Guide

Welcome to the Panda Design System UI library! This guide will help you get started with the UI primitives, icons, and utility functions available in this project. It’s designed for new developers joining the project.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Primitives Usage](#primitives-usage)
  - [Avatar](#avatar)
  - [Badge](#badge)
  - [Button](#button)
  - [Email Input](#email-input)
  - [Form](#form)
  - [Framer Animations](#framer-animations)
  - [Hover Card](#hover-card)
  - [Image](#image)
  - [Keyboard Shortcut](#keyboard-shortcut)
  - [Label](#label)
  - [Layout](#layout)
  - [Link](#link)
  - [List](#list)
  - [Loaders (Spinner)](#loaders-spinner)
  - [Pin Input](#pin-input)
  - [Popover](#popover)
  - [Radio Group](#radio-group)
  - [Star Rating](#star-rating)
  - [Tabs](#tabs)
  - [Text](#text)
  - [Tooltip](#tooltip)
- [Icons Usage](#icons-usage)
- [Utilities](#utilities)
  - [Color Utils](#color-utils)
  - [Text Utils](#text-utils)
- [Scripts](#scripts)
  - [Formatting](#formatting)
  - [Linting](#linting)
- [Contributing](#contributing)

---

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Import primitives in your components:**
   ```tsx
   import { Button } from '@/panda-ds-ui/primitives/button'
   ```

---

## Primitives Usage

### Avatar

```tsx
import { Avatar, AvatarGroup } from '@/panda-ds-ui/primitives/avatar'

<Avatar name="Jane Doe" image="https://example.com/jane.jpg" size="md" shape="full" />
<AvatarGroup max={3}>
  <Avatar name="A" />
  <Avatar name="B" />
  <Avatar name="C" />
  <Avatar name="D" />
</AvatarGroup>
```

- **Props:** `name`, `image`, `size`, `shape`, `imageClassName`, `fallbackClassName`
- **AvatarGroup:** `max` (max avatars to show), `size`, `shape`

---

### Badge

```tsx
import { Badge } from '@/panda-ds-ui/primitives/badge'

<Badge look="solid" size="md">New</Badge>
```

- **Variants:** `look` (`solid`, `soft`, `outline`), `size` (`lg`, `md`, `sm`, `xs`)

---

### Button

```tsx
import { Button } from '@/panda-ds-ui/primitives/button'

<Button isLoading>Submit</Button>
```

- **Props:** `isLoading`, `isDisabled`, `loadingText`, `shortcut`, etc.

---

### Email Input

```tsx
import { EmailsInput } from '@/panda-ds-ui/primitives/email-input'

const [emails, setEmails] = useState<string[]>([])
<EmailsInput emails={emails} setEmails={setEmails} />
```

---

### Form

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/panda-ds-ui/primitives/form'
import { Input } from '@/panda-ds-ui/primitives/input'
import { Button } from '@/panda-ds-ui/primitives/button'

const formSchema = z.object({
  firstname: z.string().min(2, 'Name too short').max(50, 'Name too long'),
  lastname: z.string().min(2, 'Name too short').max(50, 'Name too long'),
  email: z.string().email().max(100, 'Email too long')
})

type SignupInputs = z.infer<typeof formSchema>

const SignupForm = () => {
  const form = useForm<SignupInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: ''
    }
  })

  const onSubmit = (data: SignupInputs) => {
    // handle submit
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input placeholder="Firstname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input placeholder="Lastname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Continue</Button>
      </form>
    </Form>
  )
}
```

---

### Input

```tsx
import { Input } from '@/panda-ds-ui/primitives/input'

<Input placeholder="Type here..." />
```

---

### Framer Animations

```tsx
import { FadeIn } from '@/panda-ds-ui/primitives/framer'

<FadeIn>Animated Content</FadeIn>
```

---

### Hover Card

```tsx
import { HoverCardContent } from '@/panda-ds-ui/primitives/hover-card'

<HoverCardContent>Details on hover</HoverCardContent>
```

---

### Image

```tsx
import { Image } from '@/panda-ds-ui/primitives/image'

<Image src="..." alt="..." />
```

---

### Keyboard Shortcut

```tsx
import { KeyboardShortcut } from '@/panda-ds-ui/primitives/keyboard-shortcut'

<KeyboardShortcut>Ctrl + S</KeyboardShortcut>
```

---

### Label

```tsx
import { Label } from '@/panda-ds-ui/primitives/label'

<Label htmlFor="input-id">Label</Label>
```

---

### Layout

```tsx
import { Box, Flex } from '@/panda-ds-ui/primitives/layout'

<Flex align="center" justify="between">
  <Box>Left</Box>
  <Box>Right</Box>
</Flex>
```

---

### Link

```tsx
import { NextLink } from '@/panda-ds-ui/primitives/link'

<NextLink href="/about">About</NextLink>
```

---

### List

```tsx
import { List } from '@/panda-ds-ui/primitives/list'

<List>
  <li>Item 1</li>
  <li>Item 2</li>
</List>
```

---

### Loaders (Spinner)

```tsx
import { Spinner } from '@/panda-ds-ui/primitives/loaders/spinner'

<Spinner size="md" look="primary" />
```

---

### Pin Input

```tsx
import { PinInput } from '@/panda-ds-ui/primitives/pin-input'

<PinInput value={code} onChange={setCode} numInputs={4} />
```

---

### Popover

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@/panda-ds-ui/primitives/popover'

<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Popover content</PopoverContent>
</Popover>
```

---

### Radio Group

```tsx
import { RadioGroup, RadioGroupItem } from '@/panda-ds-ui/primitives/radio-group'

<RadioGroup>
  <RadioGroupItem value="1" />
  <RadioGroupItem value="2" />
</RadioGroup>
```

---

### Star Rating

```tsx
import { StarRating } from '@/panda-ds-ui/primitives/star-rating'

<StarRating value={rating} onValueChange={setRating} />
```

---

### Tabs

```tsx
import { TabsList, TabTrigger, TabContent } from '@/panda-ds-ui/primitives/tabs'

<TabsList>
  <TabTrigger value="tab1">Tab 1</TabTrigger>
  <TabTrigger value="tab2">Tab 2</TabTrigger>
</TabsList>
<TabContent value="tab1">Content 1</TabContent>
<TabContent value="tab2">Content 2</TabContent>
```

---

### Text

```tsx
import { Text, Heading, Span, Pre, Code, Kbd } from '@/panda-ds-ui/primitives/text'

<Heading as="h1">Title</Heading>
<Text maxLines={2}>Some text</Text>
<Span>Inline</Span>
<Pre>Preformatted</Pre>
<Code>const a = 1</Code>
<Kbd>Ctrl+C</Kbd>
```

---

### Tooltip

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/panda-ds-ui/primitives/tooltip'

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## Icons Usage

```tsx
import { SomeIcon } from '@/panda-ds-ui/icons/base'

<SomeIcon size={24} themeColor="primary" />
```

- All icons accept `size` and `themeColor` props.

---

## Utilities

### Color Utils

```ts
import { stringToDesignSystemColor } from '@/utils/colors'

// Returns a color name based on a string (e.g., for avatar backgrounds)
const color = stringToDesignSystemColor('Jane Doe')
```

---

### Text Utils

```ts
import { getNameInitials } from '@/utils/text'

// Returns initials from a name string
const initials = getNameInitials('Jane Doe') // "JD"
```

---

## Scripts

### Formatting

- **Format code:**  
  ```bash
  pnpm format
  # or
  npm run format
  ```
- Uses Prettier for code formatting.

### Linting

- **Lint code:**  
  ```bash
  pnpm lint
  # or
  npm run lint
  ```
- Uses ESLint for code linting.

---

## Contributing

- Follow the code style enforced by the linter and formatter.
- Use the provided primitives and utilities for consistency.
- When adding new primitives or icons, document their usage in this README.

---

**Welcome aboard! If you have any questions, check the code for examples or ask a teammate. 🐼** 