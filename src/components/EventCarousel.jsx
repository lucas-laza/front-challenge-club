import { useRef } from 'react';
import EventCard from './EventCard';
import '../assets/scss/main.scss';

const EventCarousel = ({ events, onEventClick }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount =
        direction === 'left'
          ? -carouselRef.current.clientWidth
          : carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="event-carousel-container">
      <div className="event-carousel" ref={carouselRef}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
            onClick={() => onEventClick(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
