import React from 'react';
import { Flex, View, Checkbox, DialogTrigger, ActionButton, Dialog, Heading, Divider, Content, Image, Text } from "@adobe/react-spectrum";
import BreedCardColumn from './BreedCardColumn';
import { usePress } from 'react-aria';
import { BreedCardPropsType } from '../types'

const BreedCard: React.FC<BreedCardPropsType> = (props) => {
    const { breed, comparedBreedIds, toggleSelect } = props;
    let { pressProps } = usePress({
        onPress: (e) => {
            console.log(breed.id)
            toggleSelect(breed.id)
        }
    });
    return (
        <div {...pressProps}>
            <Flex direction='column' key={breed.name} height="size-3000"  >
                <View height="size-600" width="size-1600" >
                    {breed.name}
                </View>
                <Flex height="100%" width="120px">
                    <Image src={breed.image.url} alt={breed.name} objectFit="cover" />
                </Flex>
                <Checkbox isSelected={comparedBreedIds.includes(breed.id)} onChange={() => { toggleSelect(breed.id) }} >
                    {comparedBreedIds.includes(breed.id) ? 'Selected' : 'Unselected'}
                </Checkbox>
                <DialogTrigger isDismissable>
                    <ActionButton>See Details</ActionButton>
                    {(close) => (
                        <Dialog>
                            <Heading>
                                <Flex alignItems="center" gap="size-100">
                                    <Text>
                                        {breed.name}
                                    </Text>
                                </Flex>
                            </Heading>
                            <Divider />
                            <Content>
                                <BreedCardColumn breed={breed} />
                            </Content>


                        </Dialog>
                    )}
                </DialogTrigger>
            </Flex >
        </div>
    )
};

export default BreedCard;