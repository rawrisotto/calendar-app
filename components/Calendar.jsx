"use client";

const Calendar = () => {
  return (
    <div className="w-96 mx-auto rounded-md border-[1px] border-black h-fit">
      {/* Month, Prev, Next */}
      <div className="flex items-center border-b-[1px] p-4">
        <h2 className="font-semibold text-gray-900 flex-auto">Oct 2024</h2>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-500 p-1.5 text-sm"
        >
          PREV
        </button>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-500 p-1.5 text-sm"
        >
          NEXT
        </button>
      </div>

      {/* Days of the week */}
      <div className="grid grid-cols-7 text-sm leading-6 text-center text-gray-500">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
    </div>
  );
};

export default Calendar;
