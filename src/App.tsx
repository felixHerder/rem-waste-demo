import {useState} from 'react';

import CardGrid from '@/components/CardGrid';
import SkipCard from '@/components/SkipCard';
import useGetSkips from '@/service/useGetSkips';
import LoadingIndicator from './components/LoadingIndicatior';

function App() {
  const {isFetching, data: skipList, isError, error} = useGetSkips();
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  console.log({isFetching, skipList, isError, error});

  if (isFetching) {
    return <LoadingIndicator />;
  }

  return (
    <CardGrid>
      {skipList.map(skip => {
        const {id, size, priceBeforeVat, allowedOnRoad, hirePeriodDays} = skip;
        return (
          <SkipCard
            {...{
              key: id,
              id,
              size,
              priceBeforeVat,
              allowedOnRoad,
              hirePeriodDays,
              setSelectedSkipId,
              isSelected: id === selectedSkipId,
            }}
          />
        );
      })}
    </CardGrid>
  );
}

export default App;
