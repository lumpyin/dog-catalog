import React, { useState, useEffect } from 'react';
import BreedCard from './BreedCard';
import CompareDialog from "./CompareDialog"
import { Flex, View, ProgressCircle, Button } from '@adobe/react-spectrum';
import { fetchBreeds } from '../services';
const Container: React.FC = () => {
    const [breeds, setBreeds] = useState([] as any[]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    const [comparedBreedIds, setComparedBreedIds] = React.useState([] as any[]);
    const getBreeds = async (page: number) => {
        setLoading(true);
        const breedsFetched = await fetchBreeds(page);
        console.log(breedsFetched);
        setBreeds(breedsFetched);
        setLoading(false);
    }

    useEffect(() => {
        getBreeds(page);
    }, [page]);

    const hanldeNextClick = () => {
        setPage(page => page + 1);
        setComparedBreedIds([]);
    }
    const hanldePrevClick = () => {
        if (page >= 1) {
            setPage(page => page - 1);
            setComparedBreedIds([]);
        }
    }
    const toggleSelect = (breedId: any) => {
        const copyComparedBreedIds = [...comparedBreedIds];

        const foundIdx = comparedBreedIds.findIndex(id => id === breedId);
        if (foundIdx !== -1) {
            copyComparedBreedIds.splice(foundIdx, 1);
        } else {
            copyComparedBreedIds.push(breedId);
        }
        setComparedBreedIds(copyComparedBreedIds);
    }
    return <View marginBottom={60}>
        {loading ? <ProgressCircle aria-label="Loading…" isIndeterminate /> : <><CompareDialog breeds={breeds} comparedBreedIds={comparedBreedIds} />
            <Flex direction="row" gap="size-100" justifyContent="center" wrap columnGap={50} UNSAFE_className="container">{breeds.map((breed, idx) => (
                <BreedCard breed={breed} comparedBreedIds={comparedBreedIds} key={idx} toggleSelect={toggleSelect} />
            ))}</Flex>
            <View paddingTop="size-500" paddingX="size-500">
                <Flex direction="row" justifyContent="right" gap="size-150">
                    <Button variant="cta" onPress={hanldePrevClick} isDisabled={page === 0}>Prev</Button>
                    <Button variant="cta" onPress={hanldeNextClick} isDisabled={breeds.length < 10}>Next</Button>
                </Flex>
            </View></>}

    </View >;
};

export default Container;