import React, { useState, useEffect, useCallback } from 'react';
import BreedCard from './BreedCard';
import CompareDialog from "./CompareDialog"
import { Flex, View, ProgressCircle, Button, Text } from '@adobe/react-spectrum';
import { fetchBreeds } from '../services';
import { BreedType } from '../types';
const Container: React.FC = () => {
    const [breeds, setBreeds] = useState<BreedType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(0);

    const [comparedBreedIds, setComparedBreedIds] = React.useState<number[]>([]);
    const getBreeds = async (page: number) => {
        setLoading(true);
        try {
            const breedsFetched = await fetchBreeds(page);
            setBreeds(breedsFetched);
            setLoading(false);
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        getBreeds(page);
    }, [page]);

    const handleClick = useCallback(
        (direction: string) => {
            if (direction === 'prev') {
                if (page >= 1) {
                    setPage(page => page - 1);

                }
            } else {
                setPage(page => page + 1);
            }
            setComparedBreedIds([]);
        },
        [page]
    );
    const toggleSelect = (breedId: number) => {
        const copyComparedBreedIds = [...comparedBreedIds];

        const foundIdx = comparedBreedIds.findIndex(id => id === breedId);
        if (foundIdx !== -1) {
            copyComparedBreedIds.splice(foundIdx, 1);
        } else {
            copyComparedBreedIds.push(breedId);
        }
        setComparedBreedIds(copyComparedBreedIds);
    }
    const renderBreedList = () => {

        if (error) {
            return (<Text>Something wrong with server</Text>)
        }
        return (<><CompareDialog breeds={breeds} comparedBreedIds={comparedBreedIds} />
            <Flex direction="row" gap="size-100" justifyContent="center" wrap columnGap={50} UNSAFE_className="container">{breeds.map((breed, idx) => (
                <BreedCard breed={breed} comparedBreedIds={comparedBreedIds} key={idx} toggleSelect={toggleSelect} />
            ))}</Flex>
            <View paddingTop="size-500" paddingX="size-500">
                <Flex direction="row" justifyContent="right" gap="size-150">
                    <Button variant="cta" onPress={() => handleClick('prev')} isDisabled={page === 0}>Prev</Button>
                    <Button variant="cta" onPress={() => handleClick('next')} isDisabled={breeds.length < 10}>Next</Button>
                </Flex>
            </View></>)
    }

    return <View marginBottom={60} data-testid="container">
        {loading ? <ProgressCircle aria-label="Loading…" isIndeterminate /> : renderBreedList()}
    </View >;
};

export default Container;