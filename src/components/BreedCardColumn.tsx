import { Flex, Image } from "@adobe/react-spectrum";
import { BreedCardColumnPropsType } from "../types";
import TextWithDivider from "./TextWithDivider";
const BreedCardColumn: React.FC<BreedCardColumnPropsType> = (props) => {
  const { breed } = props;
  return (
    <Flex direction="column" gap="size-125" alignContent="center" key={breed.id} flex="1">
      <TextWithDivider name={'Bred Name'} text={breed.name} />
      <TextWithDivider name={'Height'} text={breed.height.metric} />
      <TextWithDivider name={'Weight'} text={breed.weight.metric} />
      <TextWithDivider name={'Bred For'} text={breed.bred_for} />
      <TextWithDivider name={'Life Span'} text={breed.life_span} />
      <TextWithDivider name={'Origin'} text={breed.origin} />
      <TextWithDivider name={'Temperament'} text={breed.temperament} />
      <TextWithDivider name={'Bred Name'} text={breed.name} />
      <Image src={breed.image.url} alt={breed.name} objectFit="cover" maxWidth="100%" />
    </Flex>
  )
};
export default BreedCardColumn;