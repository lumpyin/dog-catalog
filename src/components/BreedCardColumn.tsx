import { Flex, Text, Image, Divider } from "@adobe/react-spectrum";
import { BreedCardColumnPropsType } from "../types";

const BreedCardColumn: React.FC<BreedCardColumnPropsType> = (props) => {
  const { breed } = props;
  return (
    <Flex direction="column" gap="size-125" alignContent="center" key={breed.id} flex="1">
      <Text>Bred Name: {breed.name}</Text>
      <Divider size="S" />
      <Text>Height: {breed.height.metric}</Text>
      <Divider size="S" />
      <Text>Weight: {breed.weight.metric}</Text>
      <Divider size="S" />
      <Text>Bred For: {breed.bred_for}</Text>
      <Divider size="S" />
      <Text>Life Span: {breed.life_span}</Text>
      <Divider size="S" />
      <Text>Origin: {breed.origin}</Text>
      <Divider size="S" />
      <Text>Temperament: {breed.temperament}</Text>
      <Divider size="S" />
      <Text>Bred Name: {breed.name}</Text>
      <Divider size="S" />
      <Image src={breed.image.url} alt={breed.name} objectFit="cover" maxWidth="100%" />
    </Flex>
  )
};
export default BreedCardColumn;