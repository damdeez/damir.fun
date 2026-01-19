import { useEffect, useRef, useState } from 'react';
import './coffeecounter.scss';

const MORNING_COFFEE_HOUR = 9; // 9 AM
const AFTERNOON_COFFEE_HOUR = 14; // 2 PM

const getCoffeeCount = (): number => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentHour = now.getHours();

  // Convert to Monday-start week (0 = Monday, 6 = Sunday)
  const daysSinceMonday = (dayOfWeek + 6) % 7;

  // Coffees from completed days (2 per day)
  let count = daysSinceMonday * 2;

  // Add today's coffees based on time
  if (currentHour >= MORNING_COFFEE_HOUR) {
    count += 1;
  }
  if (currentHour >= AFTERNOON_COFFEE_HOUR) {
    count += 1;
  }

  return count;
};

const CoffeeCounter = () => {
  const [coffeeCount, setCoffeeCount] = useState<number>(0);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    setCoffeeCount(getCoffeeCount());

    // Update every minute to catch coffee time transitions
    const interval = setInterval(() => {
      setCoffeeCount(getCoffeeCount());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted.current) {
    return null;
  }

  const latteIcons = '☕'.repeat(coffeeCount);

  return (
    <div
      className='coffee-counter'
      role='status'
      aria-label={`${coffeeCount} lattes this week`}
    >
      <span className='coffee-label'>Lattes this week:</span>
      <span className='coffee-icons'>{latteIcons}</span>
    </div>
  );
};

export default CoffeeCounter;
