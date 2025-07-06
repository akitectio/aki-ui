import React, { useState } from 'react';
import { cn } from '../../utils';

export interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    mode?: 'single' | 'multiple' | 'range';
    selected?: Date | Date[] | { from: Date; to?: Date };
    onSelect?: (date: Date | Date[] | { from: Date; to?: Date } | undefined) => void;
    disabled?: (date: Date) => boolean;
    className?: string;
    showOutsideDays?: boolean;
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
    ({
        mode = 'single',
        selected,
        onSelect,
        disabled,
        className,
        showOutsideDays = true,
        ...props
    }, ref) => {
        const [currentMonth, setCurrentMonth] = useState(new Date());

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

        const getDaysInMonth = (date: Date) => {
            return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        };

        const getFirstDayOfMonth = (date: Date) => {
            return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        };

        const isDateSelected = (date: Date) => {
            if (!selected) return false;

            if (mode === 'single') {
                return selected instanceof Date &&
                    date.toDateString() === selected.toDateString();
            }

            if (mode === 'multiple') {
                return Array.isArray(selected) &&
                    selected.some(d => d.toDateString() === date.toDateString());
            }

            if (mode === 'range') {
                const range = selected as { from: Date; to?: Date };
                if (!range.from) return false;
                if (!range.to) return date.toDateString() === range.from.toDateString();
                return date >= range.from && date <= range.to;
            }

            return false;
        };

        const handleDateClick = (date: Date) => {
            if (disabled?.(date)) return;

            if (mode === 'single') {
                onSelect?.(date);
            } else if (mode === 'multiple') {
                const currentSelected = (selected as Date[]) || [];
                const isAlreadySelected = currentSelected.some(d =>
                    d.toDateString() === date.toDateString()
                );

                if (isAlreadySelected) {
                    onSelect?.(currentSelected.filter(d =>
                        d.toDateString() !== date.toDateString()
                    ));
                } else {
                    onSelect?.([...currentSelected, date]);
                }
            } else if (mode === 'range') {
                const range = (selected as { from: Date; to?: Date }) || { from: new Date() };

                if (!range.from || (range.from && range.to)) {
                    onSelect?.({ from: date });
                } else if (range.from && !range.to) {
                    if (date < range.from) {
                        onSelect?.({ from: date, to: range.from });
                    } else {
                        onSelect?.({ from: range.from, to: date });
                    }
                }
            }
        };

        const renderCalendar = () => {
            const daysInMonth = getDaysInMonth(currentMonth);
            const firstDay = getFirstDayOfMonth(currentMonth);
            const days = [];

            // Previous month days
            const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 0);
            const daysFromPrevMonth = getDaysInMonth(prevMonth);

            for (let i = firstDay - 1; i >= 0; i--) {
                const date = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), daysFromPrevMonth - i);
                days.push(
                    <button
                        key={`prev-${daysFromPrevMonth - i}`}
                        className={cn(
                            'h-9 w-9 p-0 font-normal text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                            !showOutsideDays && 'invisible'
                        )}
                        onClick={() => handleDateClick(date)}
                        disabled={disabled?.(date)}
                    >
                        {daysFromPrevMonth - i}
                    </button>
                );
            }

            // Current month days
            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                const isSelected = isDateSelected(date);
                const isDisabled = disabled?.(date);
                const isToday = date.toDateString() === new Date().toDateString();

                days.push(
                    <button
                        key={day}
                        className={cn(
                            'h-9 w-9 p-0 font-normal',
                            isSelected && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
                            !isSelected && 'hover:bg-accent hover:text-accent-foreground',
                            isToday && !isSelected && 'bg-accent text-accent-foreground',
                            isDisabled && 'text-muted-foreground opacity-50 cursor-not-allowed'
                        )}
                        onClick={() => handleDateClick(date)}
                        disabled={isDisabled}
                    >
                        {day}
                    </button>
                );
            }

            // Next month days
            const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
            const remainingCells = totalCells - (firstDay + daysInMonth);

            for (let day = 1; day <= remainingCells; day++) {
                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, day);
                days.push(
                    <button
                        key={`next-${day}`}
                        className={cn(
                            'h-9 w-9 p-0 font-normal text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                            !showOutsideDays && 'invisible'
                        )}
                        onClick={() => handleDateClick(date)}
                        disabled={disabled?.(date)}
                    >
                        {day}
                    </button>
                );
            }

            return days;
        };

        const goToPreviousMonth = () => {
            setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
        };

        const goToNextMonth = () => {
            setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
        };

        return (
            <div
                ref={ref}
                className={cn('p-3', className)}
                {...props}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <button
                        className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                        onClick={goToPreviousMonth}
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="text-sm font-medium">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </div>

                    <button
                        className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                        onClick={goToNextMonth}
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Weekday headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {weekDays.map(day => (
                        <div key={day} className="h-9 w-9 text-center text-sm font-medium text-muted-foreground flex items-center justify-center">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                    {renderCalendar()}
                </div>
            </div>
        );
    }
);

Calendar.displayName = 'Calendar';
