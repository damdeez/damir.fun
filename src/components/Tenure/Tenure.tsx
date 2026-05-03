interface TenureProps {
  startYear: number;
  startMonth: number;
  endYear?: number;
  endMonth?: number;
}

const calcDuration = (
  startYear: number,
  startMonth: number,
  endYear?: number,
  endMonth?: number,
): string => {
  const now = new Date();
  const eYear = endYear ?? now.getFullYear();
  const eMonth = endMonth ?? now.getMonth() + 1;
  let years = eYear - startYear;
  let months = eMonth - startMonth;

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} yr${years !== 1 ? 's' : ''}`);
  }

  if (months > 0) {
    parts.push(`${months} mo${months !== 1 ? 's' : ''}`);
  }

  return parts.join(' ') || '< 1 mo';
};

const Tenure = ({ startYear, startMonth, endYear, endMonth }: TenureProps) => {
  return (
    <span className='tenure'>
      &middot; {calcDuration(startYear, startMonth, endYear, endMonth)}
    </span>
  );
};

export default Tenure;
