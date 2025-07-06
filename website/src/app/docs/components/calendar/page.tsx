'use client'

import { useState } from 'react';
import { Calendar } from '@/components/client-components';
import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/PageHeader';

export default function CalendarPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [dates, setDates] = useState<Date[]>([]);
    const [range, setRange] = useState<{ from: Date; to?: Date } | undefined>();

    return (
        <PageHeader
            title="Calendar"
            description="A date picker calendar component for selecting dates, date ranges, or multiple dates."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <CodeBlock language="typescript">
                        {`import { Calendar } from '@/components/client-components'`}
                    </CodeBlock>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Single Date</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="w-fit">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={(newDate) => setDate(newDate as Date | undefined)}
                                    className="rounded-lg border shadow"
                                />
                                {date && (
                                    <p className="mt-4 text-sm text-gray-600">
                                        Selected: {date.toDateString()}
                                    </p>
                                )}
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={(newDate) => setDate(newDate as Date | undefined)}
  className="rounded-lg border shadow"
/>
{date && (
  <p className="mt-4 text-sm text-gray-600">
    Selected: {date.toDateString()}
  </p>
)}`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Multiple Dates</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="w-fit">
                                <Calendar
                                    mode="multiple"
                                    selected={dates}
                                    onSelect={(newDates) => setDates(newDates as Date[])}
                                    className="rounded-lg border shadow"
                                />
                                {dates.length > 0 && (
                                    <div className="mt-4 text-sm text-gray-600">
                                        <p>Selected dates ({dates.length}):</p>
                                        <ul className="list-disc list-inside max-h-32 overflow-y-auto">
                                            {dates.map(date => (
                                                <li key={date.toISOString()}>{date.toDateString()}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`const [dates, setDates] = useState<Date[]>([]);

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={(newDates) => setDates(newDates as Date[])}
  className="rounded-lg border shadow"
/>
{dates.length > 0 && (
  <div className="mt-4 text-sm text-gray-600">
    <p>Selected dates ({dates.length}):</p>
    <ul className="list-disc list-inside max-h-32 overflow-y-auto">
      {dates.map(date => (
        <li key={date.toISOString()}>{date.toDateString()}</li>
      ))}
    </ul>
  </div>
)}`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Date Range</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="w-fit">
                                <Calendar
                                    mode="range"
                                    selected={range}
                                    onSelect={(newRange) => setRange(newRange as { from: Date; to?: Date } | undefined)}
                                    className="rounded-lg border shadow"
                                />
                                {range && (
                                    <div className="mt-4 text-sm text-gray-600">
                                        <p>Selected range:</p>
                                        <p>From: {range.from.toDateString()}</p>
                                        {range.to && <p>To: {range.to.toDateString()}</p>}
                                    </div>
                                )}
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`const [range, setRange] = useState<{ from: Date; to?: Date } | undefined>();

<Calendar
  mode="range"
  selected={range}
  onSelect={(newRange) => setRange(newRange as { from: Date; to?: Date } | undefined)}
  className="rounded-lg border shadow"
/>
{range && (
  <div className="mt-4 text-sm text-gray-600">
    <p>Selected range:</p>
    <p>From: {range.from.toDateString()}</p>
    {range.to && <p>To: {range.to.toDateString()}</p>}
  </div>
)}`}
                        </CodeBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">With Disabled Dates</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="w-fit">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={(newDate) => setDate(newDate as Date | undefined)}
                                    disabled={(date) => {
                                        const day = date.getDay();
                                        const today = new Date();
                                        today.setHours(0, 0, 0, 0);
                                        return day === 0 || day === 6 || date < today; // Disable weekends and past dates
                                    }}
                                    className="rounded-lg border shadow"
                                />
                                <div className="mt-4 text-sm text-gray-600">
                                    <p>Weekends and past dates are disabled</p>
                                    {date && <p>Selected: {date.toDateString()}</p>}
                                </div>
                            </div>
                        </div>
                        <CodeBlock language="jsx">
                            {`<Calendar
  mode="single"
  selected={date}
  onSelect={(newDate) => setDate(newDate as Date | undefined)}
  disabled={(date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return day === 0 || day === 6 || date < today; // Disable weekends and past dates
  }}
  className="rounded-lg border shadow"
/>`}
                        </CodeBlock>
                    </div>
                </section>
            </div>
        </PageHeader>
    );
}
