import { CalendarSlots, SlotsToClasses } from "@nextui-org/react";

const tooltipClassNames: SlotsToClasses<'base' | 'content'> = { base: 'border-none bg-none shadow-none', content: 'border-none bg-none shadow-none' }

const calendarClassNames: SlotsToClasses<CalendarSlots> = {
    base: "rounded-[10px] bg-white border border-button-secondary",
    prevButton: 'rounded-[5px] bg-button-secondary text-text-gray',
    nextButton: 'rounded-[5px] bg-button-secondary text-text-gray',
    header: 'capitalize',
    cellButton: [
        'data-[selected=true]:bg-button-primary data-[selected=true]:data-[hover=true]:bg-button-primary',
        'data-[hover=true]:bg-button-primary/20 data-[hover=true]:text-button-primary'
    ],
    grid: 'bg-white p-4 gap-5',
    headerWrapper: 'mb-3',
    gridBody: 'bg-white',
}

export { calendarClassNames, tooltipClassNames };

