import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../lib/components/Calendar';
import { useState } from 'react';

const meta: Meta<typeof Calendar> = {
    title: 'Components/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A date picker calendar component for selecting dates, date ranges, or multiple dates.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        mode: {
            control: 'select',
            options: ['single', 'multiple', 'range'],
            description: 'Selection mode'
        },
        showOutsideDays: {
            control: 'boolean',
            description: 'Whether to show days from previous/next months'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());

        return (
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
        );
    }
};

export const Multiple: Story = {
    render: () => {
        const [dates, setDates] = useState<Date[]>([]);

        return (
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
        );
    }
};

export const Range: Story = {
    render: () => {
        const [range, setRange] = useState<{ from: Date; to?: Date } | undefined>();

        return (
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
        );
    }
};

export const WithDisabledDates: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());

        // Disable weekends
        const isWeekend = (date: Date) => {
            const day = date.getDay();
            return day === 0 || day === 6; // Sunday = 0, Saturday = 6
        };

        // Disable past dates
        const isPastDate = (date: Date) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return date < today;
        };

        const isDisabled = (date: Date) => {
            return isWeekend(date) || isPastDate(date);
        };

        return (
            <div className="w-fit">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => setDate(newDate as Date | undefined)}
                    disabled={isDisabled}
                    className="rounded-lg border shadow"
                />
                <div className="mt-4 text-sm text-gray-600">
                    <p>Weekends and past dates are disabled</p>
                    {date && <p>Selected: {date.toDateString()}</p>}
                </div>
            </div>
        );
    }
};

export const WithoutOutsideDays: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());

        return (
            <div className="w-fit">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => setDate(newDate as Date | undefined)}
                    showOutsideDays={false}
                    className="rounded-lg border shadow"
                />
                {date && (
                    <p className="mt-4 text-sm text-gray-600">
                        Selected: {date.toDateString()}
                    </p>
                )}
            </div>
        );
    }
};

export const Styled: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());

        return (
            <div className="w-fit">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Choose a Date</h3>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(newDate) => setDate(newDate as Date | undefined)}
                        className="rounded-lg border bg-white shadow-lg"
                    />
                    {date && (
                        <p className="mt-4 text-sm text-gray-700 bg-white/80 rounded-lg p-3">
                            📅 Selected: <strong>{date.toDateString()}</strong>
                        </p>
                    )}
                </div>
            </div>
        );
    }
};
