import { useState } from 'react';

export default function ScheduleComponent() {
    const dates = [
        { id: 1, day: '21 sentabr', label: 'Bugun', availableTimes: ['11:00', '12:00', '12:30', '14:00', '15:00', '17:00'] },
        { id: 2, day: '22 sentabr', label: 'Ertaga', availableTimes: ['10:00', '12:30', '15:00', '17:00'] },
        { id: 3, day: '23 sentabr', label: 'Juma', availableTimes: ['11:00', '12:30', '14:30'] },
    ];

    const [selectedDate, setSelectedDate] = useState(dates[0]);
    const [selectedTime, setSelectedTime] = useState('');

    // Kunni tanlash
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime('');
    };

    // Vaqtni tanlash
    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    // Tanlangan vaqt va kunga tasdiqlash funksiyasi
    const handleSubmit = () => {
        if (!selectedTime) {
            alert('Iltimos, vaqtni tanlang.');
            return;
        }

        alert(`Tanlangan qabul: ${selectedDate.day} kuni, ${selectedTime} da.`);
    };

    return (
        <div className="max-w-xl">
             <h4 className="text-blue text-2xl font-bold">Shifokor qabuliga yoziling</h4>
             <h5 className="text-black text-base my-8">Ish jadvali</h5>

            <div className="flex space-x-3 overflow-x-auto pb-6">
                {dates.map((date) => (
                    <button
                        key={date.id}
                        onClick={() => handleDateChange(date)}
                        className={`p-4 rounded-md border shadow-md text-center ${selectedDate.id === date.id
                            ? 'border-blue bg-transparent'
                            : 'border-transparent bg-white'
                            }`}
                    >
                        <p className="text-sm text-black mb-1 font-medium">{date.day}</p>
                        <p className="text-base text-blue font-semibold">{date.label}</p>
                    </button>
                ))}
            </div>


            <div className="flex flex-wrap gap-3 mb-6">
                {selectedDate.availableTimes.map((time, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleTimeChange(time)}
                        className={`py-2 px-4 rounded-md font-semibold shadow-md text-sm ${selectedTime === time
                            ? 'bg-blue text-white'
                            : 'bg-[white] text-black'
                            }`}
                    >
                        {time}
                    </button>
                ))}
            </div>


            {/* <button
                onClick={handleSubmit}
                className="w-[20%] py-2 bg-blue text-[white] font-medium rounded-md shadow-md hover:bg-blue transition-colors"
            >
                Tasdiqlash
            </button> */}
        </div>
    );
}
