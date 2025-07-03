"use client";

import {
    Typography,
    H1, H2, H3, H4, H5, H6,
    Body, SmallText, Caption,
    Subtitle, Overline,
    Link, Code, Pre, Blockquote,
    Label, HelperText, ErrorText
} from "@akitectio/aki-ui";
import ComponentExample from "@/components/ComponentExample";

export default function TypographyPage() {
    return (
        <div className="space-y-8">
            <div>
                <H1 className="mb-4">Typography</H1>
                <Body className="text-lg text-gray-600 mb-6">
                    Typography components for consistent text styling across your application.
                </Body>
            </div>

            <section>
                <H2 className="mb-4">Basic Typography</H2>
                <Body className="mb-4">
                    The Typography component provides a flexible way to render text with consistent styling.
                </Body>

                <ComponentExample
                    title="Custom Typography"
                    code={`import { Typography } from "@akitectio/aki-ui";

// Basic typography example with variants
<Typography variant="h1" className="mb-2">
  Custom H1 Typography
</Typography>
<Typography variant="body1" color="secondary">
  This is body text with gray color
</Typography>`}
                >
                    <div className="space-y-2">
                        <Typography variant="h1" className="mb-2">Custom H1 Typography</Typography>
                        <Typography variant="body1" color="secondary">This is body text with gray color</Typography>
                    </div>
                </ComponentExample>
            </section>

            <section>
                <H2 className="mb-4">Heading Components</H2>
                <Body className="mb-4">
                    Pre-configured heading components for consistent typography hierarchy.
                </Body>

                <ComponentExample
                    title="All Heading Levels"
                    code={`import { H1, H2, H3, H4, H5, H6 } from "@akitectio/aki-ui";

<H1 className="mb-2">Heading 1</H1>
<H2 className="mb-2">Heading 2</H2>
<H3 className="mb-2">Heading 3</H3>
<H4 className="mb-2">Heading 4</H4>
<H5 className="mb-2">Heading 5</H5>
<H6>Heading 6</H6>`}
                >
                    <div className="space-y-2">
                        <H1>Heading 1</H1>
                        <H2>Heading 2</H2>
                        <H3>Heading 3</H3>
                        <H4>Heading 4</H4>
                        <H5>Heading 5</H5>
                        <H6>Heading 6</H6>
                    </div>
                </ComponentExample>
            </section>

            <section>
                <H2 className="mb-4">Text Components</H2>
                <Body className="mb-4">
                    Components for different types of text content.
                </Body>

                <ComponentExample
                    title="Body Text Variants"
                    code={`import { Body, SmallText, Caption } from "@akitectio/aki-ui";

<Body className="mb-3">
  This is regular body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Body>
<SmallText className="mb-3">
  This is smaller text, often used for captions or secondary information.
</SmallText>
<Caption>
  This is caption text, typically used for image captions or fine print.
</Caption>`}
                >
                    <div className="space-y-3">
                        <Body>
                            This is regular body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Body>
                        <SmallText>
                            This is smaller text, often used for captions or secondary information.
                        </SmallText>
                        <Caption>
                            This is caption text, typically used for image captions or fine print.
                        </Caption>
                    </div>
                </ComponentExample>
            </section>

            <section>
                <H2 className="mb-4">Semantic Components</H2>
                <Body className="mb-4">
                    Components with semantic meaning and specialized styling.
                </Body>

                <ComponentExample
                    title="Subtitle and Overline"
                    code={`import { Overline, Subtitle, Body } from "@akitectio/aki-ui";

<Overline className="mb-2">OVERLINE TEXT</Overline>
<Subtitle className="mb-2">This is a subtitle</Subtitle>
<Body>Regular body text follows the subtitle.</Body>`}
                >
                    <div className="space-y-2">
                        <Overline>OVERLINE TEXT</Overline>
                        <Subtitle>This is a subtitle</Subtitle>
                        <Body>Regular body text follows the subtitle.</Body>
                    </div>
                </ComponentExample>

                <ComponentExample
                    title="Links"
                    code={`import { Body, Link } from "@akitectio/aki-ui";

<Body className="mb-2">
  This paragraph contains a <Link href="#example">regular link</Link> and an{" "}
  <Link href="#external" external>external link</Link>.
</Body>`}
                >
                    <Body>
                        This paragraph contains a <Link href="#example">regular link</Link> and an{" "}
                        <Link href="#external" external>external link</Link>.
                    </Body>
                </ComponentExample>
            </section>

            <section>
                <H2 className="mb-4">Code and Preformatted Text</H2>
                <Body className="mb-4">
                    Components for displaying code and preformatted text.
                </Body>

                <ComponentExample
                    title="Inline Code"
                    code={`import { Body, Code } from "@akitectio/aki-ui";

<Body>
  Use the <Code>useState</Code> hook to manage component state in React.
</Body>`}
                >
                    <Body>
                        Use the <Code>useState</Code> hook to manage component state in React.
                    </Body>
                </ComponentExample>

                <ComponentExample
                    title="Code Block"
                    code={`import { Pre } from "@akitectio/aki-ui";

<Pre>
{\`function Example() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}\`}
</Pre>`}
                >
                    <Pre>
                        {`function Example() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}
                    </Pre>
                </ComponentExample>
            </section>

            <section>
                <H2 className="mb-4">Form and UI Text</H2>
                <Body className="mb-4">
                    Specialized text components for forms and user interfaces.
                </Body>

                <ComponentExample
                    title="Labels and Messages"
                    code={`import { Label, HelperText, ErrorText } from "@akitectio/aki-ui";

<div className="space-y-3">
  <Label>Email Address</Label>
  <HelperText>Enter a valid email address</HelperText>
  <ErrorText>This field is required</ErrorText>
</div>`}
                >
                    <div className="space-y-3">
                        <Label>Email Address</Label>
                        <HelperText>Enter a valid email address</HelperText>
                        <ErrorText>This field is required</ErrorText>
                    </div>
                </ComponentExample>
            </section>

            <section>
                <H2 className="mb-4">Blockquotes</H2>
                <Body className="mb-4">
                    Components for displaying quoted content.
                </Body>

                <ComponentExample
                    title="Blockquote"
                    code={`import { Blockquote } from "@akitectio/aki-ui";

<Blockquote>
  "Design is not just what it looks like and feels like. Design is how it works."
  <footer className="mt-2 text-sm text-gray-600">— Steve Jobs</footer>
</Blockquote>`}
                >
                    <Blockquote>
                        "Design is not just what it looks like and feels like. Design is how it works."
                        <footer className="mt-2 text-sm text-gray-600">— Steve Jobs</footer>
                    </Blockquote>
                </ComponentExample>
            </section>

            <section>
                <H2 className="mb-4">Typography Variants Showcase</H2>
                <Body className="mb-4">
                    A comprehensive example showing all typography components together.
                </Body>

                <ComponentExample
                    title="Complete Typography Example"
                    code={`import { 
  H1, H2, H3, H4, H5, H6,
  Body, SmallText, Caption, 
  Subtitle, Overline,
  Link, Code, Pre, Blockquote,
  Label, HelperText, ErrorText
} from "@akitectio/aki-ui";

<div className="space-y-6 max-w-4xl">
  {/* Headings */}
  <section>
    <H2 className="mb-4">Heading Hierarchy</H2>
    <div className="space-y-2">
      <H1>Main Title (H1)</H1>
      <H2>Section Title (H2)</H2>
      <H3>Subsection Title (H3)</H3>
      <H4>Minor Heading (H4)</H4>
      <H5>Small Heading (H5)</H5>
      <H6>Smallest Heading (H6)</H6>
    </div>
  </section>

  {/* Text Content */}
  <section>
    <H3 className="mb-4">Text Content</H3>
    <Overline className="mb-2">CATEGORY LABEL</Overline>
    <Subtitle className="mb-3">Article subtitle goes here</Subtitle>
    <Body className="mb-3">
      This is the main body text. It provides the primary content and information. 
      It should be easily readable and well-structured.
    </Body>
    <SmallText className="mb-2">
      This is smaller supporting text for additional details.
    </SmallText>
    <Caption>Image caption or metadata information</Caption>
  </section>

  {/* Interactive Elements */}
  <section>
    <H3 className="mb-4">Interactive Elements</H3>
    <Body className="mb-3">
      Visit our <Link href="#home">homepage</Link> or check out our{" "}
      <Link href="#docs" external>documentation</Link> for more information.
    </Body>
  </section>

  {/* Code Examples */}
  <section>
    <H3 className="mb-4">Code Examples</H3>
    <Body className="mb-3">
      Use the <Code>useState</Code> hook for state management:
    </Body>
    <Pre className="mb-4">
{\`const [state, setState] = useState(initialValue);
const handleChange = (newValue) => {
  setState(newValue);
};\`}
    </Pre>
  </section>

  {/* Quote */}
  <section>
    <H3 className="mb-4">Quotations</H3>
    <Blockquote>
      "Good design is obvious. Great design is transparent."
      <footer className="mt-2 text-sm text-gray-600">— Joe Sparano</footer>
    </Blockquote>
  </section>

  {/* Form Elements */}
  <section>
    <H3 className="mb-4">Form Elements</H3>
    <div className="space-y-2">
      <Label>Input Label</Label>
      <HelperText>Helpful instructions or context</HelperText>
      <ErrorText>Validation error message</ErrorText>
    </div>
  </section>
</div>`}
                >
                    <div className="space-y-6 max-w-4xl">
                        {/* Headings */}
                        <section>
                            <H2 className="mb-4">Heading Hierarchy</H2>
                            <div className="space-y-2">
                                <H1>Main Title (H1)</H1>
                                <H2>Section Title (H2)</H2>
                                <H3>Subsection Title (H3)</H3>
                                <H4>Minor Heading (H4)</H4>
                                <H5>Small Heading (H5)</H5>
                                <H6>Smallest Heading (H6)</H6>
                            </div>
                        </section>

                        {/* Text Content */}
                        <section>
                            <H3 className="mb-4">Text Content</H3>
                            <Overline className="mb-2">CATEGORY LABEL</Overline>
                            <Subtitle className="mb-3">Article subtitle goes here</Subtitle>
                            <Body className="mb-3">
                                This is the main body text. It provides the primary content and information.
                                It should be easily readable and well-structured.
                            </Body>
                            <SmallText className="mb-2">
                                This is smaller supporting text for additional details.
                            </SmallText>
                            <Caption>Image caption or metadata information</Caption>
                        </section>

                        {/* Interactive Elements */}
                        <section>
                            <H3 className="mb-4">Interactive Elements</H3>
                            <Body className="mb-3">
                                Visit our <Link href="#home">homepage</Link> or check out our{" "}
                                <Link href="#docs" external>documentation</Link> for more information.
                            </Body>
                        </section>

                        {/* Code Examples */}
                        <section>
                            <H3 className="mb-4">Code Examples</H3>
                            <Body className="mb-3">
                                Use the <Code>useState</Code> hook for state management:
                            </Body>
                            <Pre className="mb-4">
                                {`const [state, setState] = useState(initialValue);
const handleChange = (newValue) => {
  setState(newValue);
};`}
                            </Pre>
                        </section>

                        {/* Quote */}
                        <section>
                            <H3 className="mb-4">Quotations</H3>
                            <Blockquote>
                                "Good design is obvious. Great design is transparent."
                                <footer className="mt-2 text-sm text-gray-600">— Joe Sparano</footer>
                            </Blockquote>
                        </section>

                        {/* Form Elements */}
                        <section>
                            <H3 className="mb-4">Form Elements</H3>
                            <div className="space-y-2">
                                <Label>Input Label</Label>
                                <HelperText>Helpful instructions or context</HelperText>
                                <ErrorText>Validation error message</ErrorText>
                            </div>
                        </section>
                    </div>
                </ComponentExample>
            </section>

            <section>
                <H2 className="mb-4">Props</H2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left border-b">Prop</th>
                                <th className="px-4 py-2 text-left border-b">Type</th>
                                <th className="px-4 py-2 text-left border-b">Default</th>
                                <th className="px-4 py-2 text-left border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border-b font-mono text-sm">variant</td>
                                <td className="px-4 py-2 border-b font-mono text-sm">string</td>
                                <td className="px-4 py-2 border-b">body</td>
                                <td className="px-4 py-2 border-b">Typography variant (h1, h2, h3, h4, h5, h6, body, small, caption, etc.)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b font-mono text-sm">color</td>
                                <td className="px-4 py-2 border-b font-mono text-sm">string</td>
                                <td className="px-4 py-2 border-b">-</td>
                                <td className="px-4 py-2 border-b">Text color variant</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b font-mono text-sm">className</td>
                                <td className="px-4 py-2 border-b font-mono text-sm">string</td>
                                <td className="px-4 py-2 border-b">-</td>
                                <td className="px-4 py-2 border-b">Additional CSS classes</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b font-mono text-sm">children</td>
                                <td className="px-4 py-2 border-b font-mono text-sm">ReactNode</td>
                                <td className="px-4 py-2 border-b">-</td>
                                <td className="px-4 py-2 border-b">Content to display</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b font-mono text-sm">as</td>
                                <td className="px-4 py-2 border-b font-mono text-sm">string</td>
                                <td className="px-4 py-2 border-b">-</td>
                                <td className="px-4 py-2 border-b">HTML element to render as</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b font-mono text-sm">align</td>
                                <td className="px-4 py-2 border-b font-mono text-sm">string</td>
                                <td className="px-4 py-2 border-b">-</td>
                                <td className="px-4 py-2 border-b">Text alignment (left, center, right, justify)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b font-mono text-sm">weight</td>
                                <td className="px-4 py-2 border-b font-mono text-sm">string</td>
                                <td className="px-4 py-2 border-b">-</td>
                                <td className="px-4 py-2 border-b">Font weight (light, normal, medium, semibold, bold)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b font-mono text-sm">noWrap</td>
                                <td className="px-4 py-2 border-b font-mono text-sm">boolean</td>
                                <td className="px-4 py-2 border-b">false</td>
                                <td className="px-4 py-2 border-b">Prevents text wrapping</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b font-mono text-sm">truncate</td>
                                <td className="px-4 py-2 border-b font-mono text-sm">boolean</td>
                                <td className="px-4 py-2 border-b">false</td>
                                <td className="px-4 py-2 border-b">Truncates text with ellipsis</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
