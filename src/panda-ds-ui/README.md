# 🐼 Panda DS UI – Primitives & Utilities Guide

<div align="center" style="font-size:1.2rem; color:#4F46E5; font-family:'Inter', 'Segoe UI', Arial, sans-serif; margin-bottom:2rem;">
  <strong>Welcome to the Panda Design System UI library!</strong><br/>
  <span style="color:#64748B;">A beautiful, modern, and flexible UI toolkit for your next project.</span>
</div>

---

## <span style="color:#6366F1;">📦 Table of Contents</span>

- [Getting Started](#getting-started)
- [Primitives Usage](#primitives-usage)
  - [Avatar 🧑‍🎨](#avatar)
  - [Badge 🏷️](#badge)
  - [Button 🔘](#button)
  - [Email Input 📧](#email-input)
  - [Form 📝](#form)
  - [Framer Animations 🎞️](#framer-animations)
  - [Hover Card 🪄](#hover-card)
  - [Image 🖼️](#image)
  - [Keyboard Shortcut ⌨️](#keyboard-shortcut)
  - [Label 🏷️](#label)
  - [Layout 📐](#layout)
  - [Link 🔗](#link)
  - [List 📝](#list)
  - [Loaders (Spinner) 🌀](#loaders-spinner)
  - [Pin Input 🔢](#pin-input)
  - [Popover 💬](#popover)
  - [Radio Group 🔘](#radio-group)
  - [Star Rating ⭐](#star-rating)
  - [Tabs 🗂️](#tabs)
  - [Text 📝](#text)
  - [Tooltip 💡](#tooltip)
- [Icons Usage](#icons-usage)
- [Utilities](#utilities)
  - [Color Utils 🎨](#color-utils)
  - [Text Utils ✂️](#text-utils)
- [Scripts](#scripts)
  - [Formatting 🧹](#formatting)
  - [Linting 🕵️‍♂️](#linting)
- [Contributing](#contributing)

---

## <span style="color:#6366F1;">🚀 Getting Started</span>

<div style="background:#F1F5F9; border-radius:1.5rem; border:2px solid #6366F1; padding:1.5rem; font-family:'Fira Mono', 'Menlo', 'Consolas', monospace; font-size:1rem; margin-bottom:1.5rem;">

```bash
pnpm install
# or
npm install
```

</div>

Import primitives in your components:

<div style="background:#F1F5F9; border-radius:1.5rem; border:2px solid #6366F1; padding:1.5rem; font-family:'Fira Mono', 'Menlo', 'Consolas', monospace; font-size:1rem; margin-bottom:1.5rem;">

```tsx
import { Button } from '@/panda-ds-ui/primitives/button'
```

</div>

---

## <span style="color:#6366F1;">🧩 Primitives Usage</span>

### <span style="color:#F59E42;">Button 🔘</span>

**All Props:**
- All native `<button>` props (e.g., `onClick`, `type`, etc.)
- `isLoading?: boolean`
- `isDisabled?: boolean`
- `loadingText?: string`
- `tooltipContentProps?: TooltipContentProps`
- `tooltipChildren?: React.ReactNode`
- `shortcut?: React.ReactNode`
- **Variants:**
  - `look?: 'form' | 'ghost' | 'solid' | 'soft' | 'outline' | 'underline' | 'transparent'` (default: `'solid'`)
  - `size?: 'md' | 'sm' | 'xs' | 'attribute' | 'auto'` (default: `'sm'`)
  - `use?: 'link' | 'button'` (default: `'button'`)
- **Style props:** All [JsxStyleProps](https://panda-css.com/docs/styling/jsx-prop) (e.g., `p`, `mx`, `color`, `bg`, `rounded`, `fontWeight`, `h`, `w`, etc.)

**Default Styling:**
```tsx
<Button>
  Default Button
</Button>
```
- Rounded: `xl`
- Font weight: `500`
- Padding: `px: 1.5` (sm), `px: 3.2` (md)
- Height: `3.2rem` (sm), `3.8rem` (md)
- Color: `brand.grayA`
- Display: `inline-flex`, `alignItems: center`, `justifyContent: center`

**Minified Style Props Example:**
```tsx
<Button p="1" mx="2" color="red.9" bg="gray.2" rounded="md" fontWeight="bold">
  Custom Spacing
</Button>
```

**Custom Style Example:**
```tsx
import { css } from '@panda-ds-ui/styled-system/css'

<Button className={css({ bg: 'blue.6', color: 'white', px: '4', py: '2', border: '2px solid #333', boxShadow: 'md', letterSpacing: '0.1em' })}>
  Custom Styled Button
</Button>
```

**Inline Style Example:**
```tsx
<Button style={{ background: 'linear-gradient(to right, #e66465, #9198e5)', borderRadius: 12, fontSize: 18 }}>
  Gradient Button
</Button>
```

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

**All Props:**
- `size?: 'md' | 'sm' | 'xs' | 'attribute' | 'auto'` (default: `'sm'`)
- All style props (e.g., `px`, `py`, `gap`, `opacity`, `rounded`, `my`, etc.)

**Default Styling:**
- Display: `flex`
- Padding: `px: 0.5`, `py: 1px`
- Gap: `0.5`
- Opacity: `0.8`
- Rounded: `sm` (default)

**Minified Style Example:**
```tsx
<KeyboardShortcut px="1" py="0.5" rounded="md" gap="2" opacity="1">
  ⌘K
</KeyboardShortcut>
```

**Custom Style Example:**
```tsx
<KeyboardShortcut className={css({ bg: 'gray.2', color: 'gray.11', px: '2', py: '1', border: '1px solid #ccc', borderRadius: 6 })}>
  Custom Shortcut
</KeyboardShortcut>
```

**Inline Style Example:**
```tsx
<KeyboardShortcut style={{ background: '#eee', color: '#333', padding: '2px 8px', borderRadius: 4 }}>
  Inline
</KeyboardShortcut>
```

---

### Label

```tsx
import { Label } from '@/panda-ds-ui/primitives/label'

<Label htmlFor="input-id">Label</Label>
```

---

### Layout

**All Props:**
- All style props (e.g., `p`, `mx`, `color`, `bg`, `rounded`, `fontSize`, `w`, `h`, `align`, `justify`, etc.)

**Default Styling:**
- Varies by primitive (e.g., `Flex`, `Box`, `VStack`, etc.)

**Minified Style Example:**
```tsx
<Flex p="2" mx="auto" align="center" justify="between" gap="4" bg="gray.2">
  <Box p="1" bg="white">Left</Box>
  <Box p="1" bg="white">Right</Box>
</Flex>
```

**Custom Style Example:**
```tsx
<VStack className={css({ gap: '2', alignItems: 'flex-start', bg: 'blue.1', p: '4', borderRadius: 'lg' })}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</VStack>
```

**Inline Style Example:**
```tsx
<Stack style={{ background: '#fafafa', padding: 16, borderRadius: 8, gap: 8 }}>
  <Box>Stacked 1</Box>
  <Box>Stacked 2</Box>
</Stack>
```

---

### Link

```tsx
import { NextLink } from '@/panda-ds-ui/primitives/link'

<NextLink href="/about">About</NextLink>
```

---

### List

**All Props:**
- All native `<ul>`, `<ol>`, `<li>` props
- `look?: 'ordered' | 'unordered'`
- All style props (e.g., `mb`, `p`, `color`, `fontSize`, etc.)

**Default Styling:**
- Margin bottom: `1.5`
- List style: `decimal` (ordered), `disc` (unordered)

**Minified Style Example:**
```tsx
<Li look="unordered" mb="2" p="1" color="gray.10" fontSize="1.5">
  List item
</Li>
```

**Custom Style Example:**
```tsx
<Li className={css({ color: 'red.8', fontWeight: 'bold', fontSize: '2', px: '2', py: '1' })}>
  Custom list item
</Li>
```

**Inline Style Example:**
```tsx
<Li style={{ color: '#333', fontSize: 18, padding: '4px 12px', background: '#f0f0f0' }}>
  Inline styled list item
</Li>
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

**All Props:**
- All native text element props (e.g., `<p>`, `<span>`, `<pre>`, `<code>`, `<kbd>`)
- `maxLines?: number`
- All style props (e.g., `color`, `fontWeight`, `fontSize`, `p`, `mx`, etc.)

**Default Styling:**
- Inherits from styled system, can be customized

**Minified Style Example:**
```tsx
<Text p="1" color="gray.11" maxLines={2} fontWeight="bold" fontSize="2">
  Truncated bold text
</Text>
```

**Custom Style Example:**
```tsx
<Text className={css({ fontWeight: 'bold', fontSize: '2', color: 'blue.10', letterSpacing: '0.05em' })}>
  Custom styled text
</Text>
```

**Inline Style Example:**
```tsx
<Text style={{ color: '#e66465', fontSize: 20, fontWeight: 700, padding: 8 }}>
  Inline styled text
</Text>
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

### Color Utils 🎨

```ts
import { stringToDesignSystemColor } from '@/utils/colors'

// Returns a color name based on a string (e.g., for avatar backgrounds)
const color = stringToDesignSystemColor('Jane Doe')
```

---

### Text Utils ✂️

```ts
import { getNameInitials } from '@/utils/text'

// Returns initials from a name string
const initials = getNameInitials('Jane Doe') // "JD"
```

---

## Scripts

### Formatting 🧹

- **Format code:**  
  ```bash
  pnpm format
  # or
  npm run format
  ```
- Uses Prettier for code formatting.

### Linting 🕵️‍♂️

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